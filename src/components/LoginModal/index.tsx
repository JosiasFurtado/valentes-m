import React, { Dispatch, SetStateAction } from 'react'
import { Modal, StyleProp, TouchableHighlight, View, Text, ViewStyle, Image } from 'react-native'
import { Feather } from '@expo/vector-icons';
import Input from '../Input'
import miniLogo from '../../../assets/mini-logo.png'

import style from './styles'
import { tailwind } from '../../lib/styles';
import PrimaryButton from '../PrimaryButton';
import { useNavigation } from '@react-navigation/native';

interface LoginModalProps {
  readonly styles?: StyleProp<ViewStyle>
  readonly modalVisible: boolean
  setModalVisible: Dispatch<SetStateAction<boolean>>
}

const LoginModal: React.FC<LoginModalProps> = ({ styles, modalVisible, setModalVisible }) => {
  const { navigate } = useNavigation();

  const handleNavigateToHome = () => {
    setModalVisible(!modalVisible)
    navigate('Home')
  }

  return (
    <View style={styles}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Image source={miniLogo} style={tailwind('mt-4')} />
            <View style={tailwind('relative')}>

              <Text style={style.contentText}>Acessar</Text>
              <View>
                <Input
                  label='Digite o seu acesso'
                  type='postalCode'
                  keyboardtype='number-pad'
                  maxlength={6}
                />
                <Feather name="hash" size={24} style={{ ...style.icon, bottom: 30 }} color='#F2B441' />
              </View>
              <View>
                <Input
                  label='Digite sua senha'
                  type="password"
                  keyboardtype="default"
                  maxlength={10}
                />
                <Feather name="lock" size={24} style={{ ...style.icon, bottom: 30 }} color='#F2B441' />
              </View>
            </View>


            <View style={style.buttons}>
              <TouchableHighlight underlayColor="#F3EDE0" style={style.goBackButton} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={{ ...style.buttonText, color: '#333' }}>Voltar</Text>
              </TouchableHighlight>

              <PrimaryButton onPress={handleNavigateToHome} />
            </View>

          </View>
        </View>
      </Modal>
    </View>
  )
}

LoginModal.displayName = 'LoginModal'

export default LoginModal
