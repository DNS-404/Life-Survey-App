import React, {Component} from 'react';
var firebase = require('firebase');
var uuid = require('uuid');

var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
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
