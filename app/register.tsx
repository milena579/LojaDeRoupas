import { Link, router } from "expo-router";
import { View, Text , Alert, TextInput, TouchableOpacity, StyleSheet} from "react-native";
import { FIREBASE_AUTH } from "@/firebaseConfig";
import React, { useEffect, useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function Register(){

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

  
    const auth = FIREBASE_AUTH;
    
    useEffect(() => {
      console.log(auth.currentUser)
    }, [auth.currentUser]);
  
    useEffect(() => {
      console.log(email, pass)
    }, [email, pass]);
  
    const register = () => {
     if(pass === confirmPass){
        createUserWithEmailAndPassword(auth, email, pass)
        .then((dadosUsuario) => {
            console.log(dadosUsuario);
            Alert.alert("Cadastrado com sucesso!");
        }).catch((err) => {
            alert(err.message);
        })
     }
    } 

    return(
        <>
            <Link href={"/"}>👈🏼Voltar</Link>
            <View>
            <View >
            <Text >E-mail</Text>
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
              placeholder="Digite o email"
            />
            <Text>Senha</Text>
            <TextInput
              style={styles.input}
              onChangeText={setPass}
              value={pass}
              placeholder="Ensira a senha"
              keyboardType="default"
              secureTextEntry={true}
            />
            <Text>Confirmar senha</Text>
            <TextInput
              style={styles.input}
              onChangeText={setConfirmPass}
              value={confirmPass}
              placeholder="Confirme a senha"
              keyboardType="default"
              secureTextEntry={true}
            />
            <View>
              <LinearGradient colors={['#614A97FF', '#6950C0FF', '#2A213AFF']} style={styles.button}>
                <TouchableOpacity style={styles.button} onPress={register}>
                  <Text  style={styles.btnText}>Cadastrar</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    tela : {
      display: "flex",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    login : {
      display:"flex",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      gap:15,
      backgroundColor: "#ffffff",
      height:"50%",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius:15
    },
    titulo : {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      paddingVertical: 20,
      fontSize: 25,
      fontWeight: "bold"
    },
    label :{
      display:"flex",
      width: "100%"
    },
    input: {
      paddingHorizontal: 10,
      paddingVertical: 8,
      backgroundColor: "#505050FF",
      color: "#ffffff",
      width: "100%",
      borderRadius: 10
    },
    button : {
      paddingHorizontal: 5,
      paddingVertical : 5,
      borderRadius:15,
      alignItems: "center"
    },
    btnText : {
      color: "#ffffff"
    },
    image: {
      height: "100%",
      width: "100%",
      justifyContent: 'center',
    }
  });
  