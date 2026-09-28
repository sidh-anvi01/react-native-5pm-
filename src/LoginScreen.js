import { StyleSheet, Text, View,TouchableOpacity,Pressable } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View style={{
        flex:1,
        alignItems:"center",
        justifyContent:"center",

    }}>
      <Text>LoginScreen</Text>


      <TouchableOpacity>
        <Text style={{fontSize:30}}>click me </Text>
      </TouchableOpacity>


<Text style={styles.text}>
this is internal css 
</Text>



<View style={styles.box}></View>
<View style={styles.box2}></View>
<View style={styles.box3}></View>


    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    text:{
        fontSize:30
    },
    box:{
        height:100,
        width:100,
        backgroundColor:"blue",
        marginVertical:10,
    },
     box2:{
        height:100,
        width:100,
        backgroundColor:"red",
        marginVertical:10,
    },
     box3:{
        height:100,
        width:100,
        backgroundColor:"orange",
        marginVertical:10,
    },
})