import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../colors';

export default function Placa({iconName, size, placa, setPlaca}){

    const [exibir, setExibir] = useState(false);

    const [placa1Selected, setPlaca1Selected] = useState(false);
    const [placa2Selected, setPlaca2Selected] = useState(false);
    const [placa3Selected, setPlaca3Selected] = useState(false);
    const [placa4Selected, setPlaca4Selected] = useState(false);

    const placas = {
        placa1: 'placa 1',
        placa2: 'placa 2',
        placa3: 'placa 3',
        placa4: 'placa 4',
    }

    function mudaPlaca(placa){
        setPlaca(placa);
        setExibir(false);
    }

    return(
        <View style={styles.container}>
            <View style={styles.iconTxt}>
                <FontAwesome
                    name={iconName}
                    size={size}
                    color="rgba(255, 255, 255, 1)"
                />

                <Text style={styles.txtIcon}>Placa do carro</Text>
            </View>

            {!exibir && (
                <TouchableOpacity 
                    style={styles.btnSetPlaca}
                    onPress={() => setExibir(true)}
                >
                <Text style={styles.btnSetPlacaTxt}>{placa}</Text>
                </TouchableOpacity>
            )}
            

            {exibir && (
                <View>

                    {!placa1Selected && (
                        <TouchableOpacity
                            style={styles.btnSetPlaca}
                            onPress={() => {
                                mudaPlaca(placas.placa1);
                                setPlaca1Selected(true);
                                setPlaca2Selected(false);
                                setPlaca3Selected(false);
                                setPlaca4Selected(false);
                            }}
                        >
                        <Text style={styles.btnSetPlacaTxt}>{placas.placa1}</Text>
                        </TouchableOpacity>
                    )}

                    {!placa2Selected && (
                        <TouchableOpacity
                            style={styles.btnSetPlaca}
                            onPress={() => {
                                mudaPlaca(placas.placa2);
                                setPlaca1Selected(false);
                                setPlaca2Selected(true);
                                setPlaca3Selected(false);
                                setPlaca4Selected(false);
                            }}
                        >
                        <Text style={styles.btnSetPlacaTxt}>{placas.placa2}</Text>
                        </TouchableOpacity>
                    )}
                    
                    {!placa3Selected && (
                        <TouchableOpacity
                            style={styles.btnSetPlaca}
                            onPress={() => {
                                mudaPlaca(placas.placa3);
                                setPlaca1Selected(false);
                                setPlaca2Selected(false);
                                setPlaca3Selected(true);
                                setPlaca4Selected(false);
                            }}
                        >
                        <Text style={styles.btnSetPlacaTxt}>{placas.placa3}</Text>
                        </TouchableOpacity>
                    )}

                    {!placa4Selected && (
                        <TouchableOpacity
                            style={styles.btnSetPlaca}
                            onPress={() => {
                                mudaPlaca(placas.placa4);
                                setPlaca1Selected(false);
                                setPlaca2Selected(false);
                                setPlaca3Selected(false);
                                setPlaca4Selected(true);
                            }}
                        >
                        <Text style={styles.btnSetPlacaTxt}>{placas.placa4}</Text>
                        </TouchableOpacity>
                    )}



                </View>
            )}
            
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.orange,
        width: '100%',
        textAlign: 'center',
        padding: 6,
        marginBottom: 17,
        borderRadius: 5,
    },
    iconTxt:{
        flexDirection: 'row',
        marginBottom: 6,
        marginTop: 5
    },
    btnSetPlaca:{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 5,
        marginTop: 5,
    },
    btnSetPlacaTxt:{
        color: 'black',
    },
    txtIcon:{
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 9,
        color: 'white'
    }
});