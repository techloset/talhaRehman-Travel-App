import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import ratio from '../style/ratio'
import { Color, FontFamily } from '../style/GlobalStyle';


const { widthPixel, fontPixel, pixelSizeVertical } = ratio;
const BookingMenu = () => {
  return (
    <View>
      <View  >
        <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false} gap={20}>
        <View style={styles.menu}>
            <Text style={styles.menuText} >Hotels</Text>
        </View>
        <View style={styles.menu}>
            <Text style={styles.menuText}>Foods</Text>
        </View>
        <View style={styles.menu}>
            <Text style={styles.menuText}>Activities</Text> 
        </View>
        <View style={styles.menu}>
            <Text style={styles.menuText}>Hotels</Text>
        </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default BookingMenu

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        paddingLeft:pixelSizeVertical(20),
        paddingTop:pixelSizeVertical(26),
        gap:50,
    },
    menu:{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: Color.white,
        borderRadius:100,
        paddingHorizontal:pixelSizeVertical(24),
        paddingVertical:pixelSizeVertical(10),
        marginLeft:pixelSizeVertical(20)
    },
    menuText:{
        fontSize:fontPixel(14),
        fontFamily: FontFamily.poppinsMedium,
        lineHeight:20,
        color: Color.black
    }
})