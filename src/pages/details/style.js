import React from "react";
import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    textInput: {
        height: 40,
        marginLeft: 10,
        width: '80%',
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 30,
        padding: 12,
    },
    bottonNewTask: {
        padding: 30,
        width: '80%',
        bottom: 30,
        //left:20,
        backgroundColor: '#F92e6a',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBottonNewTask:{
        fontSize: 15,
        color: '#fff',
        padding: 10,
    },

});


export default styles