import React from "react";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
    },
    text : {
        fontSize: 20,
        color: '#000',
    },
    container :{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30,
    },

    iconButton: {
        color: '#ffffff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    bottonNewTask: {
        width:60,
        height:60,
        position: 'absolute',
        bottom: 30,
        left:20,
        backgroundColor: '#F92e6a',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Tasks: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginRight: 10,
    },
    deleteTask: {
        justifyContent: 'center',
        paddingLeft: 10,
        margin : 15,
    },
    descriptionText: {
        width: '75%',
        alignContent: 'flex-start',
        backgroundColor: '#F92e6a',
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 10,
        marginRight : 15,
        color: '#f5fffb',
    }, 

    descriptionTextAsDone: {
        width: '75%',
        alignContent: 'flex-start',
        backgroundColor: '#f5f5f5cf',
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 10,
        marginRight : 15,
        color: '#696969',
        textDecorationLine: 'line-through',
    }, 
});


export default styles