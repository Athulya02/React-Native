import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const AboutappScreen = ({ navigation }) => {
  const handleTermsPress = () => {
    console.log('Terms and Conditions pressed');
    navigation.navigate('Terms');
  };

  const handlePrivacyPress = () => {
    console.log('About System pressed');
    navigation.navigate('Aboutapp')
  };

  const handleDataPress = () => {
    console.log('Data pressed');
    navigation.navigate('Privacy')
  };

  const handleLogoutPress = () => {
    console.log('Logout pressed');
    navigation.navigate('Logout')
  };

  return (
    <ImageBackground
      source={{ uri: 'https://w0.peakpx.com/wallpaper/265/892/HD-wallpaper-environment-protection-save-the-environment-natural-beauty-greenry-thumbnail.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <FontAwesome name="info-circle" size={30} color="green" style={styles.icon} />
          <Text style={styles.title}>About</Text>
        </View>

        <View style={styles.optionContainer}>
          <TouchableOpacity style={styles.optionBlock} onPress={handleTermsPress}>
            <Text style={styles.optionText}>Terms and Conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBlock} onPress={handlePrivacyPress}>
            <Text style={styles.optionText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBlock} onPress={handleDataPress}>
            <Text style={styles.optionText}>Data</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBlock} onPress={handleLogoutPress}>
            <Text style={styles.optionText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  optionContainer: {
    alignItems: 'stretch',
  },
  optionBlock: {
    backgroundColor: 'beige',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 80,
  },
  optionText: {
    fontSize: 20,
    color: 'darkgreen',
  },
});

export default AboutappScreen;
