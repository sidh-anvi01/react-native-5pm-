import { StyleSheet, Text, TextInput, View, ScrollView,Image } from 'react-native'
import React from 'react'

const Login = () => {
    return (
        <View style={{ padding: 20,backgroundColor:"aqua",
            alignItems:"center",width:300,justifyContent:"center"
         }}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Text>Login</Text>

{/* for network image */}
{/* <Image style={{height:100,width:100}} source={{uri:"https://plus.unsplash.com/premium_photo-1790298366904-b1743092854c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"}}/>  */}


{/* for local image  */}
               <Image source={require("../assets/img.jpg")}  style={{height:100,width:100,marginVertical:30,
                borderRadius:"100%"
               }}/>



                {/* <View style={{
                    height: 400,
                    width: 200,
                    backgroundColor: "red",
                    marginVertical: 20,
                }}>

                </View>

                <View style={{
                    height: 400,
                    width: 200,
                    backgroundColor: "red",
                    marginVertical: 20,
                }}>

                </View>

                <View style={{
                    height: 400,
                    width: 200,
                    backgroundColor: "red",
                    marginVertical: 20,
                }}>

                </View> */}

                <TextInput
                    placeholder='enter text'
                    placeholderTextColor="red"
                    //   secureTextEntry
                    // keyboardType='numeric'
                    style={{
                        height: 40, width: "auto",
                        // borderWidth: 2,
                        borderRadius:10,
                        marginVertical:20,
                        paddingLeft:10,
                        borderBottomWidth:1

                    }}
                />

                <TextInput
                    placeholder='enter text'
                    placeholderTextColor="red"
                    //   secureTextEntry
                    // keyboardType='numeric'
                    style={{
                        height: 40, width: "auto",
                        borderWidth: 2,
                          borderRadius:10,
                        marginVertical:20,
                        paddingLeft:10

                    }}
                />
                 <TextInput
                    placeholder='enter text'
                    placeholderTextColor="red"
                    //   secureTextEntry
                    // keyboardType='numeric'
                    style={{
                        height: 40, width: "auto",
                        borderWidth: 2,
                          borderRadius:10,
                        marginVertical:20,
                        paddingLeft:10
                    }}
                />
              
            </ScrollView>


        </View>
    )
}

export default Login

const styles = StyleSheet.create({})