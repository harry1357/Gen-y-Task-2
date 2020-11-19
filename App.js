import 'react-native-gesture-handler';
import * as React from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { color } from 'react-native-reanimated';


function loginscreen({ navigation }) {
  const [username, x] = React.useState('');
  const [password, y] = React.useState('');

  function login(username, password) {
    if (username == 'admin' && password == 'admin@123') {
      
      navigation.navigate('reg')
    } else {
      alert('Incorrect credentials')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        underlineColorAndroid="transparent"
        placeholder=" Enter Username"
        placeholderTextColor="#18E3D6"
        autoCapitalize="none"
        onChangeText={username => x(username)}
        value={username} />

      <TextInput style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Enter Password"
        placeholderTextColor="#18E3D6"
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={password => y(password)}
        value={password} />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={
          () => login(username, password)
        }>
        <Text style={styles.submitButtonText}> Submit </Text>
      </TouchableOpacity>

    </View>
  )
}

function regscreen({ navigation }) {
  const [name, a] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="   Name"
        placeholderTextColor="#18E3D6"
        autoCapitalize="words"
        onChangeText={name => a(name)}
        value={name} />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={
          () => navigation.navigate('last', { inputText: name })
        }>
        <Text style={styles.submitButtonText}> Submit </Text>
      </TouchableOpacity>

    </View>
  )
}

function lastscreen({ route, navigation }) {
  const { inputText } = route.params;

  return (
    <View style={styles.finalContainer}>
      <Text style={styles.final}>Hello {JSON.stringify(inputText).slice(1,-1)}, you are succesfully registered. </Text>
    </View>
  )
}

const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator headerMode="none">
        <stack.Screen name="Login" component={loginscreen} />
        <stack.Screen name="reg" component={regscreen} />
        <stack.Screen name="last" component={lastscreen} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F9F9',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
  input: {
    margin: 15,
    height: 40,
    color: '#18E3D6',
    borderColor: '#DCDCDC',
    borderWidth: 1
  },
  finalContainer: {
    flex: 1, 
    alignItems: 'center',  
    justifyContent: 'center',
    backgroundColor: '#F8F9F9'  
  },
  final: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
  },
  submitButton: {
    backgroundColor: '#17202A',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: '#18E3D6',
    fontWeight: 'bold',
    textAlign: 'left',
  }
})

export default App