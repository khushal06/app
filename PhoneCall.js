
import React, { useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

// import Call API
import call from 'react-native-phone-call';

const App = () => {
  const [inputValue, setInputValue] = useState('000000000000');

  const triggerCall = () => {
    // Check for perfect 10 digit length
    if (inputValue.length != 10) {
      alert('Please insert correct contact number');
      return;
    }

    const args = {
      number: inputValue,
      prompt: true,
    };
    // Make a call
    call(args).catch(console.error);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Phone Call
        </Text>
        <Text style={styles.titleTextsmall}>Enter Number to Call</Text>
        <TextInput
          value={inputValue}
          onChangeText={(inputValue) => setInputValue(inputValue)}
          placeholder={'000000000000'}
          keyboardType="numeric"
          style={styles.textInput}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={triggerCall}>
          <Text style={styles.buttonTextStyle}> Call</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99ffee',
    padding: 10,
    textAlign: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleTextsmall: {
    marginVertical: 19,
    fontSize: 16,
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#45f24e',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize:30
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
});
