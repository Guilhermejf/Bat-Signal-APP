import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Image,
  Text,
  View,
  Button,
  ImageBackground,
  TextInput,
  Alert,
} from "react-native";
import HeaderLogo from "./assets/img/headLogo.png";
import Logo from "./assets/img/logo.png";
import City from "./assets/img/city.png";
import BatGif from "./assets/img/mocegogif.gif";
import { useState } from "react";

export default function App() {
  const [form, setForm] = useState(false);
  const [user, setUser] = useState('')
  function callForm() {
    setForm(true);
    setUser('')
  }

  function goHome(){
    setForm(false)
  }

  function sendForm(){
    if(user!=""){
      Alert.alert("Dados enviados",user+" Seus dados foram enviados com sucesso. Quando ver um morcego, ligue a lanterna e acene insistentemente.")
      setForm(false)
    }else{

      Alert.alert("Dados Incompleto","Assim, não será possível lhe encontrar.")
    }
  }

  return !form ? (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ width: "18%" }}>
          <Image source={HeaderLogo} style={{ width: 70, height: 50 }} />
        </View>
        <View
          style={{
            width: "80%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold", marginRight: 60 }}>
            Bat-Signal
          </Text>
        </View>
      </View>
      <View style={styles.body}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            margin: 40,
          }}
        >
          <Image
            source={Logo}
            style={{
              width: 350,
              height: 180,
            }}
          />
        </View>

        <View style={styles.control}>
          <ImageBackground
            source={City}
            resizeMode="cover"
            style={styles.image}
          >
            <Button onPress={callForm} title="Chamar" />
          </ImageBackground>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  ) : (
    <View style={styles.containerForm}>
      <StatusBar style="auto" />
      <Text style={styles.formLabel}>Nome</Text>
      <TextInput onChange={(event)=>{setUser(event.nativeEvent.text)}} style={styles.textInput} placeholder="Seu nome"></TextInput>
      <Text style={styles.formLabel}>Sexo</Text>
      <TextInput style={styles.textInput} placeholder="Sexo"></TextInput>
      <Text style={styles.formLabel}>Cidade</Text>
      <TextInput style={styles.textInput} placeholder="Cidade"></TextInput>
      <Text style={styles.formLabel}>Descrição detalhada</Text>
      <TextInput
        style={styles.textInputArea}
        multiline
        numberOfLines={8}
        maxLength={1000}
        placeholder="Detalhes"
      ></TextInput>
      <View style={{flexDirection:"row",gap:10}}>

      <Button onPress={()=>sendForm()} title="Enviar"></Button>
      <Button onPress={()=>goHome()} title="Cancelar"></Button>
      </View>
      <View>
        <Image style={{width:200,height:200}} source={BatGif}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textInput: {
    paddingHorizontal: 15,
    height: 40,
    width: "80%",
    borderWidth: 1,
    borderRadius: 10,
  },
  textInputArea: {
    paddingHorizontal: 15,
    marginBottom: 40,
    height: 180,
    width: "80%",
    borderWidth: 1,
    borderRadius: 10,
  },
  containerForm: {
    paddingTop: 50,
    width: "100%",
    alignItems: "center",
    height: "100%",
    borderWidth: 2,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "10%",
  },
  body: {
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
  },
  formLabel: {
    alignSelf: "flex-start",
    paddingHorizontal: 40,
    margin: 5,
  },
  control: {
    height: 500,
  },
});
