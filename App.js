import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/homeStack';

export default function App() {
  return (
    <Navigator />
  )

  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app! salut !</Text>
  //     <LotsOfGreetings/>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

// const Greeting = (props) => {
//   return (
//     <View style={styles.center}>
//       <Text>Hello {props.name}</Text>
//     </View>
//   )
// }

// const LotsOfGreetings = () => {
//   return (
//       <View style={[styles.center, {top: 50}]}>
//         <Greeting name='André' />
//         <Greeting name='Hugues' />
//         <Greeting name='Yiick' />
//       </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   center: {
//     alignItems: 'center'
//   },
// });
