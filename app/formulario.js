import { useRouter } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../colors';
import InputCheckBox from '../components/InputCheckBox';
import InputComponent from '../components/InputComponent';
import ObsInput from '../components/ObsInput';


export default function formulario(){

    //STATE PLACA
    const [placa, setPlaca] = useState('Selecione uma placa');

    // STATES ZONA AZUL
    const [qtdZonaAzul, setQtdZonaAzul] = useState('');
    const [zonaAzul, setZonaAzul] = useState('');
    const [valorZonaAzul, setValorZonaAzul] = useState('');



    const [produtor, setProdutor] = useState('');
    const [job, setJob] = useState('');
    const [kmIni, setKmIni] = useState('');
    const [kmFim, setKmFim] = useState('');
    const [obs, setObs] = useState('');

    

    //STATES CHECKBOX
    const [pedagio, setPedagio] = useState('');
    const [estacionamento, setEstacionamento] = useState('');
    const [inversor, setInversor] = useState('');
    
    const [almoco, setAlmoco] = useState('');
    const [viagem, setViagem] = useState('');
    const [parceiro, setParceiro] = useState('');

    //STATES VALORES
    const [valorEstacionamento, setValorEstacionamento] = useState('');
    const [localViagem, setLocalViagem] = useState('');
    const [valorPedagioParceiro, setValorPedagioParceiro] = useState('');


    //STATES HORARIOS
    //INÍCIO
    const [dateIni, setDateIni] = useState(new Date());
    const [timeIni, setTimeIni] = useState(new Date());

    //TÉRMINO
    const [dateFim, setDateFim] = useState(new Date());
    const [timeFim, setTimeFim] = useState(new Date());



    const router = useRouter();

    return(
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            style={{ flex: 1 }}
        >
            <ScrollView 
                style={styles.containerScroll}
                contentContainerStyle={styles.containerView} // APLICAÇÃO CORRETA DO ESTILO DE CONTEÚDO
            >
                <Text style={styles.txtRelatorio}>Relatório de serviço</Text>
                

                

                

                <InputCheckBox
                    txtInput="Estacionamento"
                    btnState={estacionamento}
                    setbtnState={setEstacionamento}
                    iconName="user"
                    size={20}
                />

                {estacionamento == 'true' && (
                    <InputComponent
                        txtInput="Valor (estacionamento)"
                        txtPlaceholder="Digite aqui"
                        setState={setValorEstacionamento}
                        value={valorEstacionamento}
                        iconName="road"
                        size={20}
                    />
                )}

                

                <InputCheckBox
                    txtInput="Inversor"
                    btnState={inversor}
                    setbtnState={setInversor}
                    iconName="user"
                    size={20}
                />

                

                <ObsInput
                    txtInput="Obs"
                    txtPlaceholder="Digite aqui"
                    setState={setObs}
                    value={obs}
                    iconName="road"
                    size={20}     
                />


                <TouchableOpacity 
                    style={styles.btnEnviar}
                >
                    <Text style={styles.btnEnviarTxt}>Enviar Relatório</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => router.back()} 
                    style={styles.btnVoltar}
                >
                    <Text style={styles.btnVoltarTxt}>Voltar</Text>
                </TouchableOpacity>
            
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    containerScroll:{
        backgroundColor: 'black',
    },
    containerView:{
        padding: 20,
        alignItems: 'center',
        paddingVertical: 50
    },
    btnVoltar:{
        height: 35,
        backgroundColor: 'white',
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginRight: 266
    },
    btnVoltarTxt:{
        color: 'black',
        fontWeight: 'bold'
    },
    btnEnviar:{
        height: 55,
        backgroundColor: 'white',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginBottom: 50
    },
    btnEnviarTxt:{
        color: 'black',
        fontWeight: 'bold'
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