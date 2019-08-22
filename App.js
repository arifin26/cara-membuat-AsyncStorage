/**

* Sample React Native App

* https://github.com/facebook/react-native

* @flow

*/
import React, {Component} from 'react';
import {Platform,Stylesheet,View,Text} from 'react-native'
import LoginForm from './test/logindari';


export default class App extends Component{
  render(){
    return(
      <LoginForm />
    )
  };
  
}

// const AppStackNavigator=creatStackNavigation({
//     loginForm:loginForm,
//     register:register
// })

// const AppNavigator=createAppContainer(AppStackNavigator);