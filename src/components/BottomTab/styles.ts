import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      position: 'absolute', 
      padding: 18,
      bottom: 0, 
      alignItems: 'center', 
      justifyContent: 'space-around', 
      flexDirection: 'row',
      width: '112%',
      backgroundColor: '#F2B441',
      borderRadius: 8
    },
    menuItem: {
      padding: 5, 
      paddingRight: 45, 
      paddingLeft: 45, 
      flexDirection: 'row',
      justifyContent: 'center', 
      alignItems: 'center',
      borderRadius: 5
    },
    menuItemText: {
      color: '#B66604',
      marginRight: 5
    }
})

export default styles;