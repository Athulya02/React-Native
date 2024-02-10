import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const LogoutScreen = () => {
  const navigation = useNavigation();
 

  const handleLogout = async () => {
    try {
      await signOut();
      navigation.navigate('Login');
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://example.com/your_custom_background_image.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.titleContainer}>
        <FontAwesome name="info-circle" size={30} color="lightgreen" style={styles.icon} />
        <Text style={styles.title}>Logout</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
  };

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
  },
  icon: {
    marginRight: 10,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: 150,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LogoutScreen;
