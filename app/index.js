import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import logo from '../assets/images/logo.png';
import { useRouter } from 'expo-router';
import { colors } from '../colors'


export default function index() {

  const [usuario, setUsuario] = useState('joaquim');
  const [senha, setSenha] = useState('123456789');

  const router = useRouter();

  function handleLogin(){
    if(usuario.trim() === '' || senha.trim() === ''){
      Alert.alert("Erro, preencha todos os campos");
      return
    }
    if(usuario.trim() === 'joaquim' && senha.trim() === '123456789'){
      router.replace('./home');
    } else {
      Alert.alert("Usuário ou senha inválidos!");
    }
  }

  return (
    <View style={styles.container}>

      <Image
        source={logo}
        style={styles.logo}
      />

      <View style={styles.containerInput}>
        <FontAwesome 
          name="user" 
          size={28} 
          color="black"
          style={{width: '10%', opacity: 0.4}}
        />

        <TextInput
          style={styles.input}
          placeholder="Usuario"
          placeholderTextColor="white"
          onChangeText={textUsuario => setUsuario(textUsuario)}
        />
      </View>

      <View style={styles.containerInput}>
        <FontAwesome 
          name="lock" 
          size={28} 
          color="black"
          style={{width: '10%', opacity: 0.4}}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={textSenha => setSenha(textSenha)}
        />
      </View>

      <TouchableOpacity 
        style={styles.buttonLogin}
        onPress={handleLogin}
      >
        <Text style={styles.buttonLoginText}>Fazer login</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 140
  },
  texto: {
    color: 'white',
  },
  input: {
    padding: 10,
    borderRadius: 7,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17.5,
    flex: 1
  },
  buttonLogin: {
    backgroundColor: 'white',
    height: 60,
    width: '78%',
    borderRadius: 7,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLoginText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold'
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.orange,
    padding: 5,
    borderRadius: 7,
    width: '78%',
    paddingRight: 60,
    margin: 4,
    paddingLeft: 35,
    height: 75,
    borderWidth: 2.5,
    borderColor: 'white',
    borderStyle: 'solid'
  },
  logo: {
    height: 190,
    marginBottom: 50,
    resizeMode: 'contain'
  }

});

