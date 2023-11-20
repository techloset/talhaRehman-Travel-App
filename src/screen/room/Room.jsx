import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ratio from '../../style/ratio'
import { SafeAreaView } from 'react-native-safe-area-context';
import RoomHeader from '../../components/RoomHeader';
import RoomGallery from '../../components/RoomGallery';



const { widthPixel, fontPixel, pixelSizeVertical } = ratio;
const Room = () => {
  return (
    <SafeAreaView>
      <View>
        <RoomHeader/>
        <RoomGallery/>
      </View>
    </SafeAreaView>
  )
}

export default Room

const styles = StyleSheet.create({})