import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import banner from "../assets/images/MainImg.png"
import ratio from '../style/ratio'


const { widthPixel, fontPixel, pixelSizeVertical } = ratio;

const HomeContent = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View>
                    <Image source={banner} />
                </View>
                <View style={styles.content} >
                    <Text style={styles.headings}>DETAILS</Text>
                    <Text>
                        There is no other place like Bali in this world. A magical mix of culture, people, nature, activities, weather, culinary delights, nightlife and many other interesting t...
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeContent

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#D2DBEA",
        borderRadius: 30,
        marginTop: pixelSizeVertical(17),
    },
    content:{
        marginHorizontal:pixelSizeVertical(20),
        height:pixelSizeVertical(800)
    },
    headings:{
        fontSize:fontPixel(14),
        fontFamily:"Poppins-Medium",
        color:"#000000",
        lineHeight:20,
        letterSpacing:0.1
    },
    para:{
        color:"#625B71",
        fontSize:fontPixel(14),
        fontFamily:"Poppins-Regular",
    }

})