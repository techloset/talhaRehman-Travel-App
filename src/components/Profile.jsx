import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import ratio from '../style/ratio'
import ProfilePic from "../assets/images/ProfilePic.svg"
import NotificationIcon from "../assets/images/NotificationIcon.svg"
import { Color, FontFamily } from '../style/GlobalStyle'




const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const Profile = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View>
                    <ProfilePic />
                </View>
                <View>
                    <Text style={styles.name}>Hello, Sourany!</Text>
                </View>
                <View>
                    <NotificationIcon />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:pixelSizeVertical(20),
        alignItems:"center",
        marginTop:pixelSizeVertical(18)
    },
    name:{
        fontSize:fontPixel(16),
        fontFamily: FontFamily.poppinsSemiBold,
        color: Color.black,
    }
})