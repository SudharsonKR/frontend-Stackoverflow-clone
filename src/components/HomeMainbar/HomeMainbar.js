import React from 'react'
import {useLocation, useNavigate } from "react-router-dom";
import './HomeMainbar.css'
import QuestionList from './QuestionList';
import { useSelector } from 'react-redux';

const HomeMainbar = () => {
// var questionsList=[{
//   _id: 1,
//   upVotes: 3,
//   downVotes: 2,
//   noOfAnswers: 2,
//   questionTitle: 'What is a Function?',
//   questionBody: 'It Meant to be',
//   questionTags:['java', 'node js', 'react js'],
//   userPosted: "mano",
//   userId: 1,
//   askedOn: 'jan 1',
//   answer:[{
//     answerBody: "Answer",
//     userAnswered:"arjun",
//     answeredOn:'jan 2',
//     userId: 2,
//   }]
// },
// {_id: 2,
//   upVotes: 3,
//   downVotes: 2,
//   noOfAnswers: 2,
//   questionTitle: 'What is a Function?',
//   questionBody: 'It Meant to be',
//   questionTags:['java', 'node js', 'react js'],
//   userPosted: "mano",
//   userId: 1,
//   askedOn: 'jan 1',
// answer:[{
//   answerBody: "Answer",
//   userAnswered:"arjun",
//   answeredOn:'jan 2',
//   userId: 2,
// }]},
// {_id: 3,
//   upVotes: 3,
//   downVotes: 2,
//   noOfAnswers: 2,
//   questionTitle: 'What is a Function?',
//   questionBody: 'It Meant to be',
//   questionTags:['java', 'node js', 'react js'],
//   userPosted: "mano",
//   userId: 1,
//   askedOn: 'jan 1',
//   answer:[{
//     answerBody: "Answer",
//     userAnswered:"arjun",
//     answeredOn:'jan 2',
//     userId: 2,
//   }]}
// ]
  const location = useLocation();
  const user = 1;
  const navigate = useNavigate()

  const questionsList = useSelector((state) => state.questionsReducer);

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };
  return (
    <div className="main-bar">
    <div className="main-bar-header">
      {location.pathname === "/" ? (
        <h1>Top Questions</h1>
      ) : (
        <h1>All Questions</h1>
      )}
      <button onClick={checkAuth} className='ask-btn'>Ask Questions</button>
    </div>
    <div>
      {questionsList.data === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <p>{questionsList.data.length} questions</p>
          <QuestionList questionsList={questionsList.data} />
        </>
      )}
    </div>
  </div>
);
};


export default HomeMainbar