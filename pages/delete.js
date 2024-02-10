import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const deleteImageScreen = () => {
  return (
    <ImageBackground
      source={{
        uri: 'https://w0.peakpx.com/wallpaper/265/892/HD-wallpaper-environment-protection-save-the-environment-natural-beauty-greenry-thumbnail.jpg',
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.titleContainer}>
        <FontAwesome name="info-circle" size={30} color="green" style={styles.icon} />
        <Text style={styles.title}>About App</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.paragraph}>
          Agro App is an application, that provide a helpful hand to the farmers for their agriculture purpose.
          This application provide a variety of soil lists and recommend the crop according to the corresponding 
          soil. The soil is classified and predict the crop based on the pH, NPK value and temperature.          
          
        </Text>
      </View>
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
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // 0.7 = opacity
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
  contentContainer: {
    padding: 16,
  },
  paragraph: {
    fontSize: 20,
    color: 'white',
    textAlign: 'justify',
    padding:'10%',
  },
});

export default deleteImageScreen;
