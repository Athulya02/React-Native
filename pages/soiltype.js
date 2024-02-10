import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

const SoilTypeScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [ imageType, setImageType, setSelectImage ] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    })();
  }, []);


  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [16, 9],
        quality: 1,
      });

      if (!result.canceled && result.assets.length > 0) {
        const selectedAsset = result.assets[0];
        console.log("selected", selectedAsset) 
        setSelectedImage(selectedAsset.uri);
        setImageType(selectedAsset.base64)
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  const takePhoto = async () => {
    navigation.navigate('camera');
  };

  const openImageViewer = () => {
    if (selectedImage) {
      navigation.navigate('Imageviewer', { imageUri: selectedImage, imageType: imageType, setSelectedImage: setSelectedImage});
    } else {
      Alert.alert('No Image Selected', 'Please upload an image before opening.');
    }
  };

  return (
    <ImageBackground
      source={{ uri:'https://w0.peakpx.com/wallpaper/265/892/HD-wallpaper-environment-protection-save-the-environment-natural-beauty-greenry-thumbnail.jpg' }}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <FontAwesome name="tree" size={30} color="green" style={styles.icon} />
          <Text style={styles.title}>Soil Type</Text>
        </View>

        {selectedImage && (
          <>
            <Image source={{ uri: selectedImage }} style={{ width: 100, height: 200 }} />
            <TouchableOpacity style={styles.uploadButton} onPress={openImageViewer}>
              <FontAwesome name="eye" size={20} color="green" />
              <Text style={styles.buttonText}>Open Image</Text>
            </TouchableOpacity>
          </>
        )}

        <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
          <FontAwesome name="upload" size={20} color="green" />
          <Text style={styles.buttonText}>Upload Image</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.uploadButton} onPress={takePhoto}>
          <FontAwesome name="camera" size={20} color="green" />
          <Text style={styles.buttonText}>Capture</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white', 
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
  uploadButton: {
    marginTop: 20,
    backgroundColor: 'beige',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    width: 150,
  },
  buttonText: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  backgroundImage: {
    flex: 1,
    opacity:1,
    paddingRight:10,
  },
});

export default SoilTypeScreen;