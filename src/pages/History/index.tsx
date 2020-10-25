import React from 'react'
import { SafeAreaView, Text, View, Image, ScrollView } from 'react-native'

import BottomTab from '../../components/BottomTab'
import ExamCard from '../../components/ExamCard'
import FloatButton from '../../components/FloatButton'
import GoBackHeader from '../../components/GoBackHeader'

import { tailwind } from '../../lib/styles'
import style from './styles'

const examTypes = [
    {
        id: "01",
        name: "Neutropenia",
        status: "CONFIRMADA"
    },
    {
        id: "02",
        name: "Leucopenia",
        status: "CONFIRMADA"
    },
    {
        id: "03",
        name: "Pancitopenia",
        status: "CONFIRMADA"
    }
]

const History: React.FC = () => {

    return (
        <SafeAreaView style={tailwind('flex-1 bg-primary-500')}>
            <ScrollView>
                <View style={tailwind('py-10 px-8 mb-20')}>
                    <GoBackHeader />

                    <Text style={{ ...style.sectionTitle, marginBottom: 20, marginTop: 50 }}>Histórico detalhado</Text>

                    <Text style={{ ...style.sectionTitle, fontFamily: 'Ubuntu_400Regular', fontSize: 17, }}>Medicamentos atuais:</Text>

                    <Text style={{ ...style.drugText, marginTop: 10 }}>Pred 3mg</Text>
                    <Text style={style.drugText}>L Aspa 4200 UI via IV</Text>
                    <Text style={{ ...style.drugText, marginBottom: 15 }}>Vim 2 mg/m2</Text>

                    <ExamCard
                        examDate='13/10/20'
                        examType='Hemograma'
                        examDescription='Positivos para PAS. Coloração e forma de anéis concêntricos e grosseiros'
                        examTypes= {
                            [
                                {
                                    id: '01',
                                    name: 'Neutropenia',
                                    status: 'CONFIRMADO'
                                },
                                {
                                    id: '02',
                                    name: 'Leucopenia',
                                    status: 'CONFIRMADO'
                                },
                                {
                                    id: '03',
                                    name: 'Pancitopenia',
                                    status: 'CONFIRMADO'
                                }
                            ]
                        }
                    />

                    <ExamCard
                        examDate='13/10/20'
                        examType='Mielograma'
                        examDescription='Medula óssea hipercelular com intensa infiltração por linfoblasto'
                    />

                    <ExamCard
                        examDate='01/10/20'
                        examType='Citoquímica'
                        examDescription='Positivos para PAS. Coloração e forma de anéis concêntricos e grosseiros'
                    />
                    <ExamCard
                        examDate='25 /07/20'
                        examType='Imunofenotipagem'
                        examDescription='Positivos para PAS. Coloração e forma de anéis concêntricos e grosseiros'
                    />

                    <ExamCard
                        examDate='15/08/20'
                        examType='Reação ao tratamento'
                        examDescription='Positivos para PAS. Coloração e forma de anéis concêntricos e grosseiros'
                    />

                </View>
            </ScrollView>
            <FloatButton onPress={() => { }} />
            <BottomTab />
        </SafeAreaView>
    )
}

export default History;
