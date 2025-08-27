import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../colors';
import DateComponent from '../components/DateComponent';
import InputComponent from '../components/InputComponent';

export default function formulario(){
    //States inputs
    const [nome, setNome] = useState('joaquim');

    //States dataInicio
    const [dateIni, setDateIni] = useState(new Date())  

    const router = useRouter();

    return(
        <ScrollView style={styles.containerScroll}>
            <View style={styles.containerView}>

                <Text style={styles.txtRelatorio}>Relatório de serviço</Text>

                <DateComponent
                    date={dateIni}
                    setDate={setDateIni}
                    iconName="clock-o"
                    txtInput="Data de início"
                    size={20}
                />

                <InputComponent
                    txtInput="Job"
                    txtPlaceholder="Digite aqui"
                    setState={setNome}
                    value={nome}
                    iconName="briefcase"
                    size={19}
                />

                <InputComponent
                    txtInput="Produtor(a)"
                    txtPlaceholder="Digite aqui"
                    setState={setNome}
                    value={nome}
                    iconName="user"
                    size={20}
                />

                <InputComponent
                    txtInput="Km rodado"
                    txtPlaceholder="Digite aqui"
                    setState={setNome}
                    value={nome}
                />

                <InputComponent
                    txtInput="Apelido"
                    txtPlaceholder="Digite aqui"
                    setState={setNome}
                    value={nome}
                />

                <InputComponent
                    txtInput="Apelido"
                    txtPlaceholder="Digite aqui"
                    setState={setNome}
                    value={nome}
                />

                <InputComponent
                    txtInput="Apelido"
                    txtPlaceholder="Digite aqui"
                    setState={setNome}
                    value={nome}
                />

                <InputComponent
                    txtInput="Apelido"
                    txtPlaceholder="Digite aqui"
                    setState={setNome}
                    value={nome}
                />

                <InputComponent
                    txtInput="Apelido"
                    txtPlaceholder="Digite aqui"
                    setState={setNome}
                    value={nome}
                />

                <InputComponent
                    txtInput="Apelido"
                    txtPlaceholder="Digite aqui"
                    setState={setNome}
                    value={nome}
                />

                <InputComponent
                    txtInput="Apelido"
                    txtPlaceholder="Digite aqui"
                    setState={setNome}
                    value={nome}
                />

                <InputComponent
                    txtInput="Apelido"
                    txtPlaceholder="Digite aqui"
                    setState={setNome}
                    value={nome}
                />

                <InputComponent
                    txtInput="Apelido"
                    txtPlaceholder="Digite aqui"
                    setState={setNome}
                    value={nome}
                />

                <InputComponent
                    txtInput="Apelido"
                    txtPlaceholder="Digite aqui"
                    setState={setNome}
                    value={nome}
                />

                <Text style={{color: 'white'}}>{nome}</Text>

                <TouchableOpacity 
                    onPress={() => router.back()} 
                    style={styles.btnVoltar}
                    >
                    <Text style={styles.btnVoltarTxt}>Voltar</Text>
                </TouchableOpacity>
            
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    containerScroll:{
        backgroundColor: 'black',
        flex: 1,
    },
    containerView:{
        padding: 20,
        alignItems: 'center',
        // flex: 1
        paddingVertical: 50
    },
    btnVoltar:{
        height: 35,
        backgroundColor: 'white',
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    btnVoltarTxt:{
        color: 'black'
    },
    inputForm:{
        width: '100%',
        height: 62,
        backgroundColor: 'white',
        padding: 15,
        fontSize: 16,
        color: 'black',
        marginVertical: 9,
        borderRadius: 7
    },
    txtRelatorio:{
        color: 'white',
        width: '100%',
        backgroundColor: colors.orange,
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 25,
        textAlign: 'center',
        paddingVertical: 22,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'white',
        borderStyle: 'solid'
    }
});