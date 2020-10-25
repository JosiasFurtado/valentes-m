import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import style from './styles';

interface ExamCardProps {
    examType: string,
    examDate: string,
    examDescription?: string,
    examStatus?: string,
    examTypes?:
    {
        id: string,
        name: string,
        status: string
    }[]
}

const ExamCard: React.FC<ExamCardProps> = ({ examType, examDate, examDescription, examStatus, examTypes }) => {
    if (examType === 'Hemograma') {
        return (
            <View style={style.container}>
                <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', width: '100%' }}>
                    <Text style={{ ...style.text, fontFamily: 'Ubuntu_500Medium', marginBottom: 10 }}>{examType}</Text>
                    <Text style={style.dateContainer}>{examDate}</Text>
                </View>

                {examTypes?.map(examType => (
                    <View key={examType.id} style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', width: '100%' }}>
                        <Text style={style.text}>{examType.name}</Text>
                        <Text style={{ ...style.text, fontFamily: 'Ubuntu_500Medium' }}>{examType.status}</Text>
                    </View>
                ))}

                <View style={{ alignSelf: 'flex-end', flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                    <Text style={style.text}>ver exame</Text>
                    <Feather color='black' name='arrow-right' size={14} style={{ marginTop: 2, marginLeft: 3 }} />
                </View>
            </View>
        )
    }

    return (
        <View style={style.container}>
            <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', width: '100%' }}>
                <Text style={{ ...style.text, fontFamily: 'Ubuntu_500Medium', marginBottom: 10 }}>{examType}</Text>
                <Text style={style.dateContainer}>{examDate}</Text>
            </View>
            <Text style={style.text}>{examDescription}</Text>

            <View style={{ alignSelf: 'flex-end', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={style.text}>ver exame</Text>
                <Feather color='black' name='arrow-right' size={14} style={{ marginTop: 2, marginLeft: 3 }} />
            </View>
        </View>
    )
}

export default ExamCard;