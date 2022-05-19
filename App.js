import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useState } from 'react';
import Display from './Display';
import { Ionicons, AntDesign, FontAwesome5 } from '@expo/vector-icons';



export default function App() {
  const[Picture, setPicture] = useState(require('./assets/ert.jpg'));


  function first(){
    setPicture( require('./assets/e36.png'))
  }

  function second(){
    setPicture( require('./assets/hek.png'))
  }

  function third(){
    setPicture(require('./assets/m8.png'))
  }

  function fourth(){
    setPicture(require('./assets/m4.png'))
  }

  function fifth(){
    setPicture(require('./assets/wer.jpg'))
  }

  function sixth(){
    setPicture(require('./assets/tyj.jpg'))
  }

  function seventh(){
    setPicture(require('./assets/456.jpg'))
  }

 




  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'#FAFAFA', alignItems: 'center', flexDirection: 'row', width: '100%',height:50, borderRadius:8}}>
        
        <View style={{marginLeft: 20}}>
          <TouchableOpacity>
            <Ionicons name="arrow-back-outline" size={30} color="black" />
          </TouchableOpacity>
        </View>

        <View>
          <Text style = {{marginLeft: 40, marginRight: 50, fontSize: 20, fontWeight: 'bold'}}>Gallery</Text>
        </View>

        <View style = {{marginRight: 70}}>
          <TouchableOpacity>
            <Ionicons name="md-share-social-sharp" size={30} color="black" />
          </TouchableOpacity>
         
        </View>

        <View>
          <TouchableOpacity>
            <Ionicons name="ios-albums" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={{fontWeight:'bold', color: 'black', fontSize:30, fontStyle:'italic', marginLeft: 10, marginBottom: 20, marginTop: 10}}>Cars</Text>
     
      <View style={{width: '100%'}}>
        <Display Picture={Picture} />

        <View style = {{flexDirection: 'row', marginBottom: 15, marginTop: 15}}>
          <View style = {{marginLeft: 40, marginRight: 80}}>
            <TouchableOpacity>
              <AntDesign name="delete" size={30} color="black" />
            </TouchableOpacity>
          </View>

          <View style = {{marginRight: 90, marginLeft: 20}}>
            <TouchableOpacity>
              <FontAwesome5 name="edit" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View >
            <TouchableOpacity>
              <AntDesign name="infocirlce" size={30} color="black" />
            </TouchableOpacity>
          </View>


        </View>
          <View style={{flexDirection:'row',marginLeft:8}}>
            <ScrollView horizontal = {true} >
              <View style = {{marginLeft: 10}}>
                <TouchableOpacity  onPress = {first}>
                  <Image style={styles.smaller} source = {require('./assets/e36.png')} />
                </TouchableOpacity>
              </View>


              <TouchableOpacity  onPress = {second}>
                <Image style={styles.smaller} source = {require('./assets/hek.png')} />
              </TouchableOpacity>

              <TouchableOpacity  onPress = {third}>
                <Image style={styles.smaller} source = {require('./assets/m8.png')} />
              </TouchableOpacity>

              <TouchableOpacity  onPress = {fourth}>
                <Image style={styles.smaller} source = {require('./assets/m4.png')} />
              </TouchableOpacity>

              <TouchableOpacity  onPress = {fifth}>
                <Image style={styles.smaller} source = {require('./assets/wer.jpg')} />
              </TouchableOpacity>

              <TouchableOpacity  onPress = {sixth}>
                <Image style={styles.smaller} source = {require('./assets/tyj.jpg')} />
              </TouchableOpacity>

              <TouchableOpacity  onPress = {seventh}>
                <Image style={styles.smaller} source = {require('./assets/456.jpg')} />
              </TouchableOpacity>
            </ScrollView>
          </View>
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#FAFAFA', 
    marginTop:40,
    borderRadius:15
  },
  smaller: {
    width: 70,
    height:70, 
    borderRadius:10,
    borderColor:'#FAFAFA',
    borderWidth:2,
    marginLeft:5
  }
});