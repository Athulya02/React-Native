import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const PrivacyScreen = () => {
  return (
    <ImageBackground
      source={{
        uri: 'https://w0.peakpx.com/wallpaper/265/892/HD-wallpaper-environment-protection-save-the-environment-natural-beauty-greenry-thumbnail.jpg',
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.titleContainer}>
        <FontAwesome name="lock" size={30} color="green" style={styles.icon} />
        <Text style={styles.title}>Privacy</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.paragraph}>
        Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.

 Information We Collect: We may collect personal information that you provide directly or through the use of our services, such as your name, email address, and other relevant details.

 How We Use Your Information: We may use your information to provide and improve our services, communicate with you, and personalize your experience.

 Sharing Your Information: We may share your information with third parties for purposes such as analytics, advertising, and other business purposes.

 Security: We take reasonable measures to protect your information, but no method of transmission over the internet or electronic storage is completely secure.

By using our services, you agree to the terms of this Privacy Policy. If you do not agree with our practices, please do not use our services.

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
  contentContainer: {
    padding: 16,
  },
  paragraph: {
    fontSize: 18,
    color: 'white',
    textAlign: 'justify',
  },
});

export default PrivacyScreen;
