const { app } = require('./app');
const { seedDatabase } = require('./myRouter/index');

let PORT = process.env.port;
if (PORT == null || PORT === '') {
  PORT = 8080;
}
seedDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on :${PORT} 🚀`);
    });
  });
// app.listen(PORT, () => {
//   console.log(`Listening on :${PORT} 🚀`);
// });
