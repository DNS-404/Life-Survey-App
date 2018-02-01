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
    this.setState({studentName: studentName});
  }

  questionSubmit(){
    firebase.database().ref('life-questions-survey/'+this.state.uid).set({
      studentName: this.state.studentName,
      answers: this.state.answers
    });
    this.setState({isSubmitted: true});
  }

  answerSelected(event){
    var answers = this.state.answers;
    if(event.target.name === 'answer1'){
      answers.answer1 = event.target.value;
    } else if(event.target.name === 'answer2'){
      answers.answer2 = event.target.value;
    } else if(event.target.name === 'answer3'){
      answers.answer3 = event.target.value;
    }

    this.setState({answers: answers}, function(){
      console.log(this.state);
    });
  }

  constructor(props){
    super(props);

    this.state = {
      uid: uuid.v1(),
      studentName: '',
      answers: {
        answer1: '',
        answer2: '',
        answer3: ''
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
        <h2>Hello {this.state.studentName}. <br /> Here are the questions. Please take your time while answering them.</h2>
        <form onSubmit={this.questionSubmit}>
          <div className="card">
            <label>Do you worry about what others think?</label> <br/>
            <input type="radio" name="answer1" value="yes" onChange={this.answerSelected} />Yes, way too much. <br/>
            <input type="radio" name="answer2" value="no" onChange={this.answerSelected} />No, Not at all. <br/>
            <input type="radio" name="answer3" value="maybe" onChange={this.answerSelected} />Sometimes. Can't help it. <br/>
          </div>
          <div className="card">
            <label>Are you comfortable in your own skin?</label> <br/>
            <input type="radio" name="answer1" value="yes" onChange={this.answerSelected} />Yes, of course. <br/>
            <input type="radio" name="answer2" value="no" onChange={this.answerSelected} />No. No more comments. <br/>
            <input type="radio" name="answer3" value="confused" onChange={this.answerSelected} />I don't want to think about this. <br/>
          </div>
          <div className="card">
            <label>Are you truly happy?</label> <br/>
            <input type="radio" name="answer1" value="yes" onChange={this.answerSelected} />Yes.. I guess. <br/>
            <input type="radio" name="answer2" value="no" onChange={this.answerSelected} />No, Not at all. <br/>
            <input type="radio" name="answer3" value="confused" onChange={this.answerSelected} />Never really thought about it. <br/>
          </div>
          <div className="card">
            <label>What do you want people to say at your funeral?</label> <br/>
            <input type="radio" name="answer1" value="positive" onChange={this.answerSelected} />He was a nice man. He'll be missed. <br/>
            <input type="radio" name="answer2" value="negative" onChange={this.answerSelected} />This garbage deserved to die! <br/>
            <input type="radio" name="answer3" value="not-remembered" onChange={this.answerSelected} />Who is he again? <br/>
          </div>
          <input className="feedback-button" type="submit" value="Submit" />
        </form>
      </div>;
    } else if(this.state.isSubmitted === true && this.state.studentName !== '') {
      head = <h1>Thanks, {this.state.studentName}</h1>;
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
