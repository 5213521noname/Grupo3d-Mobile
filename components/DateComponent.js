import { FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Alert, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../colors';

    export default function DateComponent({date, setDate, iconName, size, txtInput}){

        const [showPicker, setShowPicker] = useState(false);
        const [showDate, setShowDate] = useState(new Date());
        const dataAtual = new Date();

        function novaData(event, selectedDate){
            if(Platform.OS == 'android'){
                setShowPicker(false);

                if(selectedDate > dataAtual){
                    Alert.alert("A data nao pode ser maior que a atual");
                }
                else {
                    setDate(selectedDate);
                    setShowDate(selectedDate);
                }
            } 
            
            if(Platform.OS == 'ios'){
                setDate(selectedDate);
            }
        }

        function fecharDatePickerIOS(){

            if(date > dataAtual){
                Alert.alert("A data nao pode ser maior que a atual");
            }
            else {
                setShowDate(date);
                setShowPicker(false);
            }
        }

        return(
            <View style={styles.container}>

                <View style={styles.logoTxt}>
                    <FontAwesome
                    name={iconName}
                    size={size}
                    color="rgba(255, 255, 255, 1)"
                    />
                
                    <Text style={styles.txt}>{txtInput}</Text>
                </View>

                
                <TouchableOpacity 
                    onPress={() => setShowPicker(true)} 
                    style={styles.dateIni}
                >
                    <Text>{`${showDate.toLocaleDateString()}`}</Text>
                </TouchableOpacity>
                
                {showPicker && (
                    <View style={styles.containerDateTimePicker}>
                        <DateTimePicker
                            display={Platform.OS === 'ios' ? 'inline' : 'default'}
                            mode="date"
                            value={date}
                            onChange={novaData}
                            locale="pt-br"
                        />

                        {Platform.OS == 'ios' && (
                            <TouchableOpacity 
                                style={styles.btnDateTimePicker}
                                onPress={fecharDatePickerIOS}
                            >
                                <Text style={styles.txtDateTimePicker}>Selecionar data</Text>
                            </TouchableOpacity>
                        )}
                     </View>
                )}
                        
            </View>
        )
    }

    const styles = StyleSheet.create({
        dateIni:{
            backgroundColor: 'white',
            width: '100%',
            padding: 12,
            color: 'black',
            borderBottomStartRadius: 6,
            borderBottomEndRadius: 6
        },
        container:{
            width: '100%',
            marginBottom: 17,
        },
        logoTxt:{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: colors.orange,
            borderRadius: 2,
            paddingLeft: 8,
            paddingVertical: 2,
            paddingBottom: 7,
            paddingTop: 5
        },
        txt:{
            width: '100%',
            paddingTop: 4,
            fontSize: 16,
            fontWeight: 'bold',
            marginLeft: 9,
            color: 'white'
        },
        containerDateTimePicker:{
            backgroundColor: 'rgba(255, 255, 255, 0.09)',
            alignItems: 'center',
            paddingTop: 20,
            marginVertical: 20,
            borderRadius: 10,
            display: Platform.OS == 'android' ? 'none' : 'flex'
        },
        btnDateTimePicker:{
            backgroundColor: 'white',
            width: '50%',
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            marginBottom: 20,
            borderRadius: 7
        },
        txtDateTimePicker:{
            color: 'black',
        },

        infoDate:{
            color: 'white',
            width: '100%',
            backgroundColor: colors.orange,
            fontSize: 15,
            padding: 10,
            fontWeight: 'bold'
        }
    });

