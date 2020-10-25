import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    name: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 17
    },
    protocol: {
        backgroundColor: '#F2E2C4',
        padding: 2,
        paddingRight: 30,
        paddingLeft: 30,
        borderRadius: 5,
        fontFamily: 'Ubuntu_400Regular',
    },
    age: {
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 16,
        marginTop: 8
    },
    containerDiagnostic: {
        backgroundColor: '#F2E2C4',
        padding: 5,
        marginTop: 15,
        width: 120,
        height: 90,
        borderRadius: 5,
        justifyContent: 'space-around'
    },
    containerDiagnosticType: {
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 16,
        color: '#B66604'
    },
    sectionTitle: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 18,
        marginTop: 30
    },
    examResult: {

    }
})

export default styles;