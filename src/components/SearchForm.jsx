import { StyleSheet, Text, View , SafeAreaView , TextInput } from 'react-native'
import React from 'react'
import ratio from '../style/ratio'


const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
const SearchForm = () => {

  return (
    <SafeAreaView>
        <View style={styles.container}>
            <View>
                <TextInput  
                style={styles.input}
                placeholder='Location'
                placeholderTextColor="#000000"
                keyboardType='number-pad'
                
                />
            </View>
        </View>
    </SafeAreaView>
  )
}

export default SearchForm

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        marginTop:pixelSizeVertical(33),
        marginHorizontal:pixelSizeVertical(20)
    },
    input:{
        borderWidth:1,

    }
})