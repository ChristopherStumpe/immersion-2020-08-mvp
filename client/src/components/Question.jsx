import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import {
  Modal,
} from 'antd';

const Question = (props) => {
  const [trivia, setTrivia] = useState([]);
  const [run, setRun] = useState({
    streak: 0,
    incorrect: 0,
  });
  const [visibleModal, setVisibleModal] = useState(false);
  const [answerHistory, setAnswerHistory] = useState([]);
  const grabTrivia = () => {
    axios.get('/myRouter/question')
      .then((response) => {
        console.log('response recieved', response.data);
        setTrivia(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    grabTrivia();
  }, []);
  const sendScore = () => {
    axios.post('/myRouter/sendScore', {
      name: 'name1',
      numberCorrect: 10,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleCancel = (e) => {
    console.log(e);
    setVisibleModal(false);
    setAnswerHistory([]);
  };
  const handleOk = (e) => {
    console.log(e);
    setVisibleModal(true);
  };
  const submitName = () => {
    const edit = document.getElementById('edit').value;
    console.log('edit', edit);
    axios.post('/myRouter/sendScore', {
      name: edit,
      numberCorrect: run.streak,
    })
      .then((response) => {
        console.log(response);
        setRun({
          streak: 0,
          incorrect: 0,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const submitAnswer = () => {
    const inputVal = document.getElementById('numberSubmit').value;
    const answerCorrect = (inputVal == parseInt(trivia.number, 10));
    if (answerCorrect) {
      // eslint-disable-next-line radix
      const tempStreak = parseInt(run.streak);
      setRun({
        streak: (1 + tempStreak),
        incorrect: run.incorrect,
      });
    } else {
      // eslint-disable-next-line radix
      const tempIncorrect = parseInt(run.incorrect);
      setRun({
        streak: run.streak,
        incorrect: (1 + tempIncorrect),
      });
    }
    setAnswerHistory([{
      number: trivia.number,
      description: trivia.text,
      correct: answerCorrect,
      answerSubmitted: inputVal,
      id: uuidv4(),
    }, ...answerHistory]);
    if (run.incorrect > 2) {
      handleOk();
    }
    grabTrivia();
    document.getElementById('numberSubmit').value = '';
  };
  return (
    <div>
      <h3>Question</h3>
      <p>{trivia.text}</p>
      <p> (Demo Answer: {trivia.number})</p>
      <input type="number" min="0" max="100" id="numberSubmit" required />
      <button onClick={submitAnswer} inputType="reset">Enter</button>
      <p>current Streak:{ `${run.streak}`}</p>
      <p>incorrect: {`${run.incorrect}`}</p>
      <ul>
        {answerHistory.map(submittedAnswer => {
          console.log(submittedAnswer);
          return (<li key={submittedAnswer.id}>{`${submittedAnswer.correct}`}{`${submittedAnswer.description}`}</li>);
        })}
      </ul>
      <Modal footer={null} popup animationType="slide-up" title="Please enter your name:" visible={visibleModal} onOk={handleOk} onCancel={handleCancel} primary>
        <input type="text" id="edit" ref={(input) => { console.log('input', input); }} />
        <button onClick={submitName}>Submit Name</button>
      </Modal>
    </div>
  );
};

export default Question;
