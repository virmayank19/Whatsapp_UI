
import React, { Component } from 'react';
import { StyleSheet, View,StatusBar } from 'react-native';
import { Container } from "native-base";
import MainHeader from "./components/header";
import MainTabs from "./components/Maintabs";
export default class App extends Component {
  // constructor(props){
  //   super(props);
  //   setTimeout { () => {
  //   StatusBar.setBackgroundColor('#128C7E');
  //   },100);
  // }
  render(){
    return (
      <Container>
        <MainHeader/>
             
      </Container>  
      
    );

  }
}


