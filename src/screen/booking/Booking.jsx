import { StyleSheet, Text, View,SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'
import BookingMain from "../../assets/images/BookingMain.png"
import LeftIcon from "../../assets/images/leftIcon.png"
import ShareIcon from "../../assets/images/shareIcon.png"
import HeartIcon from "../../assets/images/heartIcon.png"
import ratio from '../../style/ratio'
import StarIcon from "../../assets/images/starIcon.png"
import BookingMenu from '../../components/BookingMenu'
import ImageGallery from '../../components/ImageGallery'

const { widthPixel, fontPixel, pixelSizeVertical } = ratio;
const Booking = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <View>
        <View style={styles.container}>
          <Image source={BookingMain} style={styles.mainImg} />
          <View style={styles.header}>
            <Image source={LeftIcon}/>
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

  container:{
    // flex:1,
  },
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
    // alignContent:'center',
  },
  baliHeading:{
    fontSize:fontPixel(34),
    fontFamily:"Poppins-Regular",
    color:"rgba(255, 251, 254, 1)"
  },
  indonesia:{
    fontSize:fontPixel(12),
    fontFamily:"Poppins-Regular",
    color:"rgba(255, 251, 254, 1)",

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
    backgroundColor:"#fff"
  },
  ratingNumber:{
    fontSize:fontPixel(12),
    fontFamily:"Poppins-SemiBold",
    color:"rgba(0, 0, 0, 1)"
  },
  downContainer:{
    borderRadius:30,
    backgroundColor:"#F2F5FA",
    paddingTop:pixelSizeVertical(10),
    paddingBottom:pixelSizeVertical(20),
    height:"50%",
    marginTop:pixelSizeVertical(60)
  }
})