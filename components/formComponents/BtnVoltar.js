import { TouchableOpacity, StyleSheet, Text } from "react-native"; 
import { useRouter } from "expo-router";

export default function BtnVoltar(){

    const router = useRouter();

    return(
        <TouchableOpacity 
            onPress={() => router.back()} 
            style={styles.btnVoltar}
        >
            <Text style={styles.btnVoltarTxt}>Voltar</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnVoltar:{
        height: 46,
        backgroundColor: 'white',
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    btnVoltarTxt:{
        color: 'black',
        fontWeight: 'bold'
    },
});