import React, {Component} from 'react';
var firebase = require('firebase');
var uuid = require('uuid');

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAQCRCxjjM4AYQhNRfGXDKXcTr12Qf5-J8",
  authDomain: "life-questions-survey.firebaseapp.com",
  databaseURL: "https://life-questions-survey.firebaseio.com",
  projectId: "life-questions-survey",
  storageBucket: "life-questions-survey.appspot.com",
  messagingSenderId: "217973167203"
};
firebase.initializeApp(config);

class Survey extends Component {
  render(){
    return(
      <div>
      </div>
    );
  }
}

export default Survey;
