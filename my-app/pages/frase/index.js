import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class Frases extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.nomeFrase}>    {this.props.data.autor}   </Text>
                <Text style={styles.nomeFrase}>    {this.props.data.frase}   </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 20,
        marginBottom: 20,
    },
    nomeFrase:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 20,
    }
})