import React from 'react'
import { StyleProp, TouchableOpacity, ViewStyle, Text } from 'react-native'
import { tailwind } from '../../lib/styles'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface FloatButtonProps {
    readonly style?: StyleProp<ViewStyle>
    readonly title?: string
    onPress?(): void
}

const FloatButton: React.FC<FloatButtonProps> = ({ style, onPress, title }) => {
    const { navigate } = useNavigation()
    return (
        <TouchableOpacity onPress={onPress ? onPress : navigate('NewFeedback')} style={[tailwind(`absolute shadow-md bottom-0 right-0 mr-4 mb-20 rounded-full bg-orange-500 h-12 items-center justify-center ${title ? "flex-row px-4" : "w-12"}`), style]} >
            {title && (
                <Text style={tailwind('text-white text-lg font-bold')}>{title}</Text>
            )}
            <Feather name="plus" size={28} color="#fff" />
        </TouchableOpacity>
    )
}

FloatButton.displayName = 'FloatButton'

export default FloatButton
