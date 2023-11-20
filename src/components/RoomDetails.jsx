import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ratio from '../style/ratio'
import StarIcon from "../assets/images/starIcon.png"
import PlaceIcon from "../assets/images/place.png"


const { widthPixel, fontPixel, pixelSizeVertical } = ratio;
const RoomDetails = () => {
  return (
    <View>
        <View style={styles.container}>
            <Text style={styles.hotelName}>Villa Kayu Lama</Text>
            <View style={styles.subContainer}>
                <Image source={StarIcon}/>
                <Text style={styles.rating}>4.5</Text>
            </View>
        </View>
        <View>
            <Image source={PlaceIcon}/>
            <Text>Ubud, Indonesia</Text>
        </View>
      
    </View>
  )
}

export default RoomDetails

const styles = StyleSheet.create({
    container: {
        paddingHorizontal:pixelSizeVertical(20),
        paddingVertical:pixelSizeVertical(10),
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    subContainer: {
        flexDirection:"row",
        gap:pixelSizeVertical(4),
        alignItems:"center",
        alignContent:"center",
        gap:pixelSizeVertical(4)
    },
    hotelName:{
        fontSize:fontPixel(18),
        fontFamily:"Poppins-Regular",
        color:"#000"
    },
    rating:{
        fontSize:fontPixel(12),
        fontFamily:"Poppins-Medium",
        color:"#000"
    }

})