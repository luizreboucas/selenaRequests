import React, { useState } from 'react'
import { Text,View, StatusBar, Button, TextInput, StyleSheet, Pressable} from 'react-native'
import axios from 'axios'


export default function Home({navigation}) {
  const [user,setUser] = useState({
    username: '',
    password: ''
  })

  const login = async() => {
   try {
    const response = await axios.post('https://myselena.org//wp-json/learnpress/v1/token', user)
    const token = response.data.token
    console.warn(token)
    navigation.navigate('second', {token, user})
   } catch (error) {
    console.warn(error)
   }
    
  }

  return (
    <View style={styles.container}>
        <Text style={styles.login}>Login</Text>
        <TextInput style={styles.input} onChangeText={(text)=>setUser({...user, username: text})} >Username</TextInput>
        <TextInput style={styles.input} onChangeText={(pass)=>setUser({...user, password: pass})} >Password</TextInput>
        <Pressable onPress={()=>login()}>
          <Text style={{...styles.input, backgroundColor: '#E5CEDC', marginTop: 30}}>Enter</Text>
        </Pressable>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30
  },
  login: {
    fontSize: 32,
    color: '#45425a',
    fontWeight: 'bold'
  },
  input:{
    fontSize: 24,
    color: '#45425a',
    backgroundColor: '#44bba4',
    padding: 12,
    borderRadius: 20,
    width: 200, 
    textAlign: 'center'
  }
})
