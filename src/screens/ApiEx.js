import { StyleSheet, Text, View,Button, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-web'

const ApiEx = () => {
    const[count,setCount]=useState(0)
    const[user,setUser]=useState([])


   useEffect(()=>{
     fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    // .then(data=>console.log(data))
    .then(data=>setUser(data))
    .catch(err=>console.log(err))

   } ,[])


   const renderItem=({item})=>(
    <View style={{marginVertical:10,backgroundColor:'blue'}}>
        <Text>{item.name}</Text>
        <Text>{item.email}</Text>
        <Text>{item.phone}</Text>
    </View>
   )

  return (

    <View style={{flex:1,alignItems:"center"}}>
      <Text>ApiEx</Text>
      <Button title='click me ' onPress={()=>setCount(count+1)}/>
 
 <FlatList 
 data={user}
 keyExtractor={item=>item.id}
 renderItem={renderItem}
 showsVerticalScrollIndicator={false}
 horizontal
pagingEnabled
 />




{/* {


user.map((p)=>(
    <View>
        <Text>
            {p.name}
        </Text>
        <Text>{p.email}</Text>
    </View>
))


} */}

    </View>

  )
}

export default ApiEx

const styles = StyleSheet.create({})