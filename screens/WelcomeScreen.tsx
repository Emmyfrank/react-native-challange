import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {useNavigation} from "@react-navigation/native"
export default function WelcomeScreen() {

    const navigation = useNavigation()


    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle:"Welcome",
            headerShown:false
        })
    },[])

  return (
    <SafeAreaView style={styles.container}>
      
      <Text>WelcomeScreen</Text>
      <Text style={styles.button} 
        onPress={()=>navigation.navigate("login")}
    >
        Login
      </Text>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    button :{
        paddingHorizontal:20,
        paddingVertical:5,
        borderRadius:5,
        backgroundColor:"green",
        marginTop:10
    }
})