import React from 'react'
import { SafeAreaView, Text, View, Image } from 'react-native'

import BottomTab from '../../components/BottomTab'
import ExamCard from '../../components/ExamCard'
import FloatButton from '../../components/FloatButton'
import GoBackHeader from '../../components/GoBackHeader'

import { tailwind } from '../../lib/styles'
import style from './styles'

const History: React.FC = () => {

    return (
        <SafeAreaView style={tailwind('flex-1 bg-primary-500')}>

            <View style={tailwind('py-10 px-8')}>
                <GoBackHeader />

                <Text style={{ ...style.sectionTitle, marginBottom: 20, marginTop: 50 }}>Histórico detalhado</Text>

                <Text style={{ ...style.sectionTitle, fontFamily: 'Ubuntu_400Regular', fontSize: 17, }}>Medicamentos atuais:</Text>

                <Text style={{...style.drugText, marginTop: 30}}>Pred 3mg</Text>
                <Text style={style.drugText}>L Aspa 4200 UI via IV</Text>
                <Text style={style.drugText}>Vim 2 mg/m2</Text>

                <ExamCard examDate='13/10/20' examType='Mielograma' examDescription='Medula óssea hipercelular com intensa infiltração por linfoblasto'/>

            </View>

            <FloatButton onPress={() => { }} />
            <BottomTab />

        </SafeAreaView>
    )
}

export default History;
