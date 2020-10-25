import React from 'react'
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'
import { tailwind } from '../../lib/styles'
import { Feather } from '@expo/vector-icons';

interface FloatButtonProps {
    readonly style?: StyleProp<ViewStyle>
    onPress(): void
}

const FloatButton: React.FC<FloatButtonProps> = ({ style, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[tailwind('absolute shadow-md bottom-0 right-0 mr-4 mb-8 rounded-full bg-orange-500 w-12 h-12 items-center justify-center'), style]} >
            <Feather name="plus" size={28} color="#fff" />
        </TouchableOpacity>
    )
}

FloatButton.displayName = 'FloatButton'

export default FloatButton
