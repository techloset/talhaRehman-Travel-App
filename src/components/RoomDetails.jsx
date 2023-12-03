import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ratio from '../style/ratio'
import StarIcon from "../assets/images/starIcon.png"
import PlaceIcon from "../assets/images/place.png"
import Facilities1 from "../assets/images/Facilities1.png"
import Facilities2 from "../assets/images/Facilities2.png"
import Facilities3 from "../assets/images/Facilities1.png"
import Facilities4 from "../assets/images/Facilities1.png"

import { Color, FontFamily } from '../style/GlobalStyle'


const { widthPixel, fontPixel, pixelSizeVertical } = ratio;
const RoomDetails = () => {

    const facilitiesData = [
        { id: 1, icon: Facilities1, text: 'Outdoor Pool' },
        { id: 2, icon: Facilities2, text: '1 Bathtub' },
        { id: 3, icon: Facilities3, text: 'Free Wi-Fi' },
        { id: 4, icon: Facilities4, text: ' Free Breakfast' },
        { id: 5, icon: Facilities2, text: 'Beach Acces' },
        { id: 6, icon: Facilities1, text: 'Outdoor Pool ' },
    ];
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.hotelName}>Villa Kayu Lama</Text>
                <View style={styles.subContainer}>
                    <Image source={StarIcon} />
                    <Text style={styles.rating}>4.5</Text>
                </View>
            </View>
            <View style={styles.location}>
                <Image source={PlaceIcon} />
                <Text style={styles.locationText}>Ubud, Indonesia</Text>
            </View>
            <View
                style={{
                    borderBottomColor: 'rgba(196, 196, 196, 1)',
                    borderBottomWidth: 1,
                }}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonDetails}>
                    <Text style={{ color: "rgba(255, 255, 255, 1)", fontFamily: "Poppins-Regular", fontSize: fontPixel(13) }}>Details</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonReviews}>
                    <Text style={{ color: "rgba(0, 0, 0, 1)", fontFamily: "Poppins-Regular", fontSize: fontPixel(13) }}>Reviews</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.hotelIntro}>
                <Text style={styles.hotelIntroText}>
                    Surrounded by rice fields, Villa Kayu Lama offers a peaceful retreat in Ubud. Guests can take a leisurely swim in the privat... Read More
                </Text>
            </View>
            <View style={styles.facilities}>
                <Text style={styles.facilitiesTitle}>
                    FACILITIES
                </Text>
                <View style={{justifyContent:"center", alignItems:"center"}}>
                    <ScrollView style={styles.facilitiesScroll} horizontal showsHorizontalScrollIndicator={false}>
                        {facilitiesData.map((facility)=>(
                            <View style={styles.facilitiesDetails}>
                            <Image source={facility.icon}></Image>
                            <Text style={styles.facilitiesText}>{facility.text}
                            </Text>
                        </View>
                        ))}
                    </ScrollView>
                </View>
            </View>

        </View>
    )
}

export default RoomDetails

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: pixelSizeVertical(20),
        paddingVertical: pixelSizeVertical(10),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    subContainer: {
        flexDirection: "row",
        gap: pixelSizeVertical(4),
        alignItems: "center",
        alignContent: "center",
        gap: pixelSizeVertical(4)
    },
    hotelName: {
        fontSize: fontPixel(18),
        fontFamily: FontFamily.poppinsRegular,
        color: Color.black
    },
    rating: {
        fontSize: fontPixel(12),
        fontFamily: FontFamily.poppinsMedium,
        color: Color.black
    },
    location: {
        flexDirection: "row",
        alignItems: "center",
        gap: pixelSizeVertical(5),
        marginLeft: pixelSizeVertical(20),
        marginBottom: pixelSizeVertical(10)
    },
    locationText: {
        fontFamily: FontFamily.poppinsMedium,
        fontSize: fontPixel(14),
        color: Color.darkGrey,

    },
    buttonContainer: {
        marginLeft: pixelSizeVertical(20),
        marginTop: pixelSizeVertical(10),
        marginBottom: pixelSizeVertical(10),
        flexDirection: "row",
        gap: pixelSizeVertical(10)
    },
    buttonDetails: {
        borderRadius: pixelSizeVertical(16),
        paddingHorizontal: pixelSizeVertical(20),
        paddingVertical: pixelSizeVertical(5),
        backgroundColor: "rgba(24, 192, 193, 1)",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonReviews: {
        borderRadius: pixelSizeVertical(16),
        paddingHorizontal: pixelSizeVertical(20),
        paddingVertical: pixelSizeVertical(5),
        backgroundColor: "rgba(212, 221, 236, 1)",
        justifyContent: "center",
        alignItems: "center",
    },
    hotelIntro: {
        paddingHorizontal: pixelSizeVertical(20),
        marginTop: pixelSizeVertical(10)
    },
    hotelIntroText: {
        fontFamily: FontFamily.poppinsRegular,
        fontSize: fontPixel(14),
        color: "rgba(0, 0, 0, 0.6)"
    },
    facilities: {
        paddingHorizontal: pixelSizeVertical(20),
        marginTop: pixelSizeVertical(10),
    },
    facilitiesTitle: {
        fontFamily: FontFamily.poppinsMedium,
        fontSize: fontPixel(14),
        color: Color.black,
        gap: pixelSizeVertical(10)
    },
    facilitiesText:{
        fontSize: fontPixel(12),
        color: Color.black,
        width:widthPixel(70)

    },
    facilitiesDetails:{
        justifyContent:"left",
        gap: pixelSizeVertical(8),
        marginRight: pixelSizeVertical(5),
        alignItems: "left",
    },
    facilitiesScroll:{
        flexDirection:"row",
        gap: pixelSizeVertical(7),
    }

})