// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})



// import React, { Component } from 'react'
// import { Text, StyleSheet, View } from 'react-native'

// export default class App extends Component {
//   render() {
//     return (
//       <View>
//         <Text> textInComponent </Text>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({})





// react native's inbuild components : 
// third party : we to install ""
// user defined compoentnt  ;:
// custom component :



// import { StyleSheet, View } from 'react-native'
// import React from 'react'

// export default function App() {
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{
      flex: 1,
      // alignItems:"center",
      justifyContent: "center",
      padding: 20
    }}>
      <Text>App</Text>



<View style={{
  flexDirection:"row",
  justifyContent:"space-evenly"
}}>

      <View style={{
        // flex:2,
        height: 100, width: 100,
        backgroundColor: "blue",
        borderWidth: 2,
        borderColor: "red",
      }}>

      </View>

      <View style={{
        // flex:2,
        height: 100, width: 100,
        backgroundColor: "blue",
        borderWidth: 2,
        borderColor: "red",
      }}>
      </View>
</View>


<Text style={{
  backgroundColor:"#9a9a9a",
  paddingVertical:20,
  textAlign:"center",
  fontSize:20,
  boxSizing:"border-box",
  fontWeight:"bold",
  marginVertical:10
}}>
  login 
</Text> 

    </View>
  )
}

export default App

const styles = StyleSheet.create({})