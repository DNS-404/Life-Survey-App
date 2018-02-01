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
  nameSubmit(event) {
    var studentName = this.refs.name.value;
    this.setState({studentName: studentName}, function(){
      console.log(this.state);
    });
  }
  questionSubmit(){
    // TODO:
  }
  answerSelected(){
    // TODO:
  }

  constructor(props){
    super(props);

    this.state = {
      uid: uuid.v1(),
      studentName: '',
      answers: {
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: '',
        answer5: '',
      },
      isSubmitted: false
    };

    this.nameSubmit = this.nameSubmit.bind(this);
    this.questionSubmit = this.questionSubmit.bind(this);
    this.answerSelected = this.answerSelected.bind(this);
  }

  render(){
    var head;
    var foot;

    if(this.state.studentName === '' && this.state.isSubmitted === false){
      head = <div>
        <h1>Hey Student, please tell us your name: </h1>
        <form onSubmit={this.nameSubmit}>
          <input className="nami" type="text" placeholder="Enter your name" ref="name" />
        </form>
      </div>;
      foot = '';
    } else if (this.state.studentName !== '' && this.state.isSubmitted === false){
      head = <div>
        <h2>Here are the questions. Please take your time while answering them.</h2>
        <form onSubmit={this.questionSubmit}>
        </form>
      </div>;
    } else if (this.state.studentName !== '' && this.state.isSubmitted === true){
      head = <h1>Thanks, {this.state.studentName} for your time.</h1>

    }

    return(
      <div>
        {head}
        <br />
        {foot}
      </div>
    );
  }
}

export default Survey;
