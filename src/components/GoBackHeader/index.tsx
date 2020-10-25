import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import style from './styles'

const GoBackHeader: React.FC = () => {
  return (
    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
      <Feather name="corner-up-left" size={30} color="black" styles={{marginLeft: -10}}/>
      <Text style={style.goBackText}>Voltar</Text>  
    </View>
  );
}

export default GoBackHeader;