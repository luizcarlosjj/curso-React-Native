import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      textoFrase : '',
      img: require('./src/biscoito.png'),

    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = [
      'A cada hora que passa eu fico mais feliz... Sabe por quê? É uma hora a menos pra eu poder te ver... (Jonathas Hardy)',
      'Filho que pais amargura, jamais conte com ventura.',
      'ABRA SUA MENTE E SE REINVENTE!',
      'Sabe o meu coração? Ele é seu.',
      'Hoje em dia as pessoas sabem o preço de tudo, mas não sabem o valor de nada',
      'Fiz um pouco de bem; é a minha melhor obra.',
      'Não confunda Falta de oportunidade com falta de Vontade!',
      'Na vida, quem perde o telhado ganha as estrelas.',
      'Plante o seu melhor todos os dias, seja paz na vida das pessoas, espalhe o AMOR e faça o bem. Deus se agrada de um coração puro, disposto a lutar pelos seus sonhos sem querer prejudicar ninguém. Bom dia!'
    ];
  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)

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

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Abrir Biscoito</Text>
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
    justifyContent: 'center'
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