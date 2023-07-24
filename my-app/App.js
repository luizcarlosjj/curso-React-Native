import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

class App extends Component{


  render() {
    return(
      <View style={{flex: 1,backgroundColor: '#222'}}>
        <View style={{flex: 1, backgroundColor: 'red'}}></View>
        <View style={{flex: 1, backgroundColor: 'green'}}></View>
      </View>
    )
  }
}

export default App;