import { StyleSheet, Text, View , ScrollView , TouchableOpacity } from 'react-native'
import React from 'react'
import ratio from '../../style/ratio'
import { SafeAreaView } from 'react-native-safe-area-context';
import RoomHeader from '../../components/RoomHeader';
import RoomGallery from '../../components/RoomGallery';
import RoomDetails from '../../components/RoomDetails';
import { Color, FontFamily } from '../../style/GlobalStyle';



const { widthPixel, fontPixel, pixelSizeVertical } = ratio;
const Room = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <RoomHeader/>
        <RoomGallery/>
        <RoomDetails/>
        <View style={styles.bottomContainer}>
          <Text style={styles.price}>
            $60<Text style={styles.priceSmall}>/Night</Text>
          </Text>
          <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonContent}>Book Now</Text>
                </View>
            </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Room

const styles = StyleSheet.create({
  bottomContainer: {
      flexDirection: "row",
      justifyContent:"space-between",
      paddingHorizontal:pixelSizeVertical(20),
      paddingVertical:pixelSizeVertical(20),
      backgroundColor: Color.primary,
      borderRadius:30,
      marginTop: pixelSizeVertical(20),
      alignItems: "center",
      alignContent:"center",
      marginBottom:100
  },
  price:{
    fontSize:fontPixel(34),
    fontFamily: FontFamily.poppinsRegular,
    color:Color.white,
  },
  priceSmall:{
    fontSize:fontPixel(14),
  },
  button:{
    width:widthPixel(136),
    height:widthPixel(48),
    backgroundColor: Color.buttonPrimary,
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
    borderRadius:100
},
buttonContent:{
    color: Color.white,
    fontSize:fontPixel(15),
    fontFamily: FontFamily.poppinsMedium
}
})