import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import templateObj from './templates';
import $ from 'jquery';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

document.getElementById('bannerPrev').innerHTML = templateObj.natBannerDesktop.template;