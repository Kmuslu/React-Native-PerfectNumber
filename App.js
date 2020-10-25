import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Dimensions
} from 'react-native';


const App = () => {
  const [perfectNumber, setPerfectNumber] = useState()

  function findingNumber(number) {
    var sum = 1;

    if (number < 0 || isNaN(number) || number === undefined || number === "") {
      return alert("Please enter a positive number.")
    } else {
      for (var i = 2; i < number; i++) {
        if (number % i == 0) {
          sum += i
        }
      }

      if (sum == number) {
        alert(`${number} is a Perfect Number`)
      } else {
        alert(`${number} is not a Perfect Number`)
      }
    }
  }


  return (
    <SafeAreaView style ={{flex:1}}>
      <View style={styles.container}>
        <Text style={styles.text}>Let's check if the number is a Perfect Number</Text>
      <View style ={styles.input} >
        <TextInput
         
         onChangeText = {(number) => setPerfectNumber(number)}
         value = {perfectNumber}
         keyboardType = "number-pad"
         autoFocus = {true}
          onSubmitEditing={() => {
               checkNumber(number);
               setNumber('');
             }}
         placeholder = "Please enter a number"

          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        />
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress ={() => {findingNumber(perfectNumber);setPerfectNumber("")}}
          style = {styles.button}
        >
          <Text>Press Here</Text>
        </TouchableOpacity>
      </View>
      </View>

    </SafeAreaView >

  );
};

const styles = StyleSheet.create({
container:{
  backgroundColor:"#b2fef7",
  flex:1,
  alignItems:"center",
  justifyContent:"center"
},
text:{
  fontSize: 25,
  margin: 10,
  textAlign:"center"
},
button:{
  margin: 10,
  backgroundColor:"#82ada9",
  borderWidth:0.5,
  padding:15,
  borderRadius: 6
},
input:{
  backgroundColor:"#b2dfdb",

}
});

export default App;

