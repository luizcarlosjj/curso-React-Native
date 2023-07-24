import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

class App extends Component{


  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.textoPrincipal}> Eu sou o texto 1 </Text>
        <Text>Eu sou o texto 2</Text>
        <Text>Eu sou o texto 3</Text>
        <Text>Eu sou o texto 4</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container :{
    margin: 40,
    flex: 1,
  },
  textoPrincipal:{
    fontSize: 25,
    color: "red"
    
  }
});

export default App;