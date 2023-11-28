import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, MyHeader } from 'react-native';

export default function DetailImage({ navigation, route }) {
  const img = route.params.image.item || "unknown";
  return (
    <View style={styles.container} >
      <Image style={ { width: img.previewWidth, height: img.previewHeight }} source={{ uri: img.previewURL }}/>
      <Text style={styles.text}>Id : {img.id}</Text>
      <Text style={styles.text}>type : {img.type}</Text>
      <Text style={styles.text}>tags : {img.tags}</Text>
      <Text style={styles.text}>downloads : {img.downloads}</Text>
      <Text style={styles.text}>favorites : {img.favorites}</Text>
      <Text style={styles.text}>likes : {img.likes}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize:15,
  },
});