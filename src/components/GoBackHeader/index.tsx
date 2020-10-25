import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Feather } from '@expo/vector-icons';

import style from './styles'
import { useNavigation } from '@react-navigation/native';

const GoBackHeader: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
      <TouchableHighlight onPress={() => goBack()} underlayColor="#F3EDE0">
        <Feather name="corner-up-left" size={30} color="black" styles={{ marginLeft: -10 }} />
      </TouchableHighlight>
      <Text style={style.goBackText}>Voltar</Text>
    </View>
  );
}

export default GoBackHeader;