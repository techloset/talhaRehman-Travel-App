import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import HomeContent from '../../components/HomeContent'
import Profile from '../../components/Profile'
import SearchForm from '../../components/SearchForm'

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Profile/>
      </View>
      <View>
        <SearchForm/>
      </View>
      <View>
        <HomeContent/>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})