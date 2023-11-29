import { StyleSheet, Text, View , SafeAreaView , TextInput, Image,Button,TouchableOpacity, ScrollView } from 'react-native'
import React, {useState} from 'react'
import ratio from '../style/ratio'
import SearchIcon from "../assets/images/Search.png"
import FilterIcon from "../assets/images/Filter.png"
import CalendarIcon from "../assets/images/calendar_today.png"
import PeopleIcon from "../assets/images/People.png"
import AdditionIcon from "../assets/images/Addition.png"
import { Color , FontFamily } from '../style/GlobalStyle'

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
const SearchForm = () => {
    const [firstName, onChangeFirstName] = useState(''); 
  return (
    <SafeAreaView >
       
        <View style={styles.container}>
            <View>
                <View style={styles.formIcon}>
                    <Image source={SearchIcon}/>
                </View>
                <TextInput  
                style={styles.input}
                placeholder='Location'
                placeholderTextColor="#000000"
                keyboardType='default'
                onChangeText={onChangeFirstName} 
                />
                <View style={styles.formIconRight}>
                    <Image source={FilterIcon}/>
                </View>
            </View>
            <View>
                <View style={styles.formIcon}>
                    <Image source={CalendarIcon}/>
                </View>
                <TextInput  
                style={styles.input}
                placeholder='July 08 - July 15 '
                placeholderTextColor="#000000"
                keyboardType='default'
                onChangeText={onChangeFirstName} 
                />
            </View>
            <View>
                <View style={styles.formIcon}>
                    <Image source={PeopleIcon}/>
                </View>
                <TextInput  
                style={styles.input}
                placeholder='2 Guests'
                placeholderTextColor="#000000"
                keyboardType='default'
                onChangeText={onChangeFirstName} 
                />
                <View style={styles.formIconRightAddition}>
                    <Image source={AdditionIcon}/>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.searchButton}>
                    <Text style={styles.ButtonText}>Search</Text>
                </TouchableOpacity>
            </View>
        </View>
      
    </SafeAreaView>
  )
}

export default SearchForm

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        alignItems:"center",
        marginTop:pixelSizeVertical(33),
        marginHorizontal:pixelSizeVertical(20),
        gap:pixelSizeVertical(10)
    },
    input:{
        borderWidth:1,
        paddingVertical:pixelSizeVertical(10),
        paddingHorizontal:pixelSizeVertical(60),
        borderRadius:10,
        borderColor: Color.white ,
        backgroundColor:Color.white,
        fontSize:fontPixel(16),
        fontFamily: FontFamily.poppinsRegular,
        width:widthPixel(320)
    },
    formIcon:{
        position:"absolute",
        zIndex:10,
        top:pixelSizeVertical(13),
        left:pixelSizeVertical(20),
    },
    formIconRight:{
        position:"absolute",
        zIndex:10,
        right:pixelSizeVertical(30)
    },
    formIconRightAddition:{
        position:"absolute",
        zIndex:10,
        right:pixelSizeVertical(5)
    },
    searchButton:{
        width:widthPixel(136),
        height:widthPixel(44),
        borderRadius:20,
        backgroundColor: Color.primary,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    ButtonText:{
        fontSize:fontPixel(14),
        fontFamily: FontFamily.poppinsMedium,
        color: Color.white,
        lineHeight:24,
    }
})