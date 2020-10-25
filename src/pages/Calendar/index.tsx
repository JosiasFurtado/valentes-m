import React from 'react'
import { View, SafeAreaView, Text, Image } from 'react-native'
import BottomTab from '../../components/BottomTab'
import { Feather } from '@expo/vector-icons';
import { getColor, tailwind } from '../../lib/styles'
import imageMock from '../../../assets/calendar.png'
import FloatButton from '../../components/FloatButton';

const Calendar: React.FC = () => {

  return (
    <SafeAreaView style={tailwind('flex-1 bg-primary-500')}>
      <View style={tailwind('items-center mt-6')}>
        <View style={tailwind('flex-row items-center justify-around w-full')}>
          <Feather name="arrow-left" size={24} color={getColor('orange-2')} />
          <View style={tailwind('bg-orange-2 px-4 py-2 rounded')}>
            <Text style={tailwind('font-bold text-gray-800')}>OUTUBRO</Text>
          </View>
          <Feather name="arrow-right" size={24} color={getColor('orange-2')} />
        </View>
        <Image source={imageMock} style={tailwind('w-11/12')} resizeMode="contain" />
      </View>
      <FloatButton title="Evento" onPress={() => { }} />
      <BottomTab inPage="agenda" />
    </SafeAreaView>
  )
}

Calendar.displayName = 'Calendar'

export default Calendar
