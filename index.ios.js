// Import a library to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
);

// Render it to the device
// We pass the string 'albums' because it's the name of our projet
// Then we pass as 2nd arguments the component we created
AppRegistry.registerComponent('albums', () => App);
