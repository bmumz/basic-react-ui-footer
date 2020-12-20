import React, { Component } from 'react';
import BasicFooter from './BasicFooter';
import './styles/styles.scss';

export default class App extends Component {
  render() {
    const pages = [
      {
        title: 'Company',
        pageList: [
          {
            name: 'About',
            link: '/about',
          },
          {
            name: 'Locations',
            link: '/careers',
          },

          {
            name: 'Careers',
            link: '/careers',
          },
        ],
      },
      {
        title: 'Legal',
        pageList: [
          {
            name: 'Privacy',
            link: '/privacy',
          },
          {
            name: 'Terms',
            link: '/terms',
          },
        ],
      },
      {
        title: 'Help Center',
        pageList: [
          {
            name: 'FAQ',
            link: '/faq',
          },
          {
            name: 'Return Policy',
            link: '/returnpolicy',
          },
        ],
      },
    ];
    console.log(pages);

    return (
      <div>
        <BasicFooter
          title="Company name"
          subtitle="Company slogan/brief about section, capped off at 20% vw to ensure it flows nicely"
          primaryFontColor="#eaeaea"
          secondaryFontColor="#dddddd"
          logo="https://i.ibb.co/r4C7pF2/logoipsum.png"
          copyright="Company name"
          copyrightColor="#aaaaaa"
          backgroundColor="#4b4a4a"
          pages={pages}
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
