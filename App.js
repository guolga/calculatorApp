import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {firstnumber: '', secondnumber: '', resulttext: '', data: []}
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.container}>

      <Text style={{marginTop:30}}>Result: {this.state.resulttext}</Text>

      <TextInput style={{marginBottom: 10, width: 200, borderColor: 'gray', borderWidth: 1}} keyboardType='numeric' onChangeText={(firstnumber) => this.setState({firstnumber})} value={this.state.firstnumber}></TextInput>

      <TextInput style={{marginBottom: 10, width: 200, borderColor: 'gray', borderWidth: 1}} keyboardType='numeric' onChangeText={(secondnumber) => this.setState({secondnumber})} value={this.state.secondnumber}></TextInput>

        <View style={styles.button}>
        <Button onPress={this.calcSum} title='+' />
        <Button onPress={this.calcMin} title='-' />
        </View>

        <FlatList data = {this.state.data} renderItem={({item}) => 
        <Text>History: {item.key}</Text>}></FlatList>

        </View>
        </View>

    );
  }

calcSum = () => {
  const res = parseInt(this.state.firstnumber) + parseInt(this.state.secondnumber);
  const list = this.state.firstnumber + '+'+ this.state.secondnumber + '=' + res;
  this.setState({resulttext:res});
  this.setState({data: [...this.state.data, {key: list}], resulttext:res});
}

calcMin = () => {
  const res = parseInt(this.state.firstnumber) - parseInt(this.state.secondnumber);
  const list = this.state.firstnumber + '-'+ this.state.secondnumber + '=' + res;

  this.setState({resulttext:res});
  this.setState({data: [...this.state.data, {key: list}], resulttext:res});
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  });
