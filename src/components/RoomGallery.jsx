import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RoomImage from "../assets/images/RoomImages.png"


const RoomGallery = () => {
  return (
    <View>
     <Image source={RoomImage} style={{width:"100%"}}/>
     
    </View>
  )
}

export default RoomGallery

const styles = StyleSheet.create({})