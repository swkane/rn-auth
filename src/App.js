import React from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAp8QNNCkbhfmbznCkOf07PXxKIocIjFnY",
      authDomain: "auth-56308.firebaseapp.com",
      databaseURL: "https://auth-56308.firebaseio.com",
      projectId: "auth-56308",
      storageBucket: "auth-56308.appspot.com",
      messagingSenderId: "761140586625"
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    )
  }
}

export default App;