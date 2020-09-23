const { Router } = require('express');

const myRouter = Router();
const axios = require('axios');
const Sequelize = require('sequelize');

const DB_NAME = 'mvp';
const DB_USER = 'root';
const DB_PASS = '';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  dialect: 'mysql',
});

const HighScore = sequelize.define('HighScore', {
  name: Sequelize.STRING,
  numberCorrect: Sequelize.INTEGER,
});
const seedDatabase = () => {
  return HighScore.sync({ force: true })
    .then(() => {
      console.log('HighScore table created');
      return HighScore.create({ name: 'zlester', numberCorrect: 2 });
    })
    .then(() => {
      console.log('Seeded HighScore table');
    });
};
const getItems = (name, numberCorrect) => {
};
const getHighScores = () => {
};
myRouter.get('/question', (req, res) => {
  const randomInt = Math.floor(Math.random() * Math.floor(100));
  axios({
    method: 'GET',
    url: `https://numbersapi.p.rapidapi.com/${randomInt}/trivia`,
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': 'numbersapi.p.rapidapi.com',
      'x-rapidapi-key': '28a5e40327msh20ebae7f2e2495ep1688a5jsnf8092bd1f275',
      useQueryString: true,
    },
    params: {
      fragment: 'true',
      notfound: 'floor',
      json: 'true',
    },
  })
    .then((data) => {
      res.status(200).send(data.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

myRouter.post('/sendScore', (req, res) => {
  console.log('score recieved', req.body);
  const { name, numberCorrect } = req.body;
  HighScore.create({
    name,
    numberCorrect,
  })
    .then((result) => {
      res.status(200).send('server to front');
    });
});
myRouter.get('/highScores', (req, res) => {
  HighScore.findAll()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(err => res.status(500).send(err));
});
myRouter.post('/editName', (req, res) => {
  const { id, name } = req.body;
  HighScore.update({ name }, { where: { id } })
    .then((response) => {
      res.status(200).send('updated');
    })
    .catch(err => res.status(500).send(err));
});
myRouter.post('/delete', (req, res) => {
  const { id } = req.body;
  HighScore.destroy({ where: { id } })
    .then((result) => {
      res.status(200).send('deleted');
    })
    .catch(err => res.status(500).send(err));
});

module.exports = {
  myRouter, seedDatabase,
};
