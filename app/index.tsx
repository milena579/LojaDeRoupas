import { Link, router} from "expo-router";
import React, { useEffect, useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { FIREBASE_AUTH } from "@/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const auth = FIREBASE_AUTH;
  
  useEffect(() => {
    console.log(auth.currentUser)
  }, [auth.currentUser]);

  useEffect(() => {
    console.log(email, pass)
  }, [email, pass]);

  const singIn = () => {
    signInWithEmailAndPassword(auth, email, pass)
    .then((dadosUsuer) => {
      console.log(dadosUsuer);
      router.push("/(tabs)")
    }) .catch((err) => {
      alert(err.message)
    });
  } 
  

  const image = {uri:'https://w0.peakpx.com/wallpaper/1010/973/HD-wallpaper-minimal-landscape-design-draw-landscape-minimal-mountain-nature-sky-tree-trending-trendy.jpg'}
  return (
    <>
      <View style={styles.tela}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.titulo}>Login</Text>
          <View style={styles.login}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
              placeholder="Digite seu email"
            />
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              onChangeText={setPass}
              value={pass}
              placeholder="Ensira sua senha"
              keyboardType="default"
              secureTextEntry={true}
            />
            <View>
              {/* <View>
                <Text>Count: {count}</Text>
              </View> */}
              <LinearGradient colors={['#614A97FF', '#6950C0FF', '#2A213AFF']} style={styles.button}>
                <TouchableOpacity style={styles.button} onPress={singIn}>
                  <Text style={styles.btnText}>Entrar</Text>
                </TouchableOpacity>
              </LinearGradient>

              <View>
                  <Link href={"register"}>Cadastrar novo usuário</Link>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
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
