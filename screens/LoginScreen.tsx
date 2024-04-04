import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import {useNavigation} from '@react-navigation/native'
import Loader from '../components/Loader'

export default function LoginScreen() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const naviagtion= useNavigation()

    useLayoutEffect(()=>{
        naviagtion.setOptions({
            headerTitle:"Login screen",
            headerShown:false
        })
    },[])


  return (
    <ImageBackground style={styles.image} source={require("../assets/bg.jpeg")}>
        <View style={styles.container}>
        <Text style={styles.header}>Welcome Back! 🥳</Text>
        
        <View style={styles.cont}>
            <TextInput style={styles.input} 
                placeholder='Email or Username'
                onChange={(e)=>setEmail(e.target.value)} 
                placeholderTextColor={"white"}
                value={email}>
            </TextInput>
            <TextInput style={styles.input} 
                placeholder='Password'
                onChange={(e)=>setPassword(e.target.value)} 
                textContentType='password'
                placeholderTextColor={"white"}
                value={password}>
            </TextInput>

            <TouchableOpacity style={styles.button}>
                {/* <Loader/> */}
                <Text>Login</Text>
            </TouchableOpacity>
        </View>

        <Text style={styles.text}>OR</Text>

        <View style={styles.cont}>
            <TouchableOpacity style={styles.buttong} onPress={()=>alert("In Progress")}>
                <Image style={styles.logo} source={require("../assets/google.png")}/>
                <Text style={styles.text}>Continue with Google</Text>
            </TouchableOpacity>
            <Text style={styles.text2} onPress={()=>naviagtion.navigate("signup")}>Sign up if you don&apos;t have an account</Text>
        </View>
        
        </View>
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        gap:40,
        backgroundColor:"rgba(0,0,0,0.8)",
        paddingHorizontal:40,
    },
    image:{
        flex:1
    },
    cont:{
        width:"100%",
        gap:20
    },
    text:{
        color:"white"
    },
    text2:{
        color:"white",
        textAlign:"center",
        fontStyle:"italic"
    },
    input :{
        // backgroundColor:"white",
        width:"100%",
        paddingTop:5,
        paddingLeft:5,
        paddingRight:5,
        borderRadius:5,
        borderBottomColor:"white",
        borderBottomWidth:2,
        color:"white"
    },
    button:{
        color:"red",
        backgroundColor:"yellow",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:10,
        marginTop:20,
        borderRadius:10
    },
    buttong:{
        display:"flex",
        backgroundColor:"blue",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:10,
        marginTop:20,
        borderRadius:10,
        flexDirection:"row",
        gap:5
    },
    logo:{
        width:25,
        height:25
    },
    header:{
        fontSize:30,
        color:"white",
        height:40,
        // width:226,
        fontWeight:"bold"
    }
})

