import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import api from './data/api';
import Frases from './pages/frase';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      textoFrase : '',
      img: require('./src/biscoito.png'),
      // api:
      frases : []
    };
    
    this.quebraBiscoito = this.quebraBiscoito.bind(this)
  }

  async componentDidMount(){
    // let numeroAleatorio = Math.floor(Math.random() * '366')
    const response = await api.get('/frases');
    this.setState({
      frases : response.data,
      // textoFrase : this.frases[numeroAleatorio]
    })
  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * '366')

    this.setState({
      textoFrase : this.frases[numeroAleatorio],
      img : require('./src/biscoitoAberto.png')
    })
  }

  render() {
    return(
      <View style={styles.container}>

        <Image 
          source={this.state.img}
          style={styles.img}
        />

        <Text> {this.state.textoFrase} </Text>

        <FlatList 
          data={this.state.frases}
          keyExtractor={item => item.id} 
          renderItem={({item}) => <Frases data={item}/>}
        />

        <TouchableOpacity style={styles.botao} onPress={this.componentDidMount}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Gerar Frase</Text>
          </View>
        </TouchableOpacity>



      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222'
  },
  img:{
    width: 250,
    height: 250
  },
  textoFrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    textAlign: 'center',
    fontStyle: 'italic'
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "#dd7b22",
    borderRadius: 25,
  },
  btnArea:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})

export default App;