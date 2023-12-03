import { StyleSheet, Text, View , ScrollView } from 'react-native'
import React from 'react'
import ratio from '../../style/ratio'
import { SafeAreaView } from 'react-native-safe-area-context';
import RoomHeader from '../../components/RoomHeader';
import RoomGallery from '../../components/RoomGallery';
import RoomDetails from '../../components/RoomDetails';



const { widthPixel, fontPixel, pixelSizeVertical } = ratio;
const Room = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <RoomHeader/>
        <RoomGallery/>
        <RoomDetails/>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Room

const styles = StyleSheet.create({})