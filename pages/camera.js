import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';

const CameraScreen = ({ navigation }) => {
  const cameraRef = useRef(null);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync();
      setCapturedImage(photo.uri);
      console.log(photo.uri);
    }
  };
  const savePhoto = async () => {
    if (capturedImage) {
      try {
        const mediaLibraryStatus = await MediaLibrary.requestPermissionsAsync();
        setHasMediaLibraryPermission(mediaLibraryStatus.status === 'granted');
        const asset = await MediaLibrary.createAssetAsync(capturedImage);
        await MediaLibrary.createAlbumAsync('MyAppPhotos', asset, false);
        console.log('Photo saved', 'Photo saved to gallery!');
        setCapturedImage(null);
      } catch (error) {
        console.log('Error saving photo', error);
      }
    }
  };


  const permissionGrantView = () => (
    <View style={styles.container}>
      <Text style={{ margin: 10 }}>Camera and media permission is not granted</Text>
      <TouchableOpacity onPress={()=>{
        requestPermission()
        //setSavePermission()
        }
    } style={styles.button}>
        <Text style={styles.text}>Grant Permission</Text>
      </TouchableOpacity>
    </View>
  );
  
  const permissionNotGrantedView = () => (
    <View />
  );

  return (
    <View style={styles.container}>
      {!permission && permissionNotGrantedView()}
      {permission && !permission.granted && permissionGrantView()}
      
      {permission && permission.granted && (
        <>
          <View style={styles.titleContainer}>
            <FontAwesome name="camera" size={30} color="lightgreen" style={styles.icon} />
            <Text style={styles.title}>Camera</Text>
          </View>
          <Camera style={styles.camera} type={type} ref={cameraRef}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              <FontAwesome name="camera" size={20} color="lightgreen" style={styles.icon} />
              <Text style={styles.text}>Flip Camera</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
              <FontAwesome name="camera" size={40} color="white" />
            </TouchableOpacity>
            {capturedImage && 
            <TouchableOpacity style={styles.saveButton} onPress={savePhoto}>
                <Text>Save to Gallery</Text>
            </TouchableOpacity>
            }
          </Camera>
        </>
      )}
    </View>
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
  camera: {
    flex: 1,
  },
  text: {
    color: 'blue', // Change the text color
    fontSize: 10,
    
  },
  captureButton: {
    position: 'absolute',
    bottom: 20,
    left:130,
    alignSelf: 'center',
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 50,
  },
  saveButton: {
    position: 'absolute',
    bottom: 20,
    right:50,
    alignSelf: 'center',
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 50,
  },
});

export default CameraScreen;