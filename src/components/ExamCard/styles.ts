import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2E2C4',
        borderRadius: 5,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.40,
        shadowRadius: 3.84,

        elevation: 5,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    text: {

    },
    dateContainer: {
        backgroundColor: '#F2B441',
        padding: 2,
        paddingRight: 15,
        paddingLeft: 15,
        borderRadius: 5,
        position: 'absolute',
        right: -10,
        bottom: 16,
        fontFamily: 'Ubuntu_400Regular',     
    }
})

export default styles;