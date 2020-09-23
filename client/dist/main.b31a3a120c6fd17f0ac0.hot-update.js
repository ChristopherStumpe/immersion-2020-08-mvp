webpackHotUpdate("main",{

/***/ "./client/src/components/Question.jsx":
/*!********************************************!*\
  !*** ./client/src/components/Question.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar Question = function Question(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      trivia = _useState2[0],\n      setTrivia = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    streak: 0,\n    incorrect: 0\n  }),\n      _useState4 = _slicedToArray(_useState3, 2),\n      run = _useState4[0],\n      setRun = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState6 = _slicedToArray(_useState5, 2),\n      visibleModal = _useState6[0],\n      setVisibleModal = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState8 = _slicedToArray(_useState7, 2),\n      answerHistory = _useState8[0],\n      setAnswerHistory = _useState8[1];\n\n  var grabTrivia = function grabTrivia() {\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/myRouter/question').then(function (response) {\n      console.log('response recieved', response.data);\n      setTrivia(response.data);\n    })[\"catch\"](function (error) {\n      console.log(error);\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    grabTrivia();\n  }, []);\n\n  var resetRun = function resetRun() {};\n\n  var sendScore = function sendScore() {\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/myRouter/sendScore', {\n      name: 'name1',\n      numberCorrect: 10\n    }).then(function (response) {\n      console.log(response);\n    })[\"catch\"](function (error) {\n      console.log(error);\n    });\n  };\n\n  var handleCancel = function handleCancel(e) {\n    console.log(e);\n    setVisibleModal(false);\n  };\n\n  var handleOk = function handleOk(e) {\n    console.log(e);\n    setVisibleModal(true);\n  };\n\n  var submitName = function submitName() {\n    // how to make pop up window to enter new name\n    var edit = document.getElementById('edit').value;\n    console.log('edit', edit);\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/myRouter/sendScore', {\n      name: edit,\n      numberCorrect: run.streak\n    }).then(function (response) {\n      console.log(response);\n    })[\"catch\"](function (error) {\n      console.log(error);\n    });\n  };\n\n  var submitAnswer = function submitAnswer() {\n    var inputVal = document.getElementById('numberSubmit').value;\n    var answerCorrect = inputVal == parseInt(trivia.number, 10);\n\n    if (answerCorrect) {\n      var tempStreak = parseInt(run.streak);\n      setRun({\n        streak: 1 + tempStreak,\n        incorrect: run.incorrect\n      });\n    } else {\n      var tempIncorrect = parseInt(run.incorrect);\n      setRun({\n        streak: run.streak,\n        incorrect: 1 + tempIncorrect\n      });\n    }\n\n    setAnswerHistory([{\n      number: trivia.number,\n      description: trivia.description,\n      correct: answerCorrect,\n      answerSubmitted: inputVal,\n      id: Object(uuid__WEBPACK_IMPORTED_MODULE_1__[\"v4\"])()\n    }].concat(_toConsumableArray(answerHistory)));\n\n    if (run.incorrect > 2) {\n      // game over\n      // animations\n      // enter score for leaderboard\n      handleOk(); // sendScore();\n\n      setRun({\n        streak: 0,\n        incorrect: 0\n      });\n    }\n\n    grabTrivia();\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Question\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, trivia.number, trivia.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"number\",\n    min: \"0\",\n    max: \"100\",\n    id: \"numberSubmit\",\n    required: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: submitAnswer,\n    inputType: \"reset\"\n  }, \"Enter\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"current Streak:\", \"\".concat(run.streak)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"incorrect: \", \"\".concat(run.incorrect)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, answerHistory.map(function (submittedAnswer) {\n    console.log(submittedAnswer);\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: submittedAnswer.id\n    }, \"\".concat(submittedAnswer.correct), submittedAnswer.description, \"test\");\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: sendScore\n  }, \"post check\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"Modal\"], {\n    footer: null,\n    popup: true,\n    animationType: \"slide-up\",\n    title: \"Please enter your name:\",\n    visible: visibleModal,\n    onOk: handleOk,\n    onCancel: handleCancel,\n    primary: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    id: \"edit\",\n    ref: function ref(input) {\n      console.log('input', input);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: submitName\n  }, \"Submit Name\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Question); // setup score kill run /reset\n//need to add highscore\n//implement db\n//cleanup\n//popup when streaks of 5 or 10 or multiple or whatever. from random assortment?//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUXVlc3Rpb24uanN4PzVmYTQiXSwibmFtZXMiOlsiUXVlc3Rpb24iLCJwcm9wcyIsInVzZVN0YXRlIiwidHJpdmlhIiwic2V0VHJpdmlhIiwic3RyZWFrIiwiaW5jb3JyZWN0IiwicnVuIiwic2V0UnVuIiwidmlzaWJsZU1vZGFsIiwic2V0VmlzaWJsZU1vZGFsIiwiYW5zd2VySGlzdG9yeSIsInNldEFuc3dlckhpc3RvcnkiLCJncmFiVHJpdmlhIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVycm9yIiwidXNlRWZmZWN0IiwicmVzZXRSdW4iLCJzZW5kU2NvcmUiLCJwb3N0IiwibmFtZSIsIm51bWJlckNvcnJlY3QiLCJoYW5kbGVDYW5jZWwiLCJlIiwiaGFuZGxlT2siLCJzdWJtaXROYW1lIiwiZWRpdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsInN1Ym1pdEFuc3dlciIsImlucHV0VmFsIiwiYW5zd2VyQ29ycmVjdCIsInBhcnNlSW50IiwibnVtYmVyIiwidGVtcFN0cmVhayIsInRlbXBJbmNvcnJlY3QiLCJkZXNjcmlwdGlvbiIsImNvcnJlY3QiLCJhbnN3ZXJTdWJtaXR0ZWQiLCJpZCIsInV1aWR2NCIsInRleHQiLCJtYXAiLCJzdWJtaXR0ZWRBbnN3ZXIiLCJpbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsa0JBQ0VDLHNEQUFRLENBQUMsRUFBRCxDQURWO0FBQUE7QUFBQSxNQUNuQkMsTUFEbUI7QUFBQSxNQUNYQyxTQURXOztBQUFBLG1CQUVKRixzREFBUSxDQUFDO0FBQzdCRyxVQUFNLEVBQUUsQ0FEcUI7QUFFN0JDLGFBQVMsRUFB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LEdBQUcsQ0FBQ0YsTUFBM0IsRUFMRixlQU1FLCtGQUFrQkUsR0FBRyxDQUFDRCxTQUF0QixFQU5GLGVBT0UsdUVBQ0dLLGFBQWEsQ0FBQ3NDLEdBQWQsQ0FBa0IsVUFBQUMsZUFBZSxFQUFJO0FBQ3BDaEMsV0FBTyxDQUFDQyxHQUFSLENBQVkrQixlQUFaO0FBQ0Esd0JBQVE7QUFBSSxTQUFHLEVBQUVBLGVBQWUsQ0FBQ0o7QUFBekIsaUJBQWlDSSxlQUFlLENBQUNOLE9BQWpELEdBQTRETSxlQUFlLENBQUNQLFdBQTVFLFNBQVI7QUFDRCxHQUhBLENBREgsQ0FQRixlQWFFO0FBQVEsV0FBTyxFQUFFbkI7QUFBakIsa0JBYkYsZUFjRSwyREFBQywwQ0FBRDtBQUFPLFVBQU0sRUFBRSxJQUFmO0FBQXFCLFNBQUssTUFBMUI7QUFBMkIsaUJBQWEsRUFBQyxVQUF6QztBQUFvRCxTQUFLLEVBQUMseUJBQTFEO0FBQW9GLFdBQU8sRUFBRWYsWUFBN0Y7QUFBMkcsUUFBSSxFQUFFcUIsUUFBakg7QUFBMkgsWUFBUSxFQUFFRixZQUFySTtBQUFtSixXQUFPO0FBQTFKLGtCQUNFO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsTUFBRSxFQUFDLE1BQXRCO0FBQTZCLE9BQUcsRUFBRSxhQUFDdUIsS0FBRCxFQUFXO0FBQUVqQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCZ0MsS0FBckI7QUFBOEI7QUFBN0UsSUFERixlQUVFO0FBQVEsV0FBTyxFQUFFcEI7QUFBakIsbUJBRkYsQ0FkRixDQURGO0FBcUJELENBcEhEOztBQXVIZS9CLHVFQUFmLEUsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY2xpZW50L3NyYy9jb21wb25lbnRzL1F1ZXN0aW9uLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge1xuICBNb2RhbCwgQnV0dG9uLCBSb3csIENvbCwgUG9wb3Zlcixcbn0gZnJvbSAnYW50ZCc7XG5cbmNvbnN0IFF1ZXN0aW9uID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFt0cml2aWEsIHNldFRyaXZpYV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtydW4sIHNldFJ1bl0gPSB1c2VTdGF0ZSh7XG4gICAgc3RyZWFrOiAwLFxuICAgIGluY29ycmVjdDogMCxcbiAgfSk7XG4gIGNvbnN0IFt2aXNpYmxlTW9kYWwsIHNldFZpc2libGVNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthbnN3ZXJIaXN0b3J5LCBzZXRBbnN3ZXJIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgZ3JhYlRyaXZpYSA9ICgpID0+IHtcbiAgICBheGlvcy5nZXQoJy9teVJvdXRlci9xdWVzdGlvbicpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlIHJlY2lldmVkJywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIHNldFRyaXZpYShyZXNwb25zZS5kYXRhKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ3JhYlRyaXZpYSgpO1xuICB9LCBbXSk7XG4gIGNvbnN0IHJlc2V0UnVuID0gKCkgPT4ge1xuXG4gIH1cbiAgY29uc3Qgc2VuZFNjb3JlID0gKCkgPT4ge1xuICAgIGF4aW9zLnBvc3QoJy9teVJvdXRlci9zZW5kU2NvcmUnLCB7XG4gICAgICBuYW1lOiAnbmFtZTEnLFxuICAgICAgbnVtYmVyQ29ycmVjdDogMTAsXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBzZXRWaXNpYmxlTW9kYWwoZmFsc2UpO1xuICB9O1xuICBjb25zdCBoYW5kbGVPayA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgc2V0VmlzaWJsZU1vZGFsKHRydWUpO1xuICB9O1xuICBjb25zdCBzdWJtaXROYW1lID0gKCkgPT4ge1xuICAgIC8vIGhvdyB0byBtYWtlIHBvcCB1cCB3aW5kb3cgdG8gZW50ZXIgbmV3IG5hbWVcbiAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQnKS52YWx1ZTtcbiAgICBjb25zb2xlLmxvZygnZWRpdCcsIGVkaXQpO1xuICAgIGF4aW9zLnBvc3QoJy9teVJvdXRlci9zZW5kU2NvcmUnLCB7XG4gICAgICBuYW1lOiBlZGl0LFxuICAgICAgbnVtYmVyQ29ycmVjdDogcnVuLnN0cmVhayxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICB9O1xuICBjb25zdCBzdWJtaXRBbnN3ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXRWYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtYmVyU3VibWl0JykudmFsdWU7XG4gICAgY29uc3QgYW5zd2VyQ29ycmVjdCA9IChpbnB1dFZhbCA9PSBwYXJzZUludCh0cml2aWEubnVtYmVyLCAxMCkpO1xuICAgIGlmIChhbnN3ZXJDb3JyZWN0KSB7XG4gICAgICBjb25zdCB0ZW1wU3RyZWFrID0gcGFyc2VJbnQocnVuLnN0cmVhayk7XG4gICAgICBzZXRSdW4oe1xuICAgICAgICBzdHJlYWs6ICgxICsgdGVtcFN0cmVhayksXG4gICAgICAgIGluY29ycmVjdDogcnVuLmluY29ycmVjdCxcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlbXBJbmNvcnJlY3QgPSBwYXJzZUludChydW4uaW5jb3JyZWN0KTtcbiAgICAgIHNldFJ1bih7XG4gICAgICAgIHN0cmVhazogcnVuLnN0cmVhayxcbiAgICAgICAgaW5jb3JyZWN0OiAoMSArIHRlbXBJbmNvcnJlY3QpLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHNldEFuc3dlckhpc3RvcnkoW3tcbiAgICAgIG51bWJlcjogdHJpdmlhLm51bWJlcixcbiAgICAgIGRlc2NyaXB0aW9uOiB0cml2aWEuZGVzY3JpcHRpb24sXG4gICAgICBjb3JyZWN0OiBhbnN3ZXJDb3JyZWN0LFxuICAgICAgYW5zd2VyU3VibWl0dGVkOiBpbnB1dFZhbCxcbiAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICB9LCAuLi5hbnN3ZXJIaXN0b3J5XSk7XG4gICAgaWYgKHJ1bi5pbmNvcnJlY3QgPiAyKSB7XG4gICAgICAvLyBnYW1lIG92ZXJcbiAgICAgIC8vIGFuaW1hdGlvbnNcbiAgICAgIC8vIGVudGVyIHNjb3JlIGZvciBsZWFkZXJib2FyZFxuICAgICAgaGFuZGxlT2soKVxuICAgICAgLy8gc2VuZFNjb3JlKCk7XG4gICAgICBzZXRSdW4oe1xuICAgICAgICBzdHJlYWs6IDAsXG4gICAgICAgIGluY29ycmVjdDogMCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBncmFiVHJpdmlhKCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMz5RdWVzdGlvbjwvaDM+XG4gICAgICA8cD57dHJpdmlhLm51bWJlcn17dHJpdmlhLnRleHR9PC9wPlxuICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIgaWQ9XCJudW1iZXJTdWJtaXRcIiByZXF1aXJlZCAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdWJtaXRBbnN3ZXJ9IGlucHV0VHlwZT1cInJlc2V0XCI+RW50ZXI8L2J1dHRvbj5cbiAgICAgIDxwPmN1cnJlbnQgU3RyZWFrOnsgYCR7cnVuLnN0cmVha31gfTwvcD5cbiAgICAgIDxwPmluY29ycmVjdDoge2Ake3J1bi5pbmNvcnJlY3R9YH08L3A+XG4gICAgICA8dWw+XG4gICAgICAgIHthbnN3ZXJIaXN0b3J5Lm1hcChzdWJtaXR0ZWRBbnN3ZXIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHN1Ym1pdHRlZEFuc3dlcilcbiAgICAgICAgICByZXR1cm4gKDxsaSBrZXk9e3N1Ym1pdHRlZEFuc3dlci5pZH0+e2Ake3N1Ym1pdHRlZEFuc3dlci5jb3JyZWN0fWB9e3N1Ym1pdHRlZEFuc3dlci5kZXNjcmlwdGlvbn10ZXN0PC9saT4pXG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICAgIDxidXR0b24gb25DbGljaz17c2VuZFNjb3JlfT5wb3N0IGNoZWNrPC9idXR0b24+XG4gICAgICA8TW9kYWwgZm9vdGVyPXtudWxsfSBwb3B1cCBhbmltYXRpb25UeXBlPVwic2xpZGUtdXBcIiB0aXRsZT1cIlBsZWFzZSBlbnRlciB5b3VyIG5hbWU6XCIgdmlzaWJsZT17dmlzaWJsZU1vZGFsfSBvbk9rPXtoYW5kbGVPa30gb25DYW5jZWw9e2hhbmRsZUNhbmNlbH0gcHJpbWFyeT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJlZGl0XCIgcmVmPXsoaW5wdXQpID0+IHsgY29uc29sZS5sb2coJ2lucHV0JywgaW5wdXQpOyB9fSAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N1Ym1pdE5hbWV9PlN1Ym1pdCBOYW1lPC9idXR0b24+XG4gICAgICA8L01vZGFsPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uO1xuLy8gc2V0dXAgc2NvcmUga2lsbCBydW4gL3Jlc2V0XG4vL25lZWQgdG8gYWRkIGhpZ2hzY29yZVxuLy9pbXBsZW1lbnQgZGJcbi8vY2xlYW51cFxuLy9wb3B1cCB3aGVuIHN0cmVha3Mgb2YgNSBvciAxMCBvciBtdWx0aXBsZSBvciB3aGF0ZXZlci4gZnJvbSByYW5kb20gYXNzb3J0bWVudD8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/Question.jsx\n");

/***/ })

})