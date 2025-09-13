import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Alert, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../colors';
import Alimentacao from '../components/formComponents/Alimentacao';
import Atribuicao from '../components/formComponents/Atribuicao';
import BtnEnviar from '../components/formComponents/BtnEnviar';
import BtnVoltar from '../components/formComponents/BtnVoltar';
import DataFim from '../components/formComponents/DataFim';
import DataInicio from '../components/formComponents/DataInicio';
import Estacionamento from '../components/formComponents/Estacionamento';
import HoraFim from '../components/formComponents/HoraFim';
import HoraInicio from '../components/formComponents/HoraInicio';
import Inversor from '../components/formComponents/Inversor';
import Job from '../components/formComponents/Job';
import KmFinal from '../components/formComponents/KmFinal';
import KmInicial from '../components/formComponents/KmInicial';
import ModalBack from '../components/formComponents/ModalBack';
import MotoristaParceiro from '../components/formComponents/MotoristaParceiro';
import Obs from '../components/formComponents/Obs';
import Pedagio from '../components/formComponents/Pedagio';
import ProdutorEmpresa from '../components/formComponents/ProdutorEmpresa';
import ProdutorPessoa from '../components/formComponents/ProdutorPessoa';
import Setor from '../components/formComponents/Setor';
import ZonaAzul from '../components/formComponents/zonaAzul';
import PlacaCarro from '../components/Placa';

export default function Formulario(){

    const [dateIni, setDateIni] = useState(new Date());
    const [dateFim, setDateFim] = useState(new Date());
    const [obs, setObs] = useState('');
    const [estacionamento, setEstacionamento] = useState('');
    const [valorEstacionamento, setValorEstacionamento] = useState('');
    const [horaInicio, setHoraInicio] = useState(new Date());
    const [horaFim, setHoraFim] = useState(new Date());
    const [job, setJob] = useState('');
    const [produtorEmpresa, setProdutorEmpresa] = useState('');
    const [produtorPessoa, setProdutorPessoa] = useState('');
    const [kmIni, setKmIni] = useState('');
    const [kmFim, setKmFim] = useState('');
    const [zonaAzul, setZonaAzul] = useState('');
    const [qtdZonaAzul, setQtdZonaAzul] = useState('');
    const [valorZonaAzul, setValorZonaAzul] = useState(0);
    const [inversor, setInversor] = useState('');
    const [pedagio, setPedagio] = useState('');
    const [parceiro, setParceiro] = useState('');
    const [valorPedagioParceiro, setValorPedagioParceiro] = useState(0);
    const [placa, setPlaca] = useState("Selecione a placa");
    const [atribuicao, setAtribuicao] = useState("Selecionar atribuição");
    const [setor, setSetor] = useState("Selecionar setor");
    const [outrosAtribuicao, setOutrosAtribuicao] = useState('');
    const [outrosSetor, setOutrosSetor] = useState('');

    const [alimentacao, setAlimentacao] = useState('');

    const [arrayAlimentacao, setArrayAlimentacao] = useState([
        {id: 1, refeicao: '', valor: ''},
    ]);

    const [showModal, setShowModal] = useState(false);


    const saveData = async () => {
        try{
            const objectData = {
                dateIni: dateIni,
                dateFim: dateFim,
                obs: obs,
                estacionamento: estacionamento,
                valorEstacionamento: valorEstacionamento,
                horaInicio: horaInicio,
                horaFim: horaFim,
                job: job,
                produtorEmpresa: produtorEmpresa,
                produtorPessoa: produtorPessoa,
                kmIni: kmIni,
                kmFim: kmFim,
                zonaAzul: zonaAzul,
                qtdZonaAzul: qtdZonaAzul,
                valorZonaAzul: valorZonaAzul,
                inversor: inversor,
                pedagio: pedagio,
                parceiro: parceiro,
                valorPedagioParceiro: valorPedagioParceiro,
                placa: placa,
                atribuicao: atribuicao,
                setor: setor,
                outrosAtribuicao: outrosAtribuicao,
                outrosSetor: outrosSetor,
                alimentacao: alimentacao,
                arrayAlimentacao: arrayAlimentacao,
            }
            const jsonValue = JSON.stringify(objectData);
            await AsyncStorage.setItem('@dadosForm', jsonValue)
            Alert.alert("Salvo com sucesso!");
        } 
        catch(e) {
            Alert.alert(`Erro ${e}`);
        }
    };


    const loadData = async () => {
        try{
            const jsonValue = await AsyncStorage.getItem('@dadosForm');
            if(jsonValue != null){
                const loadedData = JSON.parse(jsonValue)

                setDateIni(new Date(loadedData.dateIni))
                setDateFim(new Date(loadedData.dateFim))
                setObs(loadedData.obs)
                setEstacionamento(loadedData.estacionamento)
                setValorEstacionamento(loadedData.valorEstacionamento)
                setHoraInicio(new Date(loadedData.horaInicio))
                setHoraFim(new Date(loadedData.horaFim))
                setJob(loadedData.job)
                setProdutorEmpresa(loadedData.produtorEmpresa)
                setProdutorPessoa(loadedData.produtorPessoa)
                setKmIni(loadedData.kmIni)
                setKmFim(loadedData.kmFim)
                setZonaAzul(loadedData.zonaAzul)
                setQtdZonaAzul(loadedData.qtdZonaAzul)
                setValorZonaAzul(loadedData.valorZonaAzul)
                setInversor(loadedData.inversor)
                setPedagio(loadedData.pedagio)
                setParceiro(loadedData.parceiro)
                setValorPedagioParceiro(loadedData.valorPedagioParceiro)
                setPlaca(loadedData.placa)
                setAtribuicao(loadedData.atribuicao)
                setSetor(loadedData.setor)
                setOutrosAtribuicao(loadedData.outrosAtribuicao)
                setOutrosSetor(loadedData.outrosSetor)
                setAlimentacao(loadedData.alimentacao)
                setArrayAlimentacao(loadedData.arrayAlimentacao)
            }
        }
        catch(e){
            Alert.alert(`Erro ${e}`);
        }
    }


    useEffect(() => {
        loadData();
    }, []);


    return(
        <SafeAreaView style={styles.containerSafeView}>

            <Text style={styles.txtRelatorio}>Relatório de viagem</Text>

            <KeyboardAwareScrollView 
                extraScrollHeight={Platform.OS == 'ios' ? 75 : 100 } 
                style={styles.containerScroll}
            >
                <ScrollView>

                    <View style={styles.containerView1}>
                        <View style={styles.containerView}>

                            <PlacaCarro
                                state={placa}
                                setState={setPlaca}
                            />

                            <DataInicio
                                dateIni={dateIni}
                                setDateIni={setDateIni}
                            />
                            <HoraInicio
                                timeIni={horaInicio}
                                setTimeIni={setHoraInicio}
                            />

                            <DataFim
                                dateFim={dateFim}
                                setDateFim={setDateFim}
                            />
                            <HoraFim
                                timeFim={horaFim}
                                setTimeFim={setHoraFim}
                            />

                            <Job
                                job={job}
                                setJob={setJob}
                            />

                            <KmInicial
                                kmIni={kmIni}
                                setKmIni={setKmIni}
                            />

                            <KmFinal
                                kmFim={kmFim}
                                setKmFim={setKmFim}
                            />

                            <ProdutorEmpresa
                                produtorEmpresa={produtorEmpresa}
                                setProdutorEmpresa={setProdutorEmpresa}
                            />

                            <ProdutorPessoa
                                produtorPessoa={produtorPessoa}
                                setProdutorPessoa={setProdutorPessoa}
                            />

                            <Atribuicao
                                state={atribuicao}
                                setState={setAtribuicao}
                                setOutros={setOutrosAtribuicao}
                            />

                            <Setor
                                state={setor}
                                setState={setSetor}
                                setOutros={setOutrosSetor}
                            />

                            <MotoristaParceiro
                                parceiro={parceiro}
                                setParceiro={setParceiro}
                            />

                            <Pedagio
                                pedagio={pedagio}
                                setPedagio={setPedagio}
                                parceiro={parceiro}
                                valorPedagioParceiro={valorPedagioParceiro}
                                setValorPedagioParceiro={setValorPedagioParceiro}
                            />

                            <ZonaAzul
                                zonaAzul={zonaAzul}
                                setZonaAzul={setZonaAzul}
                                qtdZonaAzul={qtdZonaAzul}
                                setQtdZonaAzul={setQtdZonaAzul}
                                valorZonaAzul={valorZonaAzul}
                                setValorZonaAzul={setValorZonaAzul}

                            />

                            <Alimentacao
                                state={alimentacao}
                                setState={setAlimentacao}
                                array={arrayAlimentacao}
                                setArray={setArrayAlimentacao}
                            />

                            <Inversor
                                inversor={inversor}
                                setInversor={setInversor}
                            />

                            <Estacionamento
                                estacionamento={estacionamento}
                                valorEstacionamento={valorEstacionamento}
                                setEstacionamento={setEstacionamento}
                                setValorEstacionamento={setValorEstacionamento}
                            />
                            <Obs
                                obs={obs}
                                setObs={setObs}
                            />

                        </View>
                    </View>
                
                </ScrollView>
            </KeyboardAwareScrollView>


            <View style={styles.containerBtns}>
                <BtnVoltar
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
                <BtnEnviar/>
            </View>

                <ModalBack
                    visible={showModal}
                    setShowModal={setShowModal}
                    saveData={saveData}
                />

        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    containerSafeView:{
        flex: 1,
        backgroundColor: 'black'
    },
    containerScroll:{
        backgroundColor: 'rgba(128, 113, 124, 1)',
        marginBottom: 20,
        borderRadius: 7,
        paddingTop: 10
    },
    containerView1:{
        alignItems: 'center',
        width: '100%'
    },
    containerView:{
        padding: 5,
        alignItems: 'center',
        width: '92%'
    },
    containerBtns:{
        flexDirection: 'row',
        paddingHorizontal: 15,
        justifyContent: 'space-around',
        width: '100%'
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
})