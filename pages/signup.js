import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Signup = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDOB] = useState('');
  const [email, setEmail] = useState('');
  const [place, setPlace] = useState('');

  const handleSignUp = () => {
    Alert.alert('Sign Up Failed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AGRO APP</Text>

      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#99EDC3" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="gold" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="calendar" size={20} color="#99EDC3" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Date of Birth (DOB)"
          value={dob}
          onChangeText={(text) => setDOB(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#99EDC3" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="map-marker" size={20} color="#99EDC3" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Place"
          value={place}
          onChangeText={(text) => setPlace(text)}
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
        <Text style={styles.loginButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text style={styles.loginLink}>Log In</Text>
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
  loginContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginLink: {
    fontSize: 14,
    color: 'blue',
    textDecorationLine: 'underline',
    marginLeft: 8,
  },
  icon: {
    marginRight: 8,
  }
});

export default Signup;
