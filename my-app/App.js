import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: ''
    }
    this.entrar = this.entrar.bind(this)
  }

  entrar() {
    this.setState({
      nome: 'Junior'
    })
  }

  render() {
    return(
      <View style={{ marginTop: 40 }}>

        <Text style={{ fontSize: 23, color: 'red', textAlign: 'center'}}> 
          {this.state.nome} 
        </Text>

        <Button title='Entrar' onPress={this.entrar} />
      </View>
    )
  }
}

export default App;