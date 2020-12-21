import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import BasicFooter from './BasicFooter';

ReactDOM.render(
  <React.StrictMode>
    <BasicFooter
      title="Company name"
      subtitle="Brief sentence or two about yourself/company.
          Maybe your city? Address? Where your shop is?"
      phoneNumber="555-555-5555"
      email="testing@test.com"
      primaryFontColor="#eaeaea"
      secondaryFontColor="#dddddd"
      logo="https://i.ibb.co/r4C7pF2/logoipsum.png"
      copyright="Company name"
      copyrightColor="#aaaaaa"
      backgroundColor="#4b4a4a"
      github="github.com"
      linkedin="linkedin.com"
      twitter="twitter.com"
      youtube="yt.com"
      facebook="fb.com"
      iconSize="1.5rem"
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
