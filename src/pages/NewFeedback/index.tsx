import React from 'react'
import { SafeAreaView, StyleProp, Text, View, ViewStyle, Image, TouchableHighlight } from 'react-native'
import BottomTab from '../../components/BottomTab'
import { tailwind } from '../../lib/styles'
import person from '../../../assets/person.png'

interface NewFeedbackProps {
  readonly style?: StyleProp<ViewStyle>
}

const NewFeedback: React.FC<NewFeedbackProps> = () => {
  return (
    <SafeAreaView style={tailwind('flex-1 bg-primary-500')}>
      <View style={tailwind('items-center justify-center h-full')}>
        <View style={tailwind('bg-yellow-2 items-center px-4 w-11/12 rounded-lg py-3')}>
          <Text style={tailwind('text-gray-800 text-2xl')}>Aqui você pode adicionar as informações da consulta de hoje.</Text>
          <Image source={person} style={tailwind('mb-4')} />
          <TouchableHighlight underlayColor="#F2B441" style={tailwind('bg-orange-2 shadow-md px-8 py-2 rounded')} onPress={() => { }}>
            <Text style={tailwind('text-white text-lg')}>Começar</Text>
          </TouchableHighlight>
        </View>
      </View>
      <BottomTab inPage="none" />
    </SafeAreaView>
  )
}

NewFeedback.displayName = 'NewFeedback'

export default NewFeedback
