import React from 'react'
import {View, Text} from 'react-native'

function Second({route,navigation}) {

  const {token, user} = route.params
  return (
    <View>
        <Text>token: {token}</Text>
        <Text>{user.username}</Text>
    </View>
  )
}

export default Second
