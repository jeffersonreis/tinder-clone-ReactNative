import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Button } from 'react-native'

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>I am the Homescreen</Text>
      <Button onPress={() => navigation.navigate('Chat')} title="Go to Chat Screen"/>
    </View>
  )
}

export default HomeScreen
