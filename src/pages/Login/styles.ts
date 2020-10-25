import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2B441',
        flex: 1,
        padding: 20,
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        flex: 1,
        marginTop: 80
    },
    contentText: {
        marginBottom: 40,
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 20,
        color: '#fff',
    },
    inputContainer: {
        position: "relative",
        bottom: -10,
        marginBottom: 20,
    },
    icon: {
        position: "absolute",
        bottom: 50,
        right: 10
    },
    hr: {
        borderBottomWidth: 1,
        borderColor: '#B66604',
        marginTop: 20,
        marginBottom: 40
    },
    placeholder: {
        position: "absolute",
        bottom: 55,
        left: 10,
        fontFamily: 'Ubuntu_400Regular',
        color: '#fff'
    },
})

export default styles;