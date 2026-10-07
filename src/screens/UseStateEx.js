import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-web'

const UseStateEx = () => {
    const [name,setName]=useState("rohan")
    const [isClicked,setIsClicked]=useState(true)

const[user,setUser]=useState(true)



    const changeName=()=>{
        setName("sahil")
    }


    if(!user){
        return "hello this is home "
    }else{
        return "this is useState screen "
    }



  return (
    <View>
      {/* <Text>UseStateEx</Text>
      <Text >{name}</Text>
      <TouchableOpacity onPress={()=>{setName("mohan")}}>
        <Text>click</Text>
      </TouchableOpacity>
      <Button title='click me ' onPress={changeName}/>
<Button title='change color' onPress={()=>setIsClicked(!isClicked)}/>

<View style={{height:100,width:100,backgroundColor:isClicked ? "red":"blue"}}>

</View>

<Text style={{color:isClicked?"blue":"red"}}>chage me color</Text> */}

    </View>
  )
}

export default UseStateEx

const styles = StyleSheet.create({})