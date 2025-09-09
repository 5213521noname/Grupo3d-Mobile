import { useRouter } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../colors';
import DateComponent from '../components/DateComponent';
import InputCheckBox from '../components/InputCheckBox';
import InputComponent from '../components/InputComponent';
import ObsInput from '../components/ObsInput';
import SelectPlaca from '../components/SelectPlaca';
import TimeComponent from '../components/TimeComponent';

export default function formulario(){

    //STATE PLACA
    const [placa, setPlaca] = useState('Selecione uma placa');

    //STATES INPUT
    const [produtor, setProdutor] = useState('');
    const [job, setJob] = useState('');
    const [kmIni, setKmIni] = useState('');
    const [kmFim, setKmFim] = useState('');
    const [obs, setObs] = useState('');


    //STATES CHECKBOX
    const [pedagio, setPedagio] = useState('');
    const [estacionamento, setEstacionamento] = useState('');
    const [inversor, setInversor] = useState('');
    const [zonaAzul, setZonaAzul] = useState('');
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

                <SelectPlaca
                    iconName="car"
                    size={16}
                    setPlaca={setPlaca}
                    placa={placa}
                />

                <DateComponent
                    date={dateIni}
                    setDate={setDateIni}
                    iconName="clock-o"
                    txtInput="Data início"
                    size={20}
                />

                <TimeComponent
                    time={timeIni}
                    setTime={setTimeIni}
                    iconName="clock-o"
                    txtInput="Hora início"
                    size={20}
                />

                <DateComponent
                    date={dateFim}
                    setDate={setDateFim}
                    iconName="clock-o"
                    txtInput="Data final"
                    size={20}
                />

                <TimeComponent
                    time={timeFim}
                    setTime={setTimeFim}
                    iconName="clock-o"
                    txtInput="Hora final"
                    size={20}
                />

                <InputComponent
                    txtInput="Job"
                    txtPlaceholder="Digite aqui"
                    setState={setJob}
                    value={job}
                    iconName="briefcase"
                    size={19}
                />

                <InputComponent
                    txtInput="Produtor(a)"
                    txtPlaceholder="Digite aqui"
                    setState={setProdutor}
                    value={produtor}
                    iconName="user"
                    size={20}
                />

                <InputComponent
                    txtInput="Km Inicial"
                    txtPlaceholder="Digite aqui"
                    setState={setKmIni}
                    value={kmIni}
                    iconName="road"
                    size={20}
                />

                <InputComponent
                    txtInput="Km Final"
                    txtPlaceholder="Digite aqui"
                    setState={setKmFim}
                    value={kmFim}
                    iconName="road"
                    size={20}
                />

                <InputCheckBox
                    txtInput="Motorista parceiro"
                    btnState={parceiro}
                    setbtnState={setParceiro}
                    iconName="user"
                    size={20}
                />

                <InputCheckBox
                    txtInput="Pedágio"
                    btnState={pedagio}
                    setbtnState={setPedagio}
                    iconName="user"
                    size={20}
                />

                {(parceiro == 'true' && pedagio == 'true') && (
                    <InputComponent
                        txtInput="Valor pedágio"
                        txtPlaceholder="Digite aqui"
                        setState={setValorPedagioParceiro}
                        value={valorPedagioParceiro}
                        iconName="road"
                        size={20}
                    />
                )};

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
                    txtInput="Viagem"
                    btnState={viagem}
                    setbtnState={setViagem}
                    iconName="user"
                    size={20}
                />

                {viagem == 'true' && (
                    <InputComponent
                        txtInput="Local (viagem)"
                        txtPlaceholder="Digite aqui"
                        setState={setLocalViagem}
                        value={localViagem}
                        iconName="road"
                        size={20}
                        style={{padding: 0, margin: 0}}
                    />
                )}

                <InputCheckBox
                    txtInput="Inversor"
                    btnState={inversor}
                    setbtnState={setInversor}
                    iconName="user"
                    size={20}
                />

                <InputCheckBox
                    txtInput="Zona azul"
                    btnState={zonaAzul}
                    setbtnState={setZonaAzul}
                    iconName="user"
                    size={20}
                />

                {zonaAzul == 'true' && (
                    <InputComponent
                        txtInput="Quantidade (zona azul)"
                        txtPlaceholder="Digite aqui"
                        setState={setLocalViagem}
                        value={localViagem}
                        iconName="road"
                        size={20}
                    />
                )};

                {zonaAzul == 'true' && (
                    <InputComponent
                        txtInput="Valor (zona azul)"
                        txtPlaceholder="Digite aqui"
                        setState={setLocalViagem}
                        value={localViagem}
                        iconName="road"
                        size={20}
                    />
                )};

                <ObsInput
                    txtInput="Obs"
                    txtPlaceholder="Digite aqui"
                    setState={setObs} // CORRIGIDO: usando o estado 'obs'
                    value={obs} // CORRIGIDO: usando o estado 'obs'
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
        flexGrow: 1, // Adicionado para garantir a rolagem
        paddingVertical: 50
    },
    btnVoltar:{
        height: 35,
        backgroundColor: 'white',
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginRight: 235
    },
    btnVoltarTxt:{
        color: 'black'
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