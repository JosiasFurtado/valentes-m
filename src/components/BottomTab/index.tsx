import React from 'react';
import { View, Image, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import style from './styles';

const BottomTab: React.FC = () => {
  return (
    <View style={style.container}>

      <View style={{...style.menuItem, backgroundColor: '#F2E2C4'}}>
        <Text style={style.menuItemText}>Dados</Text>
        <Feather name="trending-up" size={24} color="#B66604" />
      </View>

      <View style={style.menuItem}>
        <Text style={style.menuItemText}>Dados</Text>
        <Feather name="calendar" size={24} color="#B66604" />
      </View>

    </View>
  );
}

export default BottomTab;