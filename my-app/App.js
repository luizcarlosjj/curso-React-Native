import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class App extends Component{
  render() {

    let nome = 'Luiz';
    let img = 'https://files.tecnoblog.net/wp-content/uploads/2018/09/linus-torvalds-dedo-meio-700x394.jpg'


    return(
      <View>
        <Text style={{color:'#ff0000', fontSize: 25, margin: 50}}>
          Sujeito Programador 
        </Text>

        <Text style={{fontSize: 50}}> {nome} </Text>

        <Jobs largura={400} altura={600} nome="Torvald Linux"/>

      </View>
    )
  }
}

class Jobs extends Component{
  render(){  

    let img = 'https://files.tecnoblog.net/wp-content/uploads/2018/09/linus-torvalds-dedo-meio-700x394.jpg'

    return(
      <View>
        <Image 
          source={{ uri: img}}
          style={{width: this.props.largura , height: this.props.altura}}
        />
        <Text> {this.props.nome} </Text>
      </View>
    )
  }
}

export default App;