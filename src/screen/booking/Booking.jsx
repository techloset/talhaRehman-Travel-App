import { StyleSheet, Text, View,SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import BookingMain from "../../assets/images/BookingMain.png"
import LeftIcon from "../../assets/images/leftIcon.png"
import ShareIcon from "../../assets/images/shareIcon.png"
import HeartIcon from "../../assets/images/heartIcon.png"
import ratio from '../../style/ratio'
import StarIcon from "../../assets/images/starIcon.png"
import BookingMenu from '../../components/BookingMenu'
import ImageGallery from '../../components/ImageGallery'
import { Color, FontFamily } from '../../style/GlobalStyle'

const { widthPixel, fontPixel, pixelSizeVertical } = ratio;
const Booking = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <View>
        <View style={styles.container}>
          <Image source={BookingMain} style={styles.mainImg} />
          <View style={styles.header}>
            <TouchableOpacity>
            <Image source={LeftIcon}/>
            </TouchableOpacity>
            <View style={styles.share}>
              <Image source={ShareIcon}/>
              <Image source={HeartIcon}/>
            </View>
          </View>
          <View style={styles.bali}>
            <Text style={styles.baliHeading}>BALI</Text>
            <Text style={styles.indonesia }>Indonesia</Text>
            <View style={styles.rating}>
              <Text style={styles.ratingNumber}>
                4.9
              </Text>
              <Image source={StarIcon}/>
            </View>
          </View>
        </View>
        <View style={styles.downContainer}>
          <BookingMenu/>
          <ImageGallery/>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Booking

const styles = StyleSheet.create({
  
  mainImg:{
    position:"absolute",
    width:"100%",
  },
  header:{
    display:"flex",
    flexDirection:'row',
    justifyContent:"space-between",
    marginHorizontal:pixelSizeVertical(16),
    marginTop:pixelSizeVertical(38)

  },
  share:{
    display:"flex",
    flexDirection:"row",
    gap:pixelSizeVertical(20)
  },
  bali:{
    display:"flex",
    flexDirection:"column",
    marginTop:pixelSizeVertical(37),
    alignItems:"center",
    gap:pixelSizeVertical(8)
  },
  baliHeading:{
    fontSize:fontPixel(34),
    fontFamily: FontFamily.poppinsRegular,
    color: Color.light
  },
  indonesia:{
    fontSize:fontPixel(12),
    fontFamily:FontFamily.poppinsRegular,
    color: Color.light,

  },
  rating:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignContent:'center',
    alignContent:"center",
    gap:pixelSizeVertical(5),
    paddingHorizontal:pixelSizeVertical(20),
    paddingVertical:pixelSizeVertical(5),
    borderRadius:25,
    backgroundColor: Color.white
  },
  ratingNumber:{
    fontSize:fontPixel(12),
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.black
  },
  downContainer:{
    borderRadius:30,
    backgroundColor: Color.light2,
    paddingTop:pixelSizeVertical(10),
    paddingBottom:pixelSizeVertical(20),
    height:"50%",
    marginTop:pixelSizeVertical(60)
  }
})