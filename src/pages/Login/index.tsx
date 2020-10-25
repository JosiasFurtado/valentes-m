import React, { useState } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { Feather } from '@expo/vector-icons';

import style from './styles'

import logo from '../../../assets/logo.png'
import LoginModal from '../../components/LoginModal';
import SignUpContainer from '../../components/SignUpContainer';
import tailwind from 'tailwind-rn';

const Login: React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false);

    function handleModalVisible() {
        setModalVisible(!modalVisible)
    }

    return (
        <View style={style.container}>
            <View style={tailwind('mb-8 pt-24')} >
                <Text style={tailwind('text-3xl text-white font-bold mb-2')}>Bem vindo(a)!</Text>
                <View style={[style.image, tailwind('mb-4')]}>
                    <Image source={logo} />
                </View>
            </View>
            <View style={style.content}>
                <Text style={style.contentText}>Acessar</Text>
                <TouchableHighlight onPress={handleModalVisible} underlayColor='transparent' style={{ justifyContent: 'center' }}>
                    <View style={style.inputContainer}>
                        <View style={style.hr} />
                        <Text style={style.placeholder}>Digite o seu acesso</Text>
                        <Feather name="hash" size={24} style={style.icon} color='#fff' />
                    </View>
                </TouchableHighlight>
                <SignUpContainer />
            </View>
            <LoginModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </View>
    );
}

export default Login;