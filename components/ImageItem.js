import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default function ImageItem(image) {
   const img = image.image;
return (
<View style={styles.main_container}>
  <Image style={{ width: img.previewWidth, height: img.previewHeight }} source={{ uri: img.previewURL }}/>
  <View style={{ flexDirection: 'column' }}>
    <Text style={styles.title_text}>Id : {img.id}</Text>
    <Text style={styles.title_text}>tags : {img.tags}</Text>
    <Text style={styles.title_text}>downloads : {img.downloads}</Text>
    <Text style={styles.title_text}>favorites : {img.favorites}</Text>
    <Text style={styles.title_text}>likes : {img.likes}</Text>
  </View>
</View>
);
}

const styles = StyleSheet.create({
  main_container: {
  height: 190
  },
  title_text: {
  fontSize:35
 }
})