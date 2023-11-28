import Reactt, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, FlatList, Text, TouchableOpacity} from 'react-native';
import Imageitem from './ImageItem';
import GetPictures from './Pixabay'

export default function Search(){

const [motrecherche, setMotrecherche] = useState()
const [data_img, setData_img] = useState()

  return(
    <View style={styles.container}>
      <TextInput
      onChangeText={text => setMotrecherche(text)}
      value={motrecherche}
      style={styles.textinput} 
      placeHolder='Mots Clefs'
      />

      <Button title="Rechercher"
      onPress={() => {
        GetPictures(motrecherche).then((rep) => {
        setData_img(rep.hits);
        });
      }}
      />

      <FlatList
        data={data_img}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <TouchableOpacity onPress={()=>navigation.navigate("Détail",{image:{item}})}><Im
        ageitem image={item}/></TouchableOpacity>}
      />
    
</View>
);
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  textinput:{
    borderWidth:5,
    marginLeft:5,
    marginRight:5,
  }
});