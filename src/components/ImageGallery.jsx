import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ratio from '../style/ratio';
import GalleryMain from "../assets/images/gallery1.png"
import Gallery2 from "../assets/images/gallery2.png"
import { Color, FontFamily } from '../style/GlobalStyle';

const { widthPixel, fontPixel, pixelSizeVertical } = ratio;
const ImageGallery = () => {
    return (
        <View>
            <View style={styles.main}>
                <Image source={GalleryMain} />
                <Image source={Gallery2} />
            </View>
            <View style={styles.secondMain}>
                <Text style={styles.headings}>DETAILS</Text>
                <Text style={styles.para}>Surrounded by rice fields, Villa Kayu Lama offers a peaceful retreat in Ubud. Guests can take a leisurely swim in the pri...<Text style={styles.readMore}> Read More</Text></Text>
            </View>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonContent}>Continue</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ImageGallery

const styles = StyleSheet.create({
    main: {
        marginTop: pixelSizeVertical(35),
        marginHorizontal: pixelSizeVertical(20),
        flexDirection: 'row',
        justifyContent: "space-between"

    },
    secondMain: { 
        marginHorizontal: pixelSizeVertical(20),
        marginTop:pixelSizeVertical(23),
        gap:20
    },
    headings: {
        fontSize:fontPixel(14),
        fontFamily: FontFamily.poppinsMedium,
        lineHeight:20,
        color: Color.black
    },
    para:{
        fontSize:fontPixel(14),
        fontFamily: FontFamily.poppinsRegular,
        color:"rgba(0, 0, 0, 0.6)"
    },
    readMore:{
        color: Color.black
    },
    button:{
        width:widthPixel(136),
        height:widthPixel(44),
        backgroundColor: Color.buttonPrimary,
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        alignSelf:"center",
        marginTop:pixelSizeVertical(40),
        marginBottom:pixelSizeVertical(120),
        borderRadius:100
    },
    buttonContent:{
        color: Color.white,
        fontSize:fontPixel(15),
        fontFamily: FontFamily.poppinsMedium
    }

})