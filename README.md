<h1>Basic React UI - Footer</h1>

<!-- PROJECT LOGO -->
<br />
<p >

  <p>
Part of a series of reusable React Components, to be available as npm packages! Basic React UI - Footer. Simply enter values in as props, and the rest is taken care of for you!
    <br />
    <a href="https://github.com/bmumz/basic-react-ui-footer/blob/master/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
  <!-->  <a href="https://you-go-girl.vercel.app">View Demo</a> -->
    ·
    <a href="https://github.com/bmumz/basic-react-ui-footer/issues">Report Bug</a>
    ·
    <a href="https://github.com/bmumz/basic-react-ui-footer/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]

#### Props You Can Specify

| PROP               | PROP-TYPE | DESCRIPTION                                                                                   |
| ------------------ | --------- | --------------------------------------------------------------------------------------------- |
| title              | `String`  | Required. Ideally business name/your name.                                                    |
| logo               | `String`  | Optional. Include image URL to your logo. Goes above title.                                   |
| subtitle           | `String`  | Optional. Brief description about yourself/business.                                          |
| phonenumber        | `String`  | Optional.                                                                                     |
| email              | `String`  | Optional.                                                                                     |
| primaryFontColor   | `String`  | Optional. Default is off-white                                                                |
| secondaryFontColor | `String`  | Optional. Default is slightly darker off-white.                                               |
| copyright          | `String`  | Required. Your name/business name.                                                            |
| copyrightColor     | `String`  | Optional. Default is a light grey.                                                            |
| backgroundColor    | `String`  | Optional. Default is mid-dark grey.                                                           |
| facebook           | `String`  | Optional. Link your Facebook profile!                                                         |
| github             | `String`  | Optional. Link your Github profile!                                                           |
| linkedin           | `String`  | Optional. Link your LinkedIn profile!                                                         |
| twitter            | `String`  | Optional. Link your Twitter profile.                                                          |
| angellist          | `String`  | Optional. Link your AngelList profile.                                                        |
| youtube            | `String`  | Optional. Link your Youtube profile.                                                          |
| iconSize           | `String`  | Optional. Default is 1.5rem.                                                                  |
| iconColor          | `String`  | Optional. Default is off-white. \*if you specify this, note that on hover effects won't work! |

#### Secondary Navigation Object (Optional)

Create a "pages" object in the component you are using <BasicFooter />, like this, for example:

```sh
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
```

| PROP          | PROP-TYPE | DESCRIPTION                                                                                          |
| ------------- | --------- | ---------------------------------------------------------------------------------------------------- |
| title         | `String`  | Required. A nav heading for each list of pages.                                                      |
| pageList      | `Array`   | Required. An array of objects with `name` and `link` for each page you'd like in your secondary nav. |
| pageList.name | `String`  | Required. Name of page.                                                                              |
| pageList.link | `String`  | Required. Link to page.                                                                              |

### Built With

- [React](https://reactjs.org/)
- [SASS](https://sass-lang.com/documentation/syntax)

<!-- GETTING STARTED -->

## Getting Started

### To run the project:

1. Clone the repo
   ```sh
   git clone https://github.com/bmumz/basic-react-ui-footer
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run npm start
   ```sh
   npm start
   ```

<!-- CONTRIBUTING -->

## Contributing

Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Your Name - [Portfolio](https://www.brandimummery.dev) - [LinkedIn](https://www.linkedin.com/in/brandimummery) [@brandiCodes on Twitter](https://twitter.com/brandiCodes) - brandimummery@gmail.com

<!-- Project Link: [https://github.com/bmumz/you-go-girl](https://github.com/bmumz/you-go-girl) -->

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Best-README-Template](https://github.com/othneildrew/Best-README-Template/blob/master/README.md)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: https://i.ibb.co/qnrGMQ0/Screen-Shot-2020-12-20-at-6-39-59-PM.png
