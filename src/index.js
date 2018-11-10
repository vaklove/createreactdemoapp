import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { Constant } from "./utils/constant";
import { initAskNicelySettings } from "./helpers/initAskNicelySettings";

initAskNicelySettings();

const loadScript = (src) => {
  let tag = document.createElement('script');
  tag.async = true;
  tag.src = src;
  console.log(document.getElementsByTagName('body'));
  document.getElementsByTagName('body')[0].appendChild(tag);
}

loadScript(Constant.webSurveyUrl);

ReactDOM.render(<App title="Relevant Persons"/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
