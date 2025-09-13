    import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import InputCheckBox from '../InputCheckBox';

    export default function Alimentacao({state, setState, array, setArray}){

        const [contador, setContador] = useState(2);

        function adicionarRef(){
            const novoItem = {
                id: contador,
                nome: '',
                valor: ''
            }

            const arrayTemporario = [...array, novoItem];

            setArray(arrayTemporario);

            setContador(contador + 1);
        }

        function removerRef(idRemover){
            const arrayTemporario = array.filter(item => item.id != idRemover);
            setArray(arrayTemporario);
            setContador(contador - 1);
            
        }

        return(
            <View>
                <InputCheckBox
                    txtInput="Alimentação"
                    btnState={state}
                    setbtnState={setState}
                    iconName="user"
                    size={19}
                />

                {(state == 'true') && (

                    <View>
                        {array.map((item, index) => {
                            return(

                                <View style={styles.refeicaoValor}>
                                    <TextInput
                                        style={[
                                            styles.inputRefeicao,
                                            styles.borderRight
                                        ]}
                                        placeholder="Refeição"
                                        placeholderTextColor={'black'}
                                    />
                                    <View style={styles.containerValor}>
                                        <Text>R$: </Text>
                                        <TextInput
                                            style={styles.inputValor}
                                            placeholder="Valor"
                                            placeholderTextColor={'black'}
                                        />
                                    </View>
                                    
                                </View>
                                
                            )
                        })}

                        <View style={styles.containerBtnRemoveAdd}>

                            <TouchableOpacity 
                                style={styles.removeRef}
                                onPress={() => removerRef(array.length)}
                            >
                                <Text style={styles.txtRemoveRef}>Remover</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={styles.addRef}
                                onPress={() => adicionarRef()}
                            >
                                <Text style={styles.txtAddRef}>Adicionar refeição</Text>
                            </TouchableOpacity>
                        </View> 

                    </View>
                )};



            </View>
            
        );
    };

    const styles = StyleSheet.create({
        refeicaoValor:{
            width: '100%',
            backgroundColor: 'red',
            flexDirection: 'row',
            backgroundColor: 'white',
            padding: 7,
            borderRadius: 4,
            marginBottom: 10
        },
        inputRefeicao:{
            textAlign: 'center',
            height: 40,
            width: '50%'
        },
        inputValor:{
            textAlign: 'center',
            height: 40,
            width: '50%',
        },
        borderRight:{
            borderRightWidth: 1,
            borderRightColor: 'black'
        },
        containerValor:{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 20,
            width: '50%'
        },
        addRef:{
            backgroundColor: 'rgba(6, 188, 0, 1)',
            alignItems: 'center',
            marginTop: 7,
            marginBottom: 20,
            height: 42,
            justifyContent: 'center',
            borderRadius: 4,
            width: '70%'
        },
        txtAddRef:{
            color: 'white',
            fontWeight: 'bold',
        },
        containerBtnRemoveAdd:{
            flexDirection: 'row',
            width: '100%',
        },
        removeRef:{
            backgroundColor: 'rgba(255, 0, 0, 1)',
            alignItems: 'center',
            marginTop: 7,
            marginBottom: 20,
            height: 42,
            justifyContent: 'center',
            borderRadius: 4,
            width: '30%'
        },
        txtRemoveRef:{
            color: 'white',
            fontWeight: 'bold'
        }

    });