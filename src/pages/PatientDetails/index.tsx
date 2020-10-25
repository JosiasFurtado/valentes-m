import React from 'react'
import { SafeAreaView, Text, View, Image } from 'react-native'
import { Patient } from '../../@types/app'
import BottomTab from '../../components/BottomTab'
import FloatButton from '../../components/FloatButton'
import GoBackHeader from '../../components/GoBackHeader'

import { tailwind } from '../../lib/styles'
import style from './styles'

import user from '../../../assets/children.png'

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

            <View style={tailwind('py-10 px-8')}>
                <GoBackHeader />

                <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between'}}>
                    <Image source={user} style={{ marginLeft: -20 }} />

                    <View style={{ marginLeft: -12 }}>
                        <Text style={style.name}>{patient.name}</Text>
                        <Text style={style.age}>{patient.age}</Text>
                        
                        <View style={{...style.containerDiagnostic}}>
                            <Text style={style.containerDiagnosticType}>Diagnóstico</Text>
                            <Text style={{...style.containerDiagnosticType, color: '#333' }}>{patient.situation}</Text>
                        </View>
                    </View>

                    <View style={{marginLeft: 10}}>
                        <Text style={style.protocol}>{patient.protocol}</Text>
                        <View style={{...style.containerDiagnostic, marginTop: 42}}>
                            <Text style={style.containerDiagnosticType}>Diagnosticado há</Text>
                            <Text style={{...style.containerDiagnosticType, color: '#333' }}>{patient.time}</Text>
                        </View>
                    </View>
                </View>

                <View></View>
            </View>

            <FloatButton onPress={() => { }} />
            <BottomTab />

        </SafeAreaView>
    )
}

PatientDetails.displayName = 'PatientDetails'

export default PatientDetails
