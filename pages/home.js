import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {
  const dashboardItems = [
    { id: '1', title: 'Camera', icon: 'camera', onPress: () => navigation.navigate('camera') },
    { id: '2', title: 'Soil Type', icon: 'leaf', onPress: () => navigation.navigate('SoilType') },
    { id: '3', title: 'About', icon: 'info-circle', onPress: () => navigation.navigate('About') },
    { id: '4', title: 'Crop Suggestions', icon: 'tree', onPress: () => navigation.navigate('CropSuggestions') },
  ];

  const renderDashboardItem = ({ item }) => (
    <TouchableOpacity style={styles.dashboardItem} onPress={item.onPress}>
      <View style={styles.iconContainer}>
        <Icon name={item.icon} size={30} color="white" style={styles.icon} />
      </View>
      <Text style={styles.dashboardItemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={{uri:'https://i0.wp.com/bestiu.edu.in/innovation/wp-content/uploads/2020/12/conservation-of-nature-1.jpg?fit=1000%2C530&ssl=1'} }// Replace with the path to your background image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>AGRO APP</Text>
        <FlatList
          data={dashboardItems}
          keyExtractor={(item) => item.id}
          renderItem={renderDashboardItem}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 100,
    textAlign: 'center',
    color: 'white',
  },
  dashboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '25%',
  },
  iconContainer: {
    marginRight: 8,
  },
  icon: {
    marginRight: 8,
  },
  dashboardItemText: {
    fontSize: 24,
    color: 'black',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  },
});

export default Home;
