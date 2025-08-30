import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from '../colors';

export default function InputCheckBox({txtInput, btnState, setbtnState}){

    function pressYes(){
        setbtnState(true)
    }

    function pressNo(){
        setbtnState(false)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.txtInput}>{txtInput}</Text>

            <TouchableOpacity 
                style={[
                    styles.checkBox,
                    btnState == true && styles.checkBoxTrue
                ]}
                onPress={pressYes}
            >
                <Text style={styles.txtCheckBox}>Sim</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[
                    styles.checkBox,
                    btnState == false && styles.checkBoxFalse
                ]}
                onPress={pressNo}
            >
                <Text style={styles.txtCheckBox}>Não</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: colors.orange,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 15,
        padding: 5,
        borderRadius: 5
    },
    txtInput:{
        flex: 1,
        marginLeft: 10,
        marginRight: 20,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    checkBox:{
        backgroundColor: 'white',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        width: 45,
        fontWeight: 'bold',
        margin: 2,
        borderRadius: 5,
    },
    txtCheckBox:{
        color: 'black',
        fontWeight: 'bold'
    },
    checkBoxTrue:{
        backgroundColor: 'rgba(17, 255, 0, 1)'
    },
    checkBoxFalse:{
        backgroundColor: 'red'
    }

});