import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import style from './styles';

interface ExamCardProps {
    examType: string,
    examDate: string,
    examDescription: string
}

const ExamCard: React.FC<ExamCardProps> = ({ examType, examDate, examDescription }) => {
    if(examType === 'Hemograma') {
        return (
            <View style={style.container}>
                <View style={{alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={{...style.text, fontFamily: 'Ubuntu_500Medium'}}>{examType}</Text>
                    <Text style={style.dateContainer}>{examDate}</Text>
                </View>
                <Text style={style.text}>{examDescription}</Text>
    
                <View style={{alignSelf: 'flex-end'}}>
                    <Text style={style.text}>ver exame</Text>
                    <Feather color='black' name='arrow-right'/>
                </View>
            </View>
        )
    }
    
    return (
        <View style={style.container}>
            <View style={{alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={{...style.text, fontFamily: 'Ubuntu_500Medium'}}>{examType}</Text>
                <Text style={style.dateContainer}>{examDate}</Text>
            </View>
            <Text style={style.text}>{examDescription}</Text>

            <View style={{alignSelf: 'flex-end'}}>
                <Text style={style.text}>ver exame</Text>
                <Feather color='black' name='arrow-right'/>
            </View>
        </View>
    )
}

export default ExamCard;