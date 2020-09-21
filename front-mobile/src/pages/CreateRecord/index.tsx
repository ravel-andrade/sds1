import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Header from '../../components/Header';


const CreateRecord = () =>{
    return(
        <>
        <Header/>
        <Text>Hello</Text>
        </>
    
    );
}

const styles = StyleSheet.create({
    text: {
      flex: 1,
      
    }
  });

export default CreateRecord;