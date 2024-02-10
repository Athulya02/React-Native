import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const TermsScreen = () => {
  return (
    <ImageBackground
      source={{
        uri: 'https://w0.peakpx.com/wallpaper/265/892/HD-wallpaper-environment-protection-save-the-environment-natural-beauty-greenry-thumbnail.jpg',
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.titleContainer}>
        <FontAwesome name="info-circle" size={30} color="lightgreen" style={styles.icon} />
        <Text style={styles.title}>Terms and Conditions</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.paragraph}>
          By using our services, you agree to comply with the following terms and conditions:
          Welcome to Agro App! These terms and conditions outline the rules and regulations for the use of our website or mobile application.
          By accessing this website or using our mobile application, we assume you accept these terms and conditions in full. Do not continue to use Agro App's website or mobile application if you do not accept all of the terms and conditions stated on this page.

          The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice and any or all Agreements: "Client", "You" and "Your" refer to you, the person accessing this website and accepting the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or ourselves.
          Please review these terms carefully. If you do not agree with any part of these terms, you may not use our services.
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
    fontSize: 17,
    color: 'white',
    textAlign: 'justify',
   
  },
});

export default TermsScreen;
