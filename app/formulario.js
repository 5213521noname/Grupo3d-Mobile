import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../colors';
import DateComponent from '../components/DateComponent';
import InputCheckBox from '../components/InputCheckBox';
import InputComponent from '../components/InputComponent';
import SelectPlaca from '../components/SelectPlaca';
import TimeComponent from '../components/TimeComponent';

export default function formulario(){

    //STATE PLACA
    const [placa, setPlaca] = useState('Selecione uma placa')

    //STATES INPUT
    const [produtor, setProdutor] = useState('');
    const [job, setJob] = useState('');
    const [km, setKm] = useState('');


    //STATES CHECKBOX
    const [pedagio, setPedagio] = useState('');
    const [estacionamento, setEstacionamento] = useState('');
    const [inversor, setInversor] = useState('');
    const [zonaAzul, setZonaAzul] = useState('');
    const [almoco, setAlmoco] = useState('');


    //STATES HORARIOS
    //INÍCIO
    const [dateIni, setDateIni] = useState(new Date());
    const [timeIni, setTimeIni] = useState(new Date());

    //TÉRMINO
    const [dateFim, setDateFim] = useState(new Date());
    const [timeFim, setTimeFim] = useState(new Date());



    const router = useRouter();

    return(
        <ScrollView style={styles.containerScroll}>
            <View style={styles.containerView}>

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
                    txtInput="Km rodado"
                    txtPlaceholder="Digite aqui"
                    setState={setKm}
                    value={km}
                    iconName="road"
                    size={20}
                />

                <InputCheckBox
                    txtInput="Pedágio"
                    btnState={pedagio}
                    setbtnState={setPedagio}
                    iconName="user"
                    size={20}
                />

                <InputCheckBox
                    txtInput="Estacionamento"
                    btnState={estacionamento}
                    setbtnState={setEstacionamento}
                    iconName="user"
                    size={20}
                />

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

                <InputCheckBox
                    txtInput="Almoço"
                    btnState={almoco}
                    setbtnState={setAlmoco}
                    iconName="user"
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
        marginBottom: 60
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