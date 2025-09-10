import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from '../assets/images/logo.png';
import { colors } from '../colors';

export default function Home(){

    const router = useRouter();
    
    function novoRelatorio(){
        router.push('./Formulario');
    }

    return(
        <View style={styles.containerView}>

            <Image
                source={logo}
                style={styles.logo}
            />

            <TouchableOpacity 
                style={styles.btnNovoRelatorio}
                onPress={novoRelatorio}
            >
                <Text style={styles.textNovoRelatorio}>Novo relatório</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    containerView:{
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textNovoRelatorio:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 15
    },
    btnNovoRelatorio:{
        backgroundColor: colors.orange,
        height: 50,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        borderWidth: 1.5,
        borderColor: 'white',
        borderStyle: 'solid'
    },
    logo:{
        height: 160,
        resizeMode: 'contain',
        marginBottom: 460
    },
    txtBemVindo:{
        color: 'white',
        marginBottom: 480,
        fontSize: 16,
        fontWeight: 'bold'
    }
});

