import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../colors';
import BtnEnviar from '../components/formComponents/BtnEnviar';
import BtnVoltar from '../components/formComponents/BtnVoltar';
import DataFim from '../components/formComponents/DataFim';
import DataInicio from '../components/formComponents/DataInicio';
import Obs from '../components/formComponents/Obs';


export default function Formulario(){

    const [dateIni, setDateIni] = useState(new Date()); // STATE DATA INICIO
    const [dateFim, setDateFim] = useState(new Date()); // STATE DATA FIM

    return(
        <KeyboardAwareScrollView 
            style={{backgroundColor: 'black'}}
            extraHeight={10}
        >
        <SafeAreaView style={styles.containerSafeView}>

            <Text style={styles.txtRelatorio}>Relatorio</Text>

            <ScrollView style={styles.containerScroll}>

                <View style={styles.containerView1}>
                    <View style={styles.containerView}>
                        <DataInicio
                            dateIni={dateIni}
                            setDateIni={setDateIni}
                        />

                        <DataFim
                            dateFim={dateFim}
                            setDateFim={setDateFim}
                        />

                        <DataFim
                            dateFim={dateFim}
                            setDateFim={setDateFim}
                        />

                        <DataFim
                            dateFim={dateFim}
                            setDateFim={setDateFim}
                        />

                        <DataFim
                            dateFim={dateFim}
                            setDateFim={setDateFim}
                        />

                        <DataFim
                            dateFim={dateFim}
                            setDateFim={setDateFim}
                        />

                        <DataFim
                            dateFim={dateFim}
                            setDateFim={setDateFim}
                        />

                        <DataFim
                            dateFim={dateFim}
                            setDateFim={setDateFim}
                        />

                        <DataFim
                            dateFim={dateFim}
                            setDateFim={setDateFim}
                        />

                        <DataFim
                            dateFim={dateFim}
                            setDateFim={setDateFim}
                        />

                        <Obs/>
                    </View>
                </View>

            </ScrollView>

            <View style={styles.containerBtns}>
                <BtnVoltar/>
                <BtnEnviar/>
            </View>

        </SafeAreaView>
        </KeyboardAwareScrollView>
        
    );
}

const styles = StyleSheet.create({
    containerSafeView:{
        flex: 1,
        backgroundColor: 'black'
    },
    containerScroll:{
        backgroundColor: 'rgba(156, 156, 156, 0.5)',
        marginBottom: 10,
        borderRadius: 7
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
});