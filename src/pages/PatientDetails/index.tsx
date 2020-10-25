import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { Patient } from '../../@types/app'
import { tailwind } from '../../lib/styles'

interface PatientDetailsProps {
    readonly route: {
        params: {
            patient: Patient
        }
    }
}

const PatientDetails: React.FC<PatientDetailsProps> = ({ route }) => {
    const { patient } = route.params

    return (
        <SafeAreaView style={tailwind('flex-1 bg-primary-500')}>
            <View>
                <Text>Nome do paciente</Text>
                <Text>{patient.name}</Text>
            </View>
        </SafeAreaView>
    )
}

PatientDetails.displayName = 'PatientDetails'

export default PatientDetails
