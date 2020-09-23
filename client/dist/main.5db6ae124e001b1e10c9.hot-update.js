webpackHotUpdate("main",{

/***/ "./client/src/components/HighScoreMapper.jsx":
/*!***************************************************!*\
  !*** ./client/src/components/HighScoreMapper.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n // import { UUIDV4 } from 'sequelize';\n// import { getItems } from '../services/items';\n// import List from './List.jsx';\n\nvar HighScoreMapper = function HighScoreMapper(props) {\n  // make this state\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      visibleModal = _useState2[0],\n      setVisibleModal = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([{\n    name: 'samplename',\n    numberCorrect: 0\n  }]),\n      _useState4 = _slicedToArray(_useState3, 2),\n      scores = _useState4[0],\n      setScores = _useState4[1];\n\n  var getHighScores = function getHighScores() {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('myRouter/highScores').then(function (res) {\n      console.log('res', res); // array of objects\n      // [\n      //   {\n      //     \"id\": 1,\n      //     \"name\": \"zlester\",\n      //     \"numberCorrect\": 2,\n      //     \"createdAt\": \"2020-09-23T05:01:56.000Z\",\n      //     \"updatedAt\": \"2020-09-23T05:01:56.000Z\"\n      // }\n      // ]\n\n      setScores(res.data);\n    })[\"catch\"](function (err) {\n      console.error(err);\n    });\n  }; // can do edit and delete in modal\n\n\n  var deleter = function deleter(id) {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('myRouter/delete', {\n      id: id\n    }); // how to tell which score was clicked? to pass that data?\n  };\n\n  var editName = function editName() {\n    // how to make pop up window to enter new name\n    var edit = document.getElementById('edit').value;\n    console.log('edit', edit);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    getHighScores();\n  }, []);\n\n  var handleOk = function handleOk(e) {\n    console.log(e);\n    setVisibleModal(true);\n  };\n\n  var handleCancel = function handleCancel(e) {\n    console.log(e);\n    setVisibleModal(false);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, scores.map(function (score) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: score.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, score.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, score.numberCorrect, \" Correct Answers!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      onClick: handleOk\n    }, \"edit\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Modal\"], {\n      footer: null,\n      align: \"middle\",\n      title: \"Edit High Score Name\",\n      visible: visibleModal,\n      onOk: handleOk,\n      onCancel: handleCancel,\n      primary: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      id: \"edit\",\n      ref: function ref(input) {\n        console.log('input', input);\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      onClick: editName\n    }, \"Submit Edit\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      onClick: function onClick() {\n        deleter(score.id);\n      }\n    }, \"Delete High Score\")));\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HighScoreMapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvSGlnaFNjb3JlTWFwcGVyLmpzeD8zYWViIl0sIm5hbWVzIjpbIkhpZ2hTY29yZU1hcHBlciIsInByb3BzIiwidXNlU3RhdGUiLCJ2aXNpYmxlTW9kYWwiLCJzZXRWaXNpYmxlTW9kYWwiLCJuYW1lIiwibnVtYmVyQ29ycmVjdCIsInNjb3JlcyIsInNldFNjb3JlcyIsImdldEhpZ2hTY29yZXMiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVyciIsImVycm9yIiwiZGVsZXRlciIsImlkIiwicG9zdCIsImVkaXROYW1lIiwiZWRpdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsInVzZUVmZmVjdCIsImhhbmRsZU9rIiwiZSIsImhhbmRsZUNhbmNlbCIsIm1hcCIsInNjb3JlIiwiaW5wdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FJQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDakM7QUFEaUMsa0JBRU9DLHNEQUFRLENBQUMsS0FBRCxDQUZmO0FBQUE7QUFBQSxNQUUxQkMsWUFGMEI7QUFBQSxNQUVaQyxlQUZZOztBQUFBLG1CQUdMRixzREFBUSxDQUFDLENBQUM7QUFBRUcsUUFBSSxFQUFFLFlBQVI7QUFBc0JDLGlCQUFhLEVBQUU7QUFBckMsR0FBRCxDQUFELENBSEg7QUFBQTtBQUFBLE1BRzFCQyxNQUgwQjtBQUFBLE1BR2xCQyxTQUhrQjs7QUFJakMsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCQyxnREFBSyxDQUFDQyxHQUFOLENBQVUscUJBQVYsRUFDR0MsSUFESCxDQUNRLFVBQUNDLEdBQUQsRUFBUztBQUNiQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CRixHQUFuQixFQURhLENBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FMLGVBQVMsQ0FBQ0ssR0FBRyxDQUFDRyxJQUFMLENBQVQ7QUFDRCxLQWRILFdBZVMsVUFBQ0MsR0FBRCxFQUFTO0FBQUVILGFBQU8sQ0FBQ0ksS0FBUixDQUFjRCxHQUFkO0FBQXFCLEtBZnpDO0FBZ0JELEdBakJELENBSmlDLENBc0JqQzs7O0FBQ0EsTUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsRUFBRCxFQUFRO0FBQ3RCVixnREFBSyxDQUFDVyxJQUFOLENBQVcsaUJBQVgsRUFBOEI7QUFBRUQsUUFBRSxFQUFGQTtBQUFGLEtBQTlCLEVBRHNCLENBRXRCO0FBQ0QsR0FIRDs7QUFJQSxNQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLEtBQTdDO0FBQ0FaLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JRLElBQXBCO0FBQ0QsR0FKRDs7QUFLQUkseURBQVMsQ0FBQyxZQUFNO0FBQ2RsQixpQkFBYTtBQUNkLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBR0EsTUFBTW1CLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBTztBQUN0QmYsV0FBTyxDQUFDQyxHQUFSLENBQVljLENBQVo7QUFDQXpCLG1CQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0QsR0FIRDs7QUFJQSxNQUFNMEIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0QsQ0FBRCxFQUFPO0FBQzFCZixXQUFPLENBQUNDLEdBQVIsQ0FBWWMsQ0FBWjtBQUNBekIsbUJBQWUsQ0FBQyxLQUFELENBQWY7QUFDRCxHQUhEOztBQUtBLHNCQUNFLHFGQUNFLHVFQUNHRyxNQUFNLENBQUN3QixHQUFQLENBQVcsVUFBQUMsS0FBSztBQUFBLHdCQUNmO0FBQUksU0FBRyxFQUFFQSxLQUFLLENBQUNaO0FBQWYsb0JBQ0UsdUVBQUtZLEtBQUssQ0FBQzNCLElBQVgsQ0FERixlQUVFLHVFQUFLMkIsS0FBSyxDQUFDMUIsYUFBWCxzQkFGRixlQUdFO0FBQVEsYUFBTyxFQUFFc0I7QUFBakIsY0FIRixlQUlFLDJEQUFDLDBDQUFEO0FBQU8sWUFBTSxFQUFFLElBQWY7QUFBcUIsV0FBSyxFQUFDLFFBQTNCO0FBQW9DLFdBQUssRUFBQyxzQkFBMUM7QUFBaUUsYUFBTyxFQUFFekIsWUFBMUU7QUFBd0YsVUFBSSxFQUFFeUIsUUFBOUY7QUFBd0csY0FBUSxFQUFFRSxZQUFsSDtBQUFnSSxhQUFPO0FBQXZJLG9CQUNFO0FBQU8sVUFBSSxFQUFDLE1BQVo7QUFBbUIsUUFBRSxFQUFDLE1BQXRCO0FBQTZCLFNBQUcsRUFBRSxhQUFDRyxLQUFELEVBQVc7QUFBRW5CLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJrQixLQUFyQjtBQUE4QjtBQUE3RSxNQURGLGVBRUU7QUFBUSxhQUFPLEVBQUVYO0FBQWpCLHFCQUZGLGVBR0U7QUFBUSxhQUFPLEVBQUUsbUJBQU07QUFBRUgsZUFBTyxDQUFDYSxLQUFLLENBQUNaLEVBQVAsQ0FBUDtBQUFvQjtBQUE3QywyQkFIRixDQUpGLENBRGU7QUFBQSxHQUFoQixDQURILENBREYsQ0FERjtBQWtCRCxDQTlERDs7QUFnRWVwQiw4RUFBZiIsImZpbGUiOiIuL2NsaWVudC9zcmMvY29tcG9uZW50cy9IaWdoU2NvcmVNYXBwZXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtcbiAgTW9kYWwsIEJ1dHRvbiwgUm93LCBDb2wsIFBvcG92ZXIsXG59IGZyb20gJ2FudGQnO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZCc7XG4vLyBpbXBvcnQgeyBVVUlEVjQgfSBmcm9tICdzZXF1ZWxpemUnO1xuXG4vLyBpbXBvcnQgeyBnZXRJdGVtcyB9IGZyb20gJy4uL3NlcnZpY2VzL2l0ZW1zJztcbi8vIGltcG9ydCBMaXN0IGZyb20gJy4vTGlzdC5qc3gnO1xuXG5jb25zdCBIaWdoU2NvcmVNYXBwZXIgPSAocHJvcHMpID0+IHtcbiAgLy8gbWFrZSB0aGlzIHN0YXRlXG4gIGNvbnN0IFt2aXNpYmxlTW9kYWwsIHNldFZpc2libGVNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzY29yZXMsIHNldFNjb3Jlc10gPSB1c2VTdGF0ZShbeyBuYW1lOiAnc2FtcGxlbmFtZScsIG51bWJlckNvcnJlY3Q6IDAgfV0pO1xuICBjb25zdCBnZXRIaWdoU2NvcmVzID0gKCkgPT4ge1xuICAgIGF4aW9zLmdldCgnbXlSb3V0ZXIvaGlnaFNjb3JlcycpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXMnLCByZXMpO1xuICAgICAgICAvLyBhcnJheSBvZiBvYmplY3RzXG4gICAgICAgIC8vIFtcbiAgICAgICAgLy8gICB7XG4gICAgICAgIC8vICAgICBcImlkXCI6IDEsXG4gICAgICAgIC8vICAgICBcIm5hbWVcIjogXCJ6bGVzdGVyXCIsXG4gICAgICAgIC8vICAgICBcIm51bWJlckNvcnJlY3RcIjogMixcbiAgICAgICAgLy8gICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyMC0wOS0yM1QwNTowMTo1Ni4wMDBaXCIsXG4gICAgICAgIC8vICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjAtMDktMjNUMDU6MDE6NTYuMDAwWlwiXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gXVxuICAgICAgICBzZXRTY29yZXMocmVzLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgfSk7XG4gIH07XG4gIC8vIGNhbiBkbyBlZGl0IGFuZCBkZWxldGUgaW4gbW9kYWxcbiAgY29uc3QgZGVsZXRlciA9IChpZCkgPT4ge1xuICAgIGF4aW9zLnBvc3QoJ215Um91dGVyL2RlbGV0ZScsIHsgaWQgfSk7XG4gICAgLy8gaG93IHRvIHRlbGwgd2hpY2ggc2NvcmUgd2FzIGNsaWNrZWQ/IHRvIHBhc3MgdGhhdCBkYXRhP1xuICB9O1xuICBjb25zdCBlZGl0TmFtZSA9ICgpID0+IHtcbiAgICAvLyBob3cgdG8gbWFrZSBwb3AgdXAgd2luZG93IHRvIGVudGVyIG5ldyBuYW1lXG4gICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0JykudmFsdWU7XG4gICAgY29uc29sZS5sb2coJ2VkaXQnLCBlZGl0KTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRIaWdoU2NvcmVzKCk7XG4gIH0sIFtdKTtcbiAgY29uc3QgaGFuZGxlT2sgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHNldFZpc2libGVNb2RhbCh0cnVlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBzZXRWaXNpYmxlTW9kYWwoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDx1bD5cbiAgICAgICAge3Njb3Jlcy5tYXAoc2NvcmUgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3Njb3JlLmlkfT5cbiAgICAgICAgICAgIDxoNT57c2NvcmUubmFtZX08L2g1PlxuICAgICAgICAgICAgPGg1PntzY29yZS5udW1iZXJDb3JyZWN0fSBDb3JyZWN0IEFuc3dlcnMhPC9oNT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlT2t9PmVkaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxNb2RhbCBmb290ZXI9e251bGx9IGFsaWduPVwibWlkZGxlXCIgdGl0bGU9XCJFZGl0IEhpZ2ggU2NvcmUgTmFtZVwiIHZpc2libGU9e3Zpc2libGVNb2RhbH0gb25Paz17aGFuZGxlT2t9IG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9IHByaW1hcnk+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZWRpdFwiIHJlZj17KGlucHV0KSA9PiB7IGNvbnNvbGUubG9nKCdpbnB1dCcsIGlucHV0KTsgfX0gLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtlZGl0TmFtZX0+U3VibWl0IEVkaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IGRlbGV0ZXIoc2NvcmUuaWQpOyB9fT5EZWxldGUgSGlnaCBTY29yZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIaWdoU2NvcmVNYXBwZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/HighScoreMapper.jsx\n");

/***/ }),

/***/ "./node_modules/asn1.js/lib/asn1.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/api.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/base/buffer.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/base/index.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/base/node.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/base/reporter.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/constants/der.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/constants/index.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/decoders/der.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/decoders/index.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/decoders/pem.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/encoders/der.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/encoders/index.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/encoders/pem.js":
false,

/***/ "./node_modules/asn1.js/node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/base64-js/index.js":
false,

/***/ "./node_modules/bignumber.js/bignumber.js":
false,

/***/ "./node_modules/bluebird/js/browser/bluebird.js":
false,

/***/ "./node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/brorand/index.js":
false,

/***/ "./node_modules/browserify-aes/aes.js":
false,

/***/ "./node_modules/browserify-aes/authCipher.js":
false,

/***/ "./node_modules/browserify-aes/browser.js":
false,

/***/ "./node_modules/browserify-aes/decrypter.js":
false,

/***/ "./node_modules/browserify-aes/encrypter.js":
false,

/***/ "./node_modules/browserify-aes/ghash.js":
false,

/***/ "./node_modules/browserify-aes/incr32.js":
false,

/***/ "./node_modules/browserify-aes/modes/cbc.js":
false,

/***/ "./node_modules/browserify-aes/modes/cfb.js":
false,

/***/ "./node_modules/browserify-aes/modes/cfb1.js":
false,

/***/ "./node_modules/browserify-aes/modes/cfb8.js":
false,

/***/ "./node_modules/browserify-aes/modes/ctr.js":
false,

/***/ "./node_modules/browserify-aes/modes/ecb.js":
false,

/***/ "./node_modules/browserify-aes/modes/index.js":
false,

/***/ "./node_modules/browserify-aes/modes/list.json":
false,

/***/ "./node_modules/browserify-aes/modes/ofb.js":
false,

/***/ "./node_modules/browserify-aes/streamCipher.js":
false,

/***/ "./node_modules/browserify-cipher/browser.js":
false,

/***/ "./node_modules/browserify-des/index.js":
false,

/***/ "./node_modules/browserify-des/modes.js":
false,

/***/ "./node_modules/browserify-rsa/index.js":
false,

/***/ "./node_modules/browserify-rsa/node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/browserify-sign/algos.js":
false,

/***/ "./node_modules/browserify-sign/browser/algorithms.json":
false,

/***/ "./node_modules/browserify-sign/browser/curves.json":
false,

/***/ "./node_modules/browserify-sign/browser/index.js":
false,

/***/ "./node_modules/browserify-sign/browser/sign.js":
false,

/***/ "./node_modules/browserify-sign/browser/verify.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/inherits/inherits_browser.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/errors-browser.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_duplex.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_passthrough.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_readable.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_transform.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_writable.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/async_iterator.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/buffer_list.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/destroy.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/end-of-stream.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/from-browser.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/pipeline.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/state.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/stream-browser.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/readable-browser.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/safe-buffer/index.js":
false,

/***/ "./node_modules/buffer-xor/index.js":
false,

/***/ "./node_modules/buffer/index.js":
false,

/***/ "./node_modules/cipher-base/index.js":
false,

/***/ "./node_modules/core-util-is/lib/util.js":
false,

/***/ "./node_modules/create-ecdh/browser.js":
false,

/***/ "./node_modules/create-ecdh/node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/create-hash/browser.js":
false,

/***/ "./node_modules/create-hash/md5.js":
false,

/***/ "./node_modules/create-hmac/browser.js":
false,

/***/ "./node_modules/create-hmac/legacy.js":
false,

/***/ "./node_modules/crypto-browserify/index.js":
false,

/***/ "./node_modules/depd/lib/browser/index.js":
false,

/***/ "./node_modules/des.js/lib/des.js":
false,

/***/ "./node_modules/des.js/lib/des/cbc.js":
false,

/***/ "./node_modules/des.js/lib/des/cipher.js":
false,

/***/ "./node_modules/des.js/lib/des/des.js":
false,

/***/ "./node_modules/des.js/lib/des/ede.js":
false,

/***/ "./node_modules/des.js/lib/des/utils.js":
false,

/***/ "./node_modules/diffie-hellman/browser.js":
false,

/***/ "./node_modules/diffie-hellman/lib/dh.js":
false,

/***/ "./node_modules/diffie-hellman/lib/generatePrime.js":
false,

/***/ "./node_modules/diffie-hellman/lib/primes.json":
false,

/***/ "./node_modules/diffie-hellman/node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/dottie/dottie.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/base.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/edwards.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/index.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/mont.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/short.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curves.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/ec/index.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/ec/key.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/ec/signature.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/eddsa/index.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/eddsa/key.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/eddsa/signature.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/precomputed/secp256k1.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/utils.js":
false,

/***/ "./node_modules/elliptic/node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/elliptic/package.json":
false,

/***/ "./node_modules/events/events.js":
false,

/***/ "./node_modules/evp_bytestokey/index.js":
false,

/***/ "./node_modules/generic-pool/lib/generic-pool.js":
false,

/***/ "./node_modules/hash-base/index.js":
false,

/***/ "./node_modules/hash-base/node_modules/inherits/inherits_browser.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/errors-browser.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/_stream_duplex.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/_stream_passthrough.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/_stream_readable.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/_stream_transform.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/_stream_writable.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/async_iterator.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/buffer_list.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/destroy.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/end-of-stream.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/from-browser.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/pipeline.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/state.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/stream-browser.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/readable-browser.js":
false,

/***/ "./node_modules/hash-base/node_modules/safe-buffer/index.js":
false,

/***/ "./node_modules/hash.js/lib/hash.js":
false,

/***/ "./node_modules/hash.js/lib/hash/common.js":
false,

/***/ "./node_modules/hash.js/lib/hash/hmac.js":
false,

/***/ "./node_modules/hash.js/lib/hash/ripemd.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/1.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/224.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/256.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/384.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/512.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/common.js":
false,

/***/ "./node_modules/hash.js/lib/hash/utils.js":
false,

/***/ "./node_modules/hmac-drbg/lib/hmac-drbg.js":
false,

/***/ "./node_modules/ieee754/index.js":
false,

/***/ "./node_modules/inflection/lib/inflection.js":
false,

/***/ "./node_modules/inherits/inherits_browser.js":
false,

/***/ "./node_modules/isarray/index.js":
false,

/***/ "./node_modules/lodash/lodash.js":
false,

/***/ "./node_modules/md5.js/index.js":
false,

/***/ "./node_modules/miller-rabin/lib/mr.js":
false,

/***/ "./node_modules/miller-rabin/node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/minimalistic-assert/index.js":
false,

/***/ "./node_modules/minimalistic-crypto-utils/lib/utils.js":
false,

/***/ "./node_modules/moment-timezone/data/packed/latest.json":
false,

/***/ "./node_modules/moment-timezone/index.js":
false,

/***/ "./node_modules/moment-timezone/moment-timezone.js":
false,

/***/ "./node_modules/ms/index.js":
false,

/***/ "./node_modules/mysql/index.js":
false,

/***/ "./node_modules/mysql/lib/Connection.js":
false,

/***/ "./node_modules/mysql/lib/ConnectionConfig.js":
false,

/***/ "./node_modules/mysql/lib/Pool.js":
false,

/***/ "./node_modules/mysql/lib/PoolCluster.js":
false,

/***/ "./node_modules/mysql/lib/PoolConfig.js":
false,

/***/ "./node_modules/mysql/lib/PoolConnection.js":
false,

/***/ "./node_modules/mysql/lib/PoolNamespace.js":
false,

/***/ "./node_modules/mysql/lib/PoolSelector.js":
false,

/***/ "./node_modules/mysql/lib/protocol/Auth.js":
false,

/***/ "./node_modules/mysql/lib/protocol/BufferList.js":
false,

/***/ "./node_modules/mysql/lib/protocol/PacketHeader.js":
false,

/***/ "./node_modules/mysql/lib/protocol/PacketWriter.js":
false,

/***/ "./node_modules/mysql/lib/protocol/Parser.js":
false,

/***/ "./node_modules/mysql/lib/protocol/Protocol.js":
false,

/***/ "./node_modules/mysql/lib/protocol/ResultSet.js":
false,

/***/ "./node_modules/mysql/lib/protocol/SqlString.js":
false,

/***/ "./node_modules/mysql/lib/protocol/Timer.js":
false,

/***/ "./node_modules/mysql/lib/protocol/constants/charsets.js":
false,

/***/ "./node_modules/mysql/lib/protocol/constants/client.js":
false,

/***/ "./node_modules/mysql/lib/protocol/constants/errors.js":
false,

/***/ "./node_modules/mysql/lib/protocol/constants/server_status.js":
false,

/***/ "./node_modules/mysql/lib/protocol/constants/ssl_profiles.js":
false,

/***/ "./node_modules/mysql/lib/protocol/constants/types.js":
false,

/***/ "./node_modules/mysql/lib/protocol/packets/AuthSwitchRequestPacket.js":
false,

/***/ "./node_modules/mysql/lib/protocol/packets/AuthSwitchResponsePacket.js":
false,

/***/ "./node_modules/mysql/lib/protocol/packets/ClientAuthenticationPacket.js":
false,

/***/ "./node_modules/mysql/lib/protocol/packets/ComChangeUserPacket.js":
false,

/***/ "./node_modules/mysql/lib/protocol/packets/ComPingPacket.js":
false,

/***/ "./node_modules/mysql/lib/protocol/packets/ComQueryPacket.js":
false,

/***/ "./node_modules/mysql/lib/protocol/packets/ComQuitPacket.js":
false,

/***/ "./node_modules/mysql/lib/protocol/packets/ComStatisticsPacket.js":
false,

/***/ "./node_modules/mysql/lib/protocol/packets/EmptyPacket.js":
false,

/***/ "./node_modules/mysql/lib/protocol/packets/EofPacket.js":
false,

/***/ "./node_modules/mysql/lib/protocol/packets/ErrorPacket.js":
false,

/***/ "./node_modules/mysql/lib/protocol/packets/Field.js":
false,

/***/ "./node_modules/mysql/lib/protocol/packets/FieldPacket.js":
false,

/***/ "./node_modules/mysql/lib/protocol/packets/HandshakeInitializationPacket.js":
false,

/***/ "./node_modules/mysql/lib/protocol/packets/LocalDataFilePacket.js":
false,

/***/ "./node_modules/mysql/lib/protocol/packets/LocalInfileRequestPacket.js":
false,

/***/ "./node_modules/mysql/lib/protocol/packets/OkPacket.js":
false,

/***/ "./node_modules/mysql/lib/protocol/packets/OldPasswordPacket.js":
false,

/***/ "./node_modules/mysql/lib/protocol/packets/ResultSetHeaderPacket.js":
false,

/***/ "./node_modules/mysql/lib/protocol/packets/RowDataPacket.js":
false,

/***/ "./node_modules/mysql/lib/protocol/packets/SSLRequestPacket.js":
false,

/***/ "./node_modules/mysql/lib/protocol/packets/StatisticsPacket.js":
false,

/***/ "./node_modules/mysql/lib/protocol/packets/UseOldPasswordPacket.js":
false,

/***/ "./node_modules/mysql/lib/protocol/packets/index.js":
false,

/***/ "./node_modules/mysql/lib/protocol/sequences/ChangeUser.js":
false,

/***/ "./node_modules/mysql/lib/protocol/sequences/Handshake.js":
false,

/***/ "./node_modules/mysql/lib/protocol/sequences/Ping.js":
false,

/***/ "./node_modules/mysql/lib/protocol/sequences/Query.js":
false,

/***/ "./node_modules/mysql/lib/protocol/sequences/Quit.js":
false,

/***/ "./node_modules/mysql/lib/protocol/sequences/Sequence.js":
false,

/***/ "./node_modules/mysql/lib/protocol/sequences/Statistics.js":
false,

/***/ "./node_modules/mysql/lib/protocol/sequences/index.js":
false,

/***/ "./node_modules/node-libs-browser/node_modules/punycode/punycode.js":
false,

/***/ "./node_modules/parse-asn1/aesid.json":
false,

/***/ "./node_modules/parse-asn1/asn1.js":
false,

/***/ "./node_modules/parse-asn1/certificate.js":
false,

/***/ "./node_modules/parse-asn1/fixProc.js":
false,

/***/ "./node_modules/parse-asn1/index.js":
false,

/***/ "./node_modules/path-browserify/index.js":
false,

/***/ "./node_modules/pbkdf2/browser.js":
false,

/***/ "./node_modules/pbkdf2/lib/async.js":
false,

/***/ "./node_modules/pbkdf2/lib/default-encoding.js":
false,

/***/ "./node_modules/pbkdf2/lib/precondition.js":
false,

/***/ "./node_modules/pbkdf2/lib/sync-browser.js":
false,

/***/ "./node_modules/pbkdf2/lib/to-buffer.js":
false,

/***/ "./node_modules/process-nextick-args/index.js":
false,

/***/ "./node_modules/public-encrypt/browser.js":
false,

/***/ "./node_modules/public-encrypt/mgf.js":
false,

/***/ "./node_modules/public-encrypt/node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/public-encrypt/privateDecrypt.js":
false,

/***/ "./node_modules/public-encrypt/publicEncrypt.js":
false,

/***/ "./node_modules/public-encrypt/withPublic.js":
false,

/***/ "./node_modules/public-encrypt/xor.js":
false,

/***/ "./node_modules/querystring-es3/decode.js":
false,

/***/ "./node_modules/querystring-es3/encode.js":
false,

/***/ "./node_modules/querystring-es3/index.js":
false,

/***/ "./node_modules/randombytes/browser.js":
false,

/***/ "./node_modules/randomfill/browser.js":
false,

/***/ "./node_modules/readable-stream/duplex-browser.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_duplex.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_passthrough.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_readable.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_transform.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_writable.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/BufferList.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/destroy.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/stream-browser.js":
false,

/***/ "./node_modules/readable-stream/passthrough.js":
false,

/***/ "./node_modules/readable-stream/readable-browser.js":
false,

/***/ "./node_modules/readable-stream/transform.js":
false,

/***/ "./node_modules/readable-stream/writable-browser.js":
false,

/***/ "./node_modules/retry-as-promised/index.js":
false,

/***/ "./node_modules/retry-as-promised/node_modules/debug/src/browser.js":
false,

/***/ "./node_modules/retry-as-promised/node_modules/debug/src/debug.js":
false,

/***/ "./node_modules/ripemd160/index.js":
false,

/***/ "./node_modules/safe-buffer/index.js":
false,

/***/ "./node_modules/safer-buffer/safer.js":
false,

/***/ "./node_modules/semver/semver.js":
false,

/***/ "./node_modules/sequelize/index.js":
false,

/***/ "./node_modules/sequelize/lib sync recursive":
false,

/***/ "./node_modules/sequelize/lib/associations/base.js":
false,

/***/ "./node_modules/sequelize/lib/associations/belongs-to-many.js":
false,

/***/ "./node_modules/sequelize/lib/associations/belongs-to.js":
false,

/***/ "./node_modules/sequelize/lib/associations/has-many.js":
false,

/***/ "./node_modules/sequelize/lib/associations/has-one.js":
false,

/***/ "./node_modules/sequelize/lib/associations/helpers.js":
false,

/***/ "./node_modules/sequelize/lib/associations/index.js":
false,

/***/ "./node_modules/sequelize/lib/associations/mixin.js":
false,

/***/ "./node_modules/sequelize/lib/data-types.js":
false,

/***/ "./node_modules/sequelize/lib/deferrable.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/abstract/connection-manager.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/abstract/index.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/abstract/query-generator.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/abstract/query.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/mariadb/index.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/mssql sync recursive":
false,

/***/ "./node_modules/sequelize/lib/dialects/mssql/connection-manager.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/mssql/data-types.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/mssql/index.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/mssql/query-generator.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/mssql/query-interface.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/mssql/query.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/mssql/resource-lock.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/mysql sync recursive":
false,

/***/ "./node_modules/sequelize/lib/dialects/mysql/connection-manager.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/mysql/data-types.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/mysql/index.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/mysql/query-generator.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/mysql/query-interface.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/mysql/query.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/parserStore.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/postgres sync recursive":
false,

/***/ "./node_modules/sequelize/lib/dialects/postgres/connection-manager.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/postgres/data-types.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/postgres/hstore.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/postgres/index.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/postgres/query-generator.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/postgres/query.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/postgres/range.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/sqlite sync recursive":
false,

/***/ "./node_modules/sequelize/lib/dialects/sqlite/connection-manager.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/sqlite/data-types.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/sqlite/index.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/sqlite/query-generator.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/sqlite/query-interface.js":
false,

/***/ "./node_modules/sequelize/lib/dialects/sqlite/query.js":
false,

/***/ "./node_modules/sequelize/lib/errors.js":
false,

/***/ "./node_modules/sequelize/lib/hooks.js":
false,

/***/ "./node_modules/sequelize/lib/instance-validator.js":
false,

/***/ "./node_modules/sequelize/lib/instance.js":
false,

/***/ "./node_modules/sequelize/lib/model-manager.js":
false,

/***/ "./node_modules/sequelize/lib/model.js":
false,

/***/ "./node_modules/sequelize/lib/plugins/counter-cache.js":
false,

/***/ "./node_modules/sequelize/lib/promise.js":
false,

/***/ "./node_modules/sequelize/lib/query-interface.js":
false,

/***/ "./node_modules/sequelize/lib/query-types.js":
false,

/***/ "./node_modules/sequelize/lib/sequelize.js":
false,

/***/ "./node_modules/sequelize/lib/sql-string.js":
false,

/***/ "./node_modules/sequelize/lib/transaction.js":
false,

/***/ "./node_modules/sequelize/lib/utils.js":
false,

/***/ "./node_modules/sequelize/lib/utils/parameter-validator.js":
false,

/***/ "./node_modules/sequelize/lib/utils/validator-extras.js":
false,

/***/ "./node_modules/sequelize/node_modules/uuid/index.js":
false,

/***/ "./node_modules/sequelize/node_modules/uuid/lib/bytesToUuid.js":
false,

/***/ "./node_modules/sequelize/node_modules/uuid/lib/rng-browser.js":
false,

/***/ "./node_modules/sequelize/node_modules/uuid/v1.js":
false,

/***/ "./node_modules/sequelize/node_modules/uuid/v4.js":
false,

/***/ "./node_modules/sequelize/package.json":
false,

/***/ "./node_modules/setimmediate/setImmediate.js":
false,

/***/ "./node_modules/sha.js/hash.js":
false,

/***/ "./node_modules/sha.js/index.js":
false,

/***/ "./node_modules/sha.js/sha.js":
false,

/***/ "./node_modules/sha.js/sha1.js":
false,

/***/ "./node_modules/sha.js/sha224.js":
false,

/***/ "./node_modules/sha.js/sha256.js":
false,

/***/ "./node_modules/sha.js/sha384.js":
false,

/***/ "./node_modules/sha.js/sha512.js":
false,

/***/ "./node_modules/shimmer/index.js":
false,

/***/ "./node_modules/sqlstring/index.js":
false,

/***/ "./node_modules/sqlstring/lib/SqlString.js":
false,

/***/ "./node_modules/stream-browserify/index.js":
false,

/***/ "./node_modules/string_decoder/lib/string_decoder.js":
false,

/***/ "./node_modules/terraformer-wkt-parser/terraformer-wkt-parser.js":
false,

/***/ "./node_modules/terraformer/terraformer.js":
false,

/***/ "./node_modules/timers-browserify/main.js":
false,

/***/ "./node_modules/toposort-class/build/toposort.js":
false,

/***/ "./node_modules/toposort-class/index.js":
false,

/***/ "./node_modules/url/url.js":
false,

/***/ "./node_modules/url/util.js":
false,

/***/ "./node_modules/util-deprecate/browser.js":
false,

/***/ "./node_modules/util/support/isBufferBrowser.js":
false,

/***/ "./node_modules/util/util.js":
false,

/***/ "./node_modules/validator/index.js":
false,

/***/ "./node_modules/validator/lib/alpha.js":
false,

/***/ "./node_modules/validator/lib/blacklist.js":
false,

/***/ "./node_modules/validator/lib/contains.js":
false,

/***/ "./node_modules/validator/lib/equals.js":
false,

/***/ "./node_modules/validator/lib/escape.js":
false,

/***/ "./node_modules/validator/lib/isAfter.js":
false,

/***/ "./node_modules/validator/lib/isAlpha.js":
false,

/***/ "./node_modules/validator/lib/isAlphanumeric.js":
false,

/***/ "./node_modules/validator/lib/isAscii.js":
false,

/***/ "./node_modules/validator/lib/isBase64.js":
false,

/***/ "./node_modules/validator/lib/isBefore.js":
false,

/***/ "./node_modules/validator/lib/isBoolean.js":
false,

/***/ "./node_modules/validator/lib/isByteLength.js":
false,

/***/ "./node_modules/validator/lib/isCreditCard.js":
false,

/***/ "./node_modules/validator/lib/isCurrency.js":
false,

/***/ "./node_modules/validator/lib/isDataURI.js":
false,

/***/ "./node_modules/validator/lib/isDate.js":
false,

/***/ "./node_modules/validator/lib/isDecimal.js":
false,

/***/ "./node_modules/validator/lib/isDivisibleBy.js":
false,

/***/ "./node_modules/validator/lib/isEmail.js":
false,

/***/ "./node_modules/validator/lib/isFQDN.js":
false,

/***/ "./node_modules/validator/lib/isFloat.js":
false,

/***/ "./node_modules/validator/lib/isFullWidth.js":
false,

/***/ "./node_modules/validator/lib/isHalfWidth.js":
false,

/***/ "./node_modules/validator/lib/isHexColor.js":
false,

/***/ "./node_modules/validator/lib/isHexadecimal.js":
false,

/***/ "./node_modules/validator/lib/isIP.js":
false,

/***/ "./node_modules/validator/lib/isISBN.js":
false,

/***/ "./node_modules/validator/lib/isISIN.js":
false,

/***/ "./node_modules/validator/lib/isISO8601.js":
false,

/***/ "./node_modules/validator/lib/isIn.js":
false,

/***/ "./node_modules/validator/lib/isInt.js":
false,

/***/ "./node_modules/validator/lib/isJSON.js":
false,

/***/ "./node_modules/validator/lib/isLength.js":
false,

/***/ "./node_modules/validator/lib/isLowercase.js":
false,

/***/ "./node_modules/validator/lib/isMACAddress.js":
false,

/***/ "./node_modules/validator/lib/isMD5.js":
false,

/***/ "./node_modules/validator/lib/isMobilePhone.js":
false,

/***/ "./node_modules/validator/lib/isMongoId.js":
false,

/***/ "./node_modules/validator/lib/isMultibyte.js":
false,

/***/ "./node_modules/validator/lib/isNull.js":
false,

/***/ "./node_modules/validator/lib/isNumeric.js":
false,

/***/ "./node_modules/validator/lib/isSurrogatePair.js":
false,

/***/ "./node_modules/validator/lib/isURL.js":
false,

/***/ "./node_modules/validator/lib/isUUID.js":
false,

/***/ "./node_modules/validator/lib/isUppercase.js":
false,

/***/ "./node_modules/validator/lib/isVariableWidth.js":
false,

/***/ "./node_modules/validator/lib/isWhitelisted.js":
false,

/***/ "./node_modules/validator/lib/ltrim.js":
false,

/***/ "./node_modules/validator/lib/matches.js":
false,

/***/ "./node_modules/validator/lib/normalizeEmail.js":
false,

/***/ "./node_modules/validator/lib/rtrim.js":
false,

/***/ "./node_modules/validator/lib/stripLow.js":
false,

/***/ "./node_modules/validator/lib/toBoolean.js":
false,

/***/ "./node_modules/validator/lib/toDate.js":
false,

/***/ "./node_modules/validator/lib/toFloat.js":
false,

/***/ "./node_modules/validator/lib/toInt.js":
false,

/***/ "./node_modules/validator/lib/trim.js":
false,

/***/ "./node_modules/validator/lib/unescape.js":
false,

/***/ "./node_modules/validator/lib/util/assertString.js":
false,

/***/ "./node_modules/validator/lib/util/merge.js":
false,

/***/ "./node_modules/validator/lib/util/toString.js":
false,

/***/ "./node_modules/validator/lib/whitelist.js":
false,

/***/ "./node_modules/wkx/lib/binaryreader.js":
false,

/***/ "./node_modules/wkx/lib/binarywriter.js":
false,

/***/ "./node_modules/wkx/lib/geometry.js":
false,

/***/ "./node_modules/wkx/lib/geometrycollection.js":
false,

/***/ "./node_modules/wkx/lib/linestring.js":
false,

/***/ "./node_modules/wkx/lib/multilinestring.js":
false,

/***/ "./node_modules/wkx/lib/multipoint.js":
false,

/***/ "./node_modules/wkx/lib/multipolygon.js":
false,

/***/ "./node_modules/wkx/lib/point.js":
false,

/***/ "./node_modules/wkx/lib/polygon.js":
false,

/***/ "./node_modules/wkx/lib/types.js":
false,

/***/ "./node_modules/wkx/lib/wktparser.js":
false,

/***/ "./node_modules/wkx/lib/wkx.js":
false,

/***/ "./node_modules/wkx/lib/zigzag.js":
false,

/***/ 0:
false,

/***/ 1:
false,

/***/ 10:
false,

/***/ 11:
false,

/***/ 12:
false,

/***/ 13:
false,

/***/ 14:
false,

/***/ 2:
false,

/***/ 3:
false,

/***/ 4:
false,

/***/ 5:
false,

/***/ 6:
false,

/***/ 7:
false,

/***/ 8:
false,

/***/ 9:
false

})