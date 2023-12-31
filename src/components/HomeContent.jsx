import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import ReadMore from 'react-native-read-more-text';
import banner from "../assets/images/MainImg.png";
import { Color, FontFamily } from '../style/GlobalStyle';
import ratio from '../style/ratio';


const { widthPixel, fontPixel, pixelSizeVertical } = ratio;
const _renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={{color: Color.black, marginTop: 15}} onPress={handlePress}>
        Read more
      </Text>
    );
  } 
const _renderRevealedFooter = (handlePress) => {
    return (
      <Text style={{color: Color.black, marginTop: 5}} onPress={handlePress}>
        Show less
      </Text>
    );
  }
const _handleTextReady = () => {
    return(
        <Text>
            Hello
        </Text>
    )
  }

const HomeContent = () => {
    return (
        <SafeAreaView>
            <ScrollView keyboardDismissMode='on-drag' showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View>
                    <Image source={banner} />
                </View>
                <View style={styles.content} >
                    <Text style={styles.headings}>DETAILS</Text>
                    <ReadMore
                    numberOfLines={4}
                    renderTruncatedFooter={_renderTruncatedFooter}
                    renderRevealedFooter={_renderRevealedFooter}
                    onReady={_handleTextReady}
                    >
                    <Text style={styles.para}>
                    There is no other place like Bali in this world. A magical mix of culture, people, nature, activities, weather, culinary delights, nightlife and many other interesting things that can make your stay unforgettable.
                    </Text>
                    </ReadMore>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeContent

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.secondary,
        borderRadius: 30,
        marginTop: pixelSizeVertical(17),
        marginBottom:110
    },
    content:{
        marginHorizontal:pixelSizeVertical(20),
        height:pixelSizeVertical(800)
    },
    headings:{
        fontSize:fontPixel(14),
        fontFamily: FontFamily.poppinsMedium,
        color: Color.black,
        lineHeight:20,
        letterSpacing:0.1
    },
    para:{
        color: Color.dark,
        fontSize:fontPixel(14),
        fontFamily: FontFamily.poppinsRegular,
    }

})