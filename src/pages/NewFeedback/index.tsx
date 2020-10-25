import React from 'react'
import { SafeAreaView, StyleProp, Text, View, ViewStyle } from 'react-native'
import { tailwind } from '../../lib/styles'

interface NewFeedbackProps {
    readonly style?: StyleProp<ViewStyle>
}

const NewFeedback: React.FC<NewFeedbackProps> = () => {
    return (
        <SafeAreaView style={tailwind('flex-1 bg-primary-500')}>
            <View>
                <Text>NewFeedback</Text>
            </View>
        </SafeAreaView>
    )
}

NewFeedback.displayName = 'NewFeedback'

export default NewFeedback
