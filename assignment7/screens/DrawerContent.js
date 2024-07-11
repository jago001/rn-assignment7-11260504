import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { StyleSheet, View, Text } from 'react-native';

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Menu</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#007BFF',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DrawerContent;
