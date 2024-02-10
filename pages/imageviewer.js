import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import * as FileSystem from 'expo-file-system';


const ImageViewerScreen = ({ route }) => {
  const { imageUri, deleteImage, imageType, setSelectedImage } = route.params;
  const [showScanResults, setShowScanResults] = useState(false);
  const [base64Image, setBase64Image] = useState(null);
  const [scanResults, setScanResults] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    convertImageToBase64(imageUri);
  }, []);

  const openImageViewer = () => {
    if (selectedImage) {
      navigation.navigate('ImageViewer', {
        imageUri: selectedImage,
        deleteImage: () => setSelectedImage(null),
      });
    } else {
      Alert.alert('No Image Selected', 'Please upload an image before opening.');
    }
  };

  const handleDeleteImage = () => {
    setSelectedImage(null);
    navigation.goBack();
  };

  const convertImageToBase64 = async (imageUri) => {
    try {
      const fileInfo = await FileSystem.getInfoAsync(imageUri);
      const fileBase64 = await FileSystem.readAsStringAsync(fileInfo.uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      setBase64Image(fileBase64);
    } catch (error) {
      console.error('Error converting image to base64:', error);
    }
  };

  const handleShowScanResults = async () => {
    convertImageToBase64(imageUri);
    setShowScanResults(true);

    const formData = new FormData();
    formData.append('file', {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'image.jpg',
    });

    try {
      const response = await axios.post('https://a94c-2409-4073-214-8cdb-fc25-51ef-2f06-e7a2.ngrok-free.app/classify', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Upload successful:', response.data);
      setScanResults(response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      {showScanResults && scanResults && (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultText}>{`pH: ${scanResults.ph}`}</Text>
          <Text style={styles.resultText}>{`NPK Values: ${scanResults.npk}`}</Text>
          <Text style={styles.resultText}>{`Temperature: ${scanResults.temperature}°C`}</Text>
          <Text style={styles.soilTypeText}>{`Soil Type: ${scanResults.data}`} </Text>
        </View>
      )}

      <TouchableOpacity style={styles.menuButton} onPress={handleShowScanResults}>
        <Text style={styles.buttonText}>Show Scan Results</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteImage}>
        <Text style={styles.buttonText}>Delete Image</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
  },
  resultsContainer: {
    marginTop: 20,
  },
  resultText: {
    fontSize: 18,
    color: 'green',
    marginTop: 5,
  },
  soilTypeText: {
    fontSize: 18,
    color: 'blue',
    marginTop: 5,
  },
  menuButton: {
    marginTop: 20,
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: 200,
  },
  deleteButton: {
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
  icon: {
    marginLeft: 5,
  },
});

export default ImageViewerScreen;
