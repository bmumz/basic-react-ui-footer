import React, { Component } from 'react';
import BasicFooter from './BasicFooter';
import './styles/styles.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <BasicFooter
          title="Logoipsum"
          subtitle="Made with ❤️ and JavaScript"
          primaryFontColor="#eaeaea"
          secondaryFontColor="#dddddd"
          logo="https://i.ibb.co/r4C7pF2/logoipsum.png"
          copyright="Brandi Mummery"
          copyrightColor="#aaaaaa"
          backgroundColor="#4b4a4a"
          github=""
          linkedin=""
          twitter=""
          angellist=""
          iconSize="2rem"
        />
      </div>
    );
  }
}
