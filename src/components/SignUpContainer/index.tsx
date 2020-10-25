import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import style from './styles';
import { tailwind } from '../../lib/styles';

const SignUpContainer: React.FC = () => {
    return (
        <View style={style.container}>
            <Text style={tailwind('text-primary-500')}>Não possui conta? Cadastra-se aqui</Text>
            <Feather name="user-plus" size={24} color="#fff" />
        </View>
    );
}

export default SignUpContainer;