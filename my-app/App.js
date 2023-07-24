import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class App extends Component{
  render() {

    let nome = 'Luiz';
    let img = 'https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png';

    return(
      <View>
        <Text style={{color:'#ff0000', fontSize: 25, margin: 50}}>
          Olá Mundo
        </Text>

        <Image 
          source={{ uri: img}}
          style={{width: 300, height: 300}}
        />

        <Text style={{fontSize: 50, padding: 50}}>
          {nome}
        </Text>

      </View>
    )
  }
}

export default App;