import {StyleSheet} from 'react-native';

export default  StyleSheet.create({
    screen: {
      flex: 1,
      padding: 100,
      backgroundColor: '#66ff99',
    },

    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '101%',
        borderColor:"black"
      },
      input: {
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderColor:'black',
        marginBottom: 10
      },
      buttonContainer: {
        backgroundColor: '#70db70',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '70%'
      },
      button: {
        backgroundColor: '#70db70',
        width: '80'
      },
      listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'yellow',
        borderColor: 'black',
        borderWidth: 1
      },
      headerLink: {
        padding:20,
        fontWeight: "bold"
      },
      header: {
        fontWeight: "bold",
        padding: 13,
      
      },
      image: {
        fontWeight: "bold",
        padding: 13,
      },
      location:{
        fontWeight: "bold",
        padding: 13,
      }

    
})
