import { StyleSheet, Text, View , SafeAreaView } from 'react-native'
import React from 'react'
import Profile from '../../components/Profile'

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Profile/>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})