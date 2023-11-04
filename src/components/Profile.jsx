import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import ratio from '../style/ratio'
import ProfilePic from "../assets/images/ProfilePic.svg"

const Profile = () => {
  return (
    <SafeAreaView>
        <View>
            <View>
                <ProfilePic/>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})