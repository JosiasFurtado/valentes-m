import React, { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Feather } from '@expo/vector-icons';

import style from './styles';
import { tailwind } from '../../lib/styles';
import { useNavigation } from '@react-navigation/native';

interface BottomTabProps {
  readonly inPage?: string
}

const BottomTab: React.FC<BottomTabProps> = ({ inPage }) => {
  const { navigate } = useNavigation()
  const [active, setActive] = useState(inPage || 'dados')

  const handleHandeOption = (option: string) => {
    if (option === 'dados') {
      setActive('dados')
      return navigate('Home')
    }
    return navigate('Calendar')
  }

  return (
    <View style={style.container}>

      <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={tailwind('rounded-lg')} onPress={() => handleHandeOption('dados')}>
        <View style={[style.menuItem, tailwind(`${active === 'dados' ? "bg-primary-600" : "bg-orange-2"}`)]}>
          <Text style={style.menuItemText}>Dados</Text>
          <Feather name="trending-up" size={24} color="#B66604" />
        </View>
      </TouchableHighlight>

      <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={tailwind('rounded-lg')} onPress={() => handleHandeOption('agenda')}>
        <View style={[style.menuItem, tailwind(`${active === 'agenda' ? "bg-primary-600" : "bg-orange-2"}`)]}>
          <Text style={style.menuItemText}>Agenda</Text>
          <Feather name="calendar" size={24} color="#B66604" />
        </View>
      </TouchableHighlight>

    </View>
  );
}

export default BottomTab;