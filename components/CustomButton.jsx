import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

export default function CustomButton({t}) {
  return (
    <TouchableOpacity>
      <Text>{t}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})