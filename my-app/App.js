import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      timer : 0,
      textoTroca : 'VAI',
      ultimo: null
    }

    // Variavel do timer do relogio 
    this.timerNum = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai(){

    if(this.timerNum != null){
      // para o timer
      clearInterval(this.timerNum);
      this.timerNum = null;
      this.setState({textoTroca : 'VAI'})

    }else {
      // começa a girar o timer
      this.timerNum =  setInterval( () => {
        this.setState({timer: this.state.timer + 0.1})
      }, 100)
      this.setState({textoTroca : 'PARAR'})

    }
  }

  limpar(){
    if(this.timerNum != null){
      // para o timer
      clearInterval(this.timerNum);
      this.timerNum = null;
    }
    this.setState({
      timer: 0,
      textoTroca: 'VAI',
      ultimo: this.state.timer,
    })
  }

  render() {
    return(
      <View style={styles.container}>
        
        <Image 
          source={require('./src/cronometro.png')}
          style={styles.img}
        />

        <Text style={styles.timer}>  {this.state.timer.toFixed(1)}  </Text>
        
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.vai}>
            <Text style={styles.btnTexto}> {this.state.textoTroca} </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnTexto}> LIMPAR </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.areaUltima}>
          <Text style={styles.textoUltima}>
            {this.state.ultimo > 0 ? 'Ultimo tempo: ' + this.state.ultimo.toFixed(2) + 's' : ''}
          </Text>
        </View>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer:{
    marginTop: -205,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 20,
    borderRadius: 9
  },
  btnTexto:{
    fontSize:20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areaUltima:{
    marginTop: 50
  },
  textoUltima:{
    fontSize:25,
    fontStyle: 'italic',
    color: '#fff'
  }
})

export default App;