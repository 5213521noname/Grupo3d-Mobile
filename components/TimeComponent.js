import { FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../colors';

    export default function DateComponent({time, setTime, iconName, size, txtInput}){

        const [showPicker, setShowPicker] = useState(false);

        function novaHora(event, selectedTime){
            setTime(selectedTime);
            if(Platform.OS == 'android'){
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

                <Text style={styles.infoTime}>
                    {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </Text>
                
                <TouchableOpacity 
                    onPress={() => setShowPicker(true)} 
                    style={styles.TimeIni}
                >
                    <Text>Clique para selecionar a hora de início</Text>
                </TouchableOpacity>
                
                {showPicker && (
                    <View style={styles.containerTimePicker}>
                        <DateTimePicker
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            mode="time"
                            value={time}
                            onChange={novaHora}
                            locale="pt-br"
                        />

                        {Platform.OS == 'ios' && (
                            <TouchableOpacity 
                                style={styles.btnTimePicker}
                                onPress={() => {setShowPicker(false)}}
                            >
                                <Text style={styles.txtTimePicker}>Selecionar hora</Text>
                            </TouchableOpacity>
                        )}
                     </View>
                )}
                        
            </View>
        )
    }

    const styles = StyleSheet.create({
        TimeIni:{
            backgroundColor: 'white',
            width: '100%',
            padding: 12,
            color: 'black',
            borderBottomStartRadius: 6,
            borderBottomEndRadius: 6
        },
        container:{
            width: '100%',
            marginBottom: 14,
        },
        logoTxt:{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: colors.orange,
            borderRadius: 2,
            paddingLeft: 8,
            paddingVertical: 2,
            borderBottomWidth: 2,
            borderBottomColor: 'white',
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
        containerTimePicker:{
            backgroundColor: 'rgba(255, 255, 255, 0.09)',
            alignItems: 'center',
            paddingTop: 20,
            marginVertical: 20,
            borderRadius: 10
        },
        btnTimePicker:{
            backgroundColor: 'white',
            width: '50%',
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            marginBottom: 20,
            borderRadius: 7
        },
        txtTimePicker:{
            color: 'black',
        },

        infoTime:{
            color: 'white',
            width: '100%',
            backgroundColor: colors.orange,
            fontSize: 15,
            padding: 10,
            fontWeight: 'bold'
        }
    });

