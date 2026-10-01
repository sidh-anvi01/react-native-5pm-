// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View style={{
//       flex: 1,
//       backgroundColor: "blue",
//       padding: 10,
//       // alignItems:"center",
//       // justifyContent:"center"


//     }}>


//       <View style={{
//         height: 100, width: 100,
//         backgroundColor: "yellow",
//         borderRadius: "100%",
//         marginVertical: 10,
//         marginHorizontal: 20
//       }}>

//       </View>

//       <Text style={{
//         backgroundColor: "red",
//         paddingVertical: 10,
//         paddingHorizontal: 10,
//         textAlign: "center"
//       }}>App</Text>
//       <Text>App</Text>
//       <Text>App</Text>
//       <Text>App</Text>



//       <View style={{
//         height: 200,
//         width: 200,
//         backgroundColor: "orange",
//         alignItems: "center",
//         justifyContent: "center",
//         borderWidth: 20,
//         borderColor: "green"
//       }}>
//         <Text style={{
//           backgroundColor: "red",
//           paddingVertical: 10,
//           paddingHorizontal: 10,
//           textAlign: "center"
//         }}>App</Text>
//         <Text>App</Text>
//         <Text>App</Text>
//         <Text>App</Text>
//       </View>


// <View style={{height:40,
//   borderWidth:2,
//   borderColor:"red",
//   justifyContent:"center",
//   alignContent:"center",
//   paddingLeft:10
// }}> 
// <Text>
//   enter your name
// </Text>
// </View>

//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})





import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/HomeScreen'
import LoginScreen from './src/LoginScreen'
import Login from './src/auth/Login'
const App = () => {
  return (
  //  <HomeScreen/>
<Login/>

  )
}

export default App

const styles = StyleSheet.create({})





