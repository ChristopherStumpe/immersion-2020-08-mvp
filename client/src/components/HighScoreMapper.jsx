import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Modal,
} from 'antd';
const HighScoreMapper = (props) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [scores, setScores] = useState([{ name: 'samplename', numberCorrect: 0 }]);
  const getHighScores = () => {
    axios.get('myRouter/highScores')
      .then((res) => {
        console.log('res', res);
        setScores(res.data);
      })
      .catch((err) => { console.error(err); });
  };
  const deleter = (id) => {
    axios.post('myRouter/delete', { id })
      .then((res)=> {
        console.log('res', res)
        getHighScores()
      })
      .catch((err)=>{console.log('err', err)})
  };
  const editName = (id) => {
    const edit = document.getElementById('edit').value;
    console.log('edit', edit);
    axios.post('myRouter/editName', { id, name: edit })
      .then((res)=> {
        console.log('res', res)
        getHighScores()
      })
      .catch((err)=>{console.log('err', err)})
  };
  useEffect(() => {
    getHighScores();
  });
  const handleOk = (e) => {
    console.log(e);
    setVisibleModal(true);
  };
  const handleCancel = (e) => {
    console.log(e);
    setVisibleModal(false);
  };

  return (
    <div>
      <ul>
        {scores.map(score => (
          <li key={score.id}>
            <h5>{score.name}</h5>
            <h5>{score.numberCorrect} Correct Answers!</h5>
            <button onClick={handleOk}>edit</button>
            <Modal footer={null} align="middle" title={`Edit ${score.name}`} visible={visibleModal} onOk={handleOk} onCancel={handleCancel} primary>
              <input type="text" id="edit" ref={(input) => { console.log('input', input); }} />
              <button onClick={() => { editName(score.id); }}>Submit Edit</button>
              <button onClick={() => { deleter(score.id); }}>Delete High Score</button>
            </Modal>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HighScoreMapper;