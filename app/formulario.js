import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../colors';
import BtnEnviar from '../components/formComponents/BtnEnviar';
import BtnVoltar from '../components/formComponents/BtnVoltar';
import DataFim from '../components/formComponents/DataFim';
import DataInicio from '../components/formComponents/DataInicio';


export default function Formulario(){

    
    const [dateIni, setDateIni] = useState(new Date()); // STATE DATA INICIO
    const [dateFim, setDateFim] = useState(new Date()); // STATE DATA FIM

    return(

        <SafeAreaView style={styles.containerSafeView}>

            <Text style={styles.txtRelatorio}>Relatorio</Text>

            <ScrollView style={styles.containerScroll}>

                <View style={styles.containerView}>

                    <DataInicio
                        dateIni={dateIni}
                        setDateIni={setDateIni}
                    />

                    <DataFim
                        dateFim={dateFim}
                        setDateFim={setDateFim}
                    />

                </View>

            </ScrollView>

            <View style={styles.containerBtns}>
                <BtnVoltar/>
                <BtnEnviar/>
            </View>

        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    containerSafeView:{
        flex: 1,
        backgroundColor: 'grey',
    },
    containerScroll:{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        marginBottom: 10
    },
    containerView:{
        backgroundColor: 'rgba(120, 120, 0, 0.3)',
        padding: 5,
    },
    containerBtns:{
        flexDirection: 'row',
        paddingHorizontal: 15,
        justifyContent: 'space-around'
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