
import { StyleSheet,View,Image } from 'react-native'
import React from 'react'

export default function Display({Picture}) {
  return (
    <View>
      <Image  style={styles.image} 
        source= {Picture}/>

      
    </View>
  )
}

const styles = StyleSheet.create({

  image:
  {
    backgroundColor: '#FAFAFA',
      width: '95%',
      height: 500,
      borderRadius: 25,
      marginLeft: 10,
      marginRight: 10,
  }

})