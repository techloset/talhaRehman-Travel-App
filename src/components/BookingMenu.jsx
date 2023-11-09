import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import ratio from '../style/ratio'


const { widthPixel, fontPixel, pixelSizeVertical } = ratio;
const BookingMenu = () => {
  return (
    <View>
      <View  >
        <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false} gap={20}>
        <View style={styles.menu}>
            <Text style={styles.menuText}>Hotels</Text>
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
        gap:20
    },
    menu:{
        display: 'flex',
        alignItems: 'center',
        backgroundColor:"rgba(201, 212, 228, 1)",
        borderRadius:100,
        paddingHorizontal:pixelSizeVertical(24),
        paddingVertical:pixelSizeVertical(10),
        gap:20
    },
    menuText:{
        fontSize:fontPixel(14),
        fontFamily:"Poppins-Medium",
        lineHeight:20,
        color:"rgba(0, 0, 0, 1)"
    }
})