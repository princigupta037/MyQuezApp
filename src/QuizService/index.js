import React, {Component } from 'react';
import "../assets/style.css";
import QuestionBox from '../components/QuestionBox';
import question from './question';
import Result from '../components/Result';

class QuizApp extends Component{

    state ={
        questionBank:[],
        score:0,
        response:0
    }
    getQuestion = () => {
        question().then(question => {
            this.setState({
                questionBank:question
            });
        });
    };

    computeAnswer = (answers, correctAnswer) => {
        if(answers === correctAnswer){
            this.setState({
                score: this.state.score + 1
            });
        }
        this.setState({
            response: this.state.response < 5 ? this.state.response + 1 : 5
        })
    };

    playAgain =() => {
        this.getQuestion();
        this.setState({
            score:0,
            response:0
        });
    };

    componentDidMount(){
        this.getQuestion();
    }

    render(){
        return(
            <div className='container'>
                <div className='title'>
                    My Quize :)
                </div>
                {this.state.questionBank.length > 0 && 
                    this.state.response < 5 &&
                    this.state.questionBank.map(({question,answers,correct,questionId}) => (
                        <QuestionBox 
                        question={question} 
                        options={answers} 
                        key={questionId} 
                        selected = {answers => this.computeAnswer(answers, correct)}
                        />
                        )
                    )}
                {this.state.response === 5 ? (<Result score={this.state.score} playAgain ={this.playAgain} />) : null }
            </div>
        );
    }
}

export default QuizApp;