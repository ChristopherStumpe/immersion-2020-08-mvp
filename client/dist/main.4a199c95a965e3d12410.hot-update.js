webpackHotUpdate("main",{

/***/ "./client/src/components/Question.jsx":
/*!********************************************!*\
  !*** ./client/src/components/Question.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar Question = function Question(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      trivia = _useState2[0],\n      setTrivia = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    streak: 0,\n    incorrect: 0\n  }),\n      _useState4 = _slicedToArray(_useState3, 2),\n      run = _useState4[0],\n      setRun = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState6 = _slicedToArray(_useState5, 2),\n      visibleModal = _useState6[0],\n      setVisibleModal = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState8 = _slicedToArray(_useState7, 2),\n      answerHistory = _useState8[0],\n      setAnswerHistory = _useState8[1];\n\n  var grabTrivia = function grabTrivia() {\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/myRouter/question').then(function (response) {\n      console.log('response recieved', response.data);\n      setTrivia(response.data);\n    })[\"catch\"](function (error) {\n      console.log(error);\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    grabTrivia();\n  }, []);\n\n  var resetRun = function resetRun() {};\n\n  var sendScore = function sendScore() {\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/myRouter/sendScore', {\n      name: 'name1',\n      numberCorrect: 10\n    }).then(function (response) {\n      console.log(response);\n    })[\"catch\"](function (error) {\n      console.log(error);\n    });\n  };\n\n  var handleCancel = function handleCancel(e) {\n    console.log(e);\n    setVisibleModal(false);\n  };\n\n  var handleOk = function handleOk(e) {\n    console.log(e);\n    setVisibleModal(true);\n  };\n\n  var submitName = function submitName() {\n    // how to make pop up window to enter new name\n    var edit = document.getElementById('edit').value;\n    console.log('edit', edit);\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/myRouter/sendScore', {\n      name: edit,\n      numberCorrect: run.streak\n    }).then(function (response) {\n      console.log(response);\n    })[\"catch\"](function (error) {\n      console.log(error);\n    });\n  };\n\n  var submitAnswer = function submitAnswer() {\n    var inputVal = document.getElementById('numberSubmit').value;\n    var answerCorrect = inputVal == parseInt(trivia.number, 10);\n\n    if (answerCorrect) {\n      var tempStreak = parseInt(run.streak);\n      setRun({\n        streak: 1 + tempStreak,\n        incorrect: run.incorrect\n      });\n    } else {\n      var tempIncorrect = parseInt(run.incorrect);\n      setRun({\n        streak: run.streak,\n        incorrect: 1 + tempIncorrect\n      });\n    }\n\n    setAnswerHistory([{\n      number: trivia.number,\n      description: trivia.text,\n      correct: answerCorrect,\n      answerSubmitted: inputVal,\n      id: Object(uuid__WEBPACK_IMPORTED_MODULE_1__[\"v4\"])()\n    }].concat(_toConsumableArray(answerHistory)));\n\n    if (run.incorrect > 2) {\n      // game over\n      // animations\n      // enter score for leaderboard\n      handleOk(); // sendScore();\n\n      setRun({\n        streak: 0,\n        incorrect: 0\n      });\n    }\n\n    grabTrivia();\n    document.getElementById('numberSubmit').value = '';\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Question\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, trivia.number, trivia.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"number\",\n    min: \"0\",\n    max: \"100\",\n    id: \"numberSubmit\",\n    required: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: submitAnswer,\n    inputType: \"reset\"\n  }, \"Enter\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"current Streak:\", \"\".concat(run.streak)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"incorrect: \", \"\".concat(run.incorrect)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, answerHistory.map(function (submittedAnswer) {\n    console.log(submittedAnswer);\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: submittedAnswer.id\n    }, \"\".concat(submittedAnswer.correct), \"\".concat(submittedAnswer.description));\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: sendScore\n  }, \"post check\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"Modal\"], {\n    footer: null,\n    popup: true,\n    animationType: \"slide-up\",\n    title: \"Please enter your name:\",\n    visible: visibleModal,\n    onOk: handleOk,\n    onCancel: handleCancel,\n    primary: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    id: \"edit\",\n    ref: function ref(input) {\n      console.log('input', input);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: submitName\n  }, \"Submit Name\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Question); // setup score kill run /reset\n//need to add highscore\n//implement db\n//cleanup\n//popup when streaks of 5 or 10 or multiple or whatever. from random assortment?//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUXVlc3Rpb24uanN4PzVmYTQiXSwibmFtZXMiOlsiUXVlc3Rpb24iLCJwcm9wcyIsInVzZVN0YXRlIiwidHJpdmlhIiwic2V0VHJpdmlhIiwic3RyZWFrIiwiaW5jb3JyZWN0IiwicnVuIiwic2V0UnVuIiwidmlzaWJsZU1vZGFsIiwic2V0VmlzaWJsZU1vZGFsIiwiYW5zd2VySGlzdG9yeSIsInNldEFuc3dlckhpc3RvcnkiLCJncmFiVHJpdmlhIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVycm9yIiwidXNlRWZmZWN0IiwicmVzZXRSdW4iLCJzZW5kU2NvcmUiLCJwb3N0IiwibmFtZSIsIm51bWJlckNvcnJlY3QiLCJoYW5kbGVDYW5jZWwiLCJlIiwiaGFuZGxlT2siLCJzdWJtaXROYW1lIiwiZWRpdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsInN1Ym1pdEFuc3dlciIsImlucHV0VmFsIiwiYW5zd2VyQ29ycmVjdCIsInBhcnNlSW50IiwibnVtYmVyIiwidGVtcFN0cmVhayIsInRlbXBJbmNvcnJlY3QiLCJkZXNjcmlwdGlvbiIsInRleHQiLCJjb3JyZWN0IiwiYW5zd2VyU3VibWl0dGVkIiwiaWQiLCJ1dWlkdjQiLCJtYXAiLCJzdWJtaXR0ZWRBbnN3ZXIiLCJpbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsa0JBQ0VDLHNEQUFRLENBQUMsRUFBRCxDQURWO0FBQUE7QUFBQSxNQUNuQkMsTUFEbUI7QUFBQSxNQUNYQyxTQURXOztBQUFBLG1CQUVKRixzREFBUSxDQUFDO0FBQzdCRyxVQUFNLEVBQUUsQ0FEcUI7QUFFN0JDLGFBQVMsRUFB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QUFRLFdBQU8sRUFBRVIsWUFBakI7QUFBK0IsYUFBUyxFQUFDO0FBQXpDLGFBSkYsZUFLRSxtR0FBdUI3QixHQUFHLENBQUNGLE1BQTNCLEVBTEYsZUFNRSwrRkFBa0JFLEdBQUcsQ0FBQ0QsU0FBdEIsRUFORixlQU9FLHVFQUNHSyxhQUFhLENBQUNzQyxHQUFkLENBQWtCLFVBQUFDLGVBQWUsRUFBSTtBQUNwQ2hDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZK0IsZUFBWjtBQUNBLHdCQUFRO0FBQUksU0FBRyxFQUFFQSxlQUFlLENBQUNIO0FBQXpCLGlCQUFpQ0csZUFBZSxDQUFDTCxPQUFqRCxhQUErREssZUFBZSxDQUFDUCxXQUEvRSxFQUFSO0FBQ0QsR0FIQSxDQURILENBUEYsZUFhRTtBQUFRLFdBQU8sRUFBRW5CO0FBQWpCLGtCQWJGLGVBY0UsMkRBQUMsMENBQUQ7QUFBTyxVQUFNLEVBQUUsSUFBZjtBQUFxQixTQUFLLE1BQTFCO0FBQTJCLGlCQUFhLEVBQUMsVUFBekM7QUFBb0QsU0FBSyxFQUFDLHlCQUExRDtBQUFvRixXQUFPLEVBQUVmLFlBQTdGO0FBQTJHLFFBQUksRUFBRXFCLFFBQWpIO0FBQTJILFlBQVEsRUFBRUYsWUFBckk7QUFBbUosV0FBTztBQUExSixrQkFDRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUUsRUFBQyxNQUF0QjtBQUE2QixPQUFHLEVBQUUsYUFBQ3VCLEtBQUQsRUFBVztBQUFFakMsYUFBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQmdDLEtBQXJCO0FBQThCO0FBQTdFLElBREYsZUFFRTtBQUFRLFdBQU8sRUFBRXBCO0FBQWpCLG1CQUZGLENBZEYsQ0FERjtBQXFCRCxDQXJIRDs7QUF3SGUvQix1RUFBZixFLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NsaWVudC9zcmMvY29tcG9uZW50cy9RdWVzdGlvbi5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtcbiAgTW9kYWwsIEJ1dHRvbiwgUm93LCBDb2wsIFBvcG92ZXIsXG59IGZyb20gJ2FudGQnO1xuXG5jb25zdCBRdWVzdGlvbiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbdHJpdmlhLCBzZXRUcml2aWFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcnVuLCBzZXRSdW5dID0gdXNlU3RhdGUoe1xuICAgIHN0cmVhazogMCxcbiAgICBpbmNvcnJlY3Q6IDAsXG4gIH0pO1xuICBjb25zdCBbdmlzaWJsZU1vZGFsLCBzZXRWaXNpYmxlTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYW5zd2VySGlzdG9yeSwgc2V0QW5zd2VySGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IGdyYWJUcml2aWEgPSAoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KCcvbXlSb3V0ZXIvcXVlc3Rpb24nKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZSByZWNpZXZlZCcsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICBzZXRUcml2aWEocmVzcG9uc2UuZGF0YSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdyYWJUcml2aWEoKTtcbiAgfSwgW10pO1xuICBjb25zdCByZXNldFJ1biA9ICgpID0+IHtcblxuICB9XG4gIGNvbnN0IHNlbmRTY29yZSA9ICgpID0+IHtcbiAgICBheGlvcy5wb3N0KCcvbXlSb3V0ZXIvc2VuZFNjb3JlJywge1xuICAgICAgbmFtZTogJ25hbWUxJyxcbiAgICAgIG51bWJlckNvcnJlY3Q6IDEwLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgc2V0VmlzaWJsZU1vZGFsKGZhbHNlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlT2sgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHNldFZpc2libGVNb2RhbCh0cnVlKTtcbiAgfTtcbiAgY29uc3Qgc3VibWl0TmFtZSA9ICgpID0+IHtcbiAgICAvLyBob3cgdG8gbWFrZSBwb3AgdXAgd2luZG93IHRvIGVudGVyIG5ldyBuYW1lXG4gICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0JykudmFsdWU7XG4gICAgY29uc29sZS5sb2coJ2VkaXQnLCBlZGl0KTtcbiAgICBheGlvcy5wb3N0KCcvbXlSb3V0ZXIvc2VuZFNjb3JlJywge1xuICAgICAgbmFtZTogZWRpdCxcbiAgICAgIG51bWJlckNvcnJlY3Q6IHJ1bi5zdHJlYWssXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcbiAgY29uc3Qgc3VibWl0QW5zd2VyID0gKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0VmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bWJlclN1Ym1pdCcpLnZhbHVlO1xuICAgIGNvbnN0IGFuc3dlckNvcnJlY3QgPSAoaW5wdXRWYWwgPT0gcGFyc2VJbnQodHJpdmlhLm51bWJlciwgMTApKTtcbiAgICBpZiAoYW5zd2VyQ29ycmVjdCkge1xuICAgICAgY29uc3QgdGVtcFN0cmVhayA9IHBhcnNlSW50KHJ1bi5zdHJlYWspO1xuICAgICAgc2V0UnVuKHtcbiAgICAgICAgc3RyZWFrOiAoMSArIHRlbXBTdHJlYWspLFxuICAgICAgICBpbmNvcnJlY3Q6IHJ1bi5pbmNvcnJlY3QsXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZW1wSW5jb3JyZWN0ID0gcGFyc2VJbnQocnVuLmluY29ycmVjdCk7XG4gICAgICBzZXRSdW4oe1xuICAgICAgICBzdHJlYWs6IHJ1bi5zdHJlYWssXG4gICAgICAgIGluY29ycmVjdDogKDEgKyB0ZW1wSW5jb3JyZWN0KSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBzZXRBbnN3ZXJIaXN0b3J5KFt7XG4gICAgICBudW1iZXI6IHRyaXZpYS5udW1iZXIsXG4gICAgICBkZXNjcmlwdGlvbjogdHJpdmlhLnRleHQsXG4gICAgICBjb3JyZWN0OiBhbnN3ZXJDb3JyZWN0LFxuICAgICAgYW5zd2VyU3VibWl0dGVkOiBpbnB1dFZhbCxcbiAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICB9LCAuLi5hbnN3ZXJIaXN0b3J5XSk7XG4gICAgaWYgKHJ1bi5pbmNvcnJlY3QgPiAyKSB7XG4gICAgICAvLyBnYW1lIG92ZXJcbiAgICAgIC8vIGFuaW1hdGlvbnNcbiAgICAgIC8vIGVudGVyIHNjb3JlIGZvciBsZWFkZXJib2FyZFxuICAgICAgaGFuZGxlT2soKVxuICAgICAgLy8gc2VuZFNjb3JlKCk7XG4gICAgICBzZXRSdW4oe1xuICAgICAgICBzdHJlYWs6IDAsXG4gICAgICAgIGluY29ycmVjdDogMCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBncmFiVHJpdmlhKCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bWJlclN1Ym1pdCcpLnZhbHVlID0gJyc7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMz5RdWVzdGlvbjwvaDM+XG4gICAgICA8cD57dHJpdmlhLm51bWJlcn17dHJpdmlhLnRleHR9PC9wPlxuICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIgaWQ9XCJudW1iZXJTdWJtaXRcIiByZXF1aXJlZCAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdWJtaXRBbnN3ZXJ9IGlucHV0VHlwZT1cInJlc2V0XCI+RW50ZXI8L2J1dHRvbj5cbiAgICAgIDxwPmN1cnJlbnQgU3RyZWFrOnsgYCR7cnVuLnN0cmVha31gfTwvcD5cbiAgICAgIDxwPmluY29ycmVjdDoge2Ake3J1bi5pbmNvcnJlY3R9YH08L3A+XG4gICAgICA8dWw+XG4gICAgICAgIHthbnN3ZXJIaXN0b3J5Lm1hcChzdWJtaXR0ZWRBbnN3ZXIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHN1Ym1pdHRlZEFuc3dlcilcbiAgICAgICAgICByZXR1cm4gKDxsaSBrZXk9e3N1Ym1pdHRlZEFuc3dlci5pZH0+e2Ake3N1Ym1pdHRlZEFuc3dlci5jb3JyZWN0fWB9e2Ake3N1Ym1pdHRlZEFuc3dlci5kZXNjcmlwdGlvbn1gfTwvbGk+KVxuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NlbmRTY29yZX0+cG9zdCBjaGVjazwvYnV0dG9uPlxuICAgICAgPE1vZGFsIGZvb3Rlcj17bnVsbH0gcG9wdXAgYW5pbWF0aW9uVHlwZT1cInNsaWRlLXVwXCIgdGl0bGU9XCJQbGVhc2UgZW50ZXIgeW91ciBuYW1lOlwiIHZpc2libGU9e3Zpc2libGVNb2RhbH0gb25Paz17aGFuZGxlT2t9IG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9IHByaW1hcnk+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZWRpdFwiIHJlZj17KGlucHV0KSA9PiB7IGNvbnNvbGUubG9nKCdpbnB1dCcsIGlucHV0KTsgfX0gLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdWJtaXROYW1lfT5TdWJtaXQgTmFtZTwvYnV0dG9uPlxuICAgICAgPC9Nb2RhbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbjtcbi8vIHNldHVwIHNjb3JlIGtpbGwgcnVuIC9yZXNldFxuLy9uZWVkIHRvIGFkZCBoaWdoc2NvcmVcbi8vaW1wbGVtZW50IGRiXG4vL2NsZWFudXBcbi8vcG9wdXAgd2hlbiBzdHJlYWtzIG9mIDUgb3IgMTAgb3IgbXVsdGlwbGUgb3Igd2hhdGV2ZXIuIGZyb20gcmFuZG9tIGFzc29ydG1lbnQ/Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/Question.jsx\n");

/***/ })

})