import { StyleSheet, Text, View , SafeAreaView } from 'react-native'
import React from 'react'
import Profile from '../../components/Profile'
import SearchForm from '../../components/SearchForm'
import HomeContent from '../../components/HomeContent'

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