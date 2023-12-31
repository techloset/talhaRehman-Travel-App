import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import ratio from '../style/ratio'
import LeftIcon from "../assets/images/leftIcon.png"
import CalanderIcon from "../assets/images/calanderIcon.png"
import MenuIcon from "../assets/images/menuIcon.png"
import { Color, FontFamily } from '../style/GlobalStyle'



const { widthPixel, fontPixel, pixelSizeVertical } = ratio;
const RoomHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity>
        <Image source={LeftIcon} />
        </TouchableOpacity>
        <Text style={styles.heading}>Booking</Text>
      </View>
      <View style={styles.subContainer}>
        <Image source={CalanderIcon}/>
        <Image source={MenuIcon} />
      </View>


      
    </View>
  )
}

export default RoomHeader

const styles = StyleSheet.create({
  container:{
    backgroundColor: Color.primary,
    flexDirection:"row",
    justifyContent:"space-between",
    alignContent:"center",
    alignItems:"center",
    paddingVertical:pixelSizeVertical(20),
    paddingHorizontal:pixelSizeVertical(16),
  },
  subContainer:{
    flexDirection:"row",
    gap:pixelSizeVertical(18),
    alignItems:"center",
    alignContent:"center",
    justifyContent:"center",
  },
  heading:{
    fontSize:fontPixel(20),
    fontFamily: FontFamily.poppinsMedium,
    color: Color.white

  }
})