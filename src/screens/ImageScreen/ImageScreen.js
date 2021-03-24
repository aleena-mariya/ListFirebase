import React from 'react';
import { StyleSheet,Text} from 'react-native';
export default function ImageScreen() {


  return(
     
      <Text styles={styles.footerLink}>Image Picker page</Text>
      
  );
}

const styles=StyleSheet.create({

footerLink: {
  color:"#788eec",
  fontWeight:"bold",
  fontSize: 30
}
})