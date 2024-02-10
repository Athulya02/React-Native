import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { FontAwesome } from '@expo/vector-icons';

const CropSuggestionsScreen = () => {
  const tableHead = ['Crop', 'pH', 'Temp', 'N', 'P', 'K', 'Soil Type'];

  const tableData = [
    ['Rice', '6.0 - 7.5', '20 - 30 °C', 'High', 'Medium', 'Low', 'Red'],
    ['Wheat', '4.0 - 7.5', '20 - 30 °C', 'High', 'Low', 'Low', 'clay'],
    ['Gram', '6.0 - 7.5', '20 - 30 °C', 'Low', 'Medium', 'High', 'Black'],
    ['Ragi', '5.5 - 6.5', '25 - 35 °C', 'Medium', 'High', 'Medium', 'Sandy'],
    ['Rice', '6.0 - 7.5', '20 - 30 °C', 'High', 'Medium', 'Low', 'Black'],
    ['Wheat', '3.0 - 7.5', '20 - 30 °C', 'High', 'High', 'Low', 'Sandy'],
    ['Gram', '6.0 - 7.5', '20 - 30 °C', 'Low', 'Medium', 'High', 'Black'],
    ['Ragi', '5.5 - 6.5', '25 - 35 °C', 'Medium', 'High', 'Medium', 'Sandy'],
    ['Rice', '6.0 - 7.5', '20 - 30 °C', 'High', 'Medium', 'Low', 'Red'],
    ['Wheat', '6.0 - 7.5', '20 - 30 °C', 'High', 'Low', 'Low', 'Red'],
    ['Gram', '6.0 - 7.5', '20 - 30 °C', 'Low', 'Medium', 'High', 'clay'],
    ['Ragi', '5.5 - 6.5', '25 - 35 °C', 'Medium', 'High', 'Medium', 'Sandy'],
    ['Rice', '4.0 - 7.5', '20 - 30 °C', 'High', 'Medium', 'Low', 'Red'],
    ['Wheat', '6.0 - 7.5', '20 - 30 °C', 'High', 'High', 'Low', 'Black'],
  ];

  const textStyleForCells = StyleSheet.flatten([styles.text, { alignItems: 'center' }]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <FontAwesome name="tree" size={30} color="green" style={styles.icon} />
        <Text style={styles.title}>Crop Suggestions</Text>
      </View>
      <Table borderStyle={{ borderWidth: 1, borderColor: 'purple' }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.headText} />
        <Rows data={tableData} textStyle={textStyleForCells} />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
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
  head: { height: 80, backgroundColor: 'lavender' },
  headText: { margin: 5, textAlign: 'center', fontWeight: 'bold' },
  text: { margin: 1, alignItems: 'center' },
  icon: {
    marginRight: 10,
  },
});

export default CropSuggestionsScreen;
