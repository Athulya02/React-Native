import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    if (username === 'User' && password === '123') {
      navigation.navigate('home');
    } else {
      Alert.alert('Login Failed', 'Invalid username or password. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AGRO APP</Text>
      
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <Icon name="user" size={20} color="#99EDC3" style={styles.icon} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <Icon name="lock" size={20} color="gold" style={styles.icon} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity  onPress={() => navigation.navigate('signup')}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5', 
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
    color: 'green', 
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: 'white', 
    borderRadius: 8,
    paddingLeft: 8,
    elevation: 2, 
    shadowColor: 'black', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 8,
  },
  iconContainer: {
    marginRight: 8,
  },
  icon: {
    marginRight: 8,
  },
  loginButton: {
    backgroundColor: 'lightgreen', 
    padding: 12,
    borderRadius: 8,
    width: '50%',
    alignItems: 'center',
    marginTop: 16,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white', 
  },
  signupContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  signupText: {
    fontSize: 14,
    marginRight: 8,
  },
  signupLink: {
    fontSize: 14,
    color: 'blue', 
    textDecorationLine: 'underline',
  },
});

export default Login;
