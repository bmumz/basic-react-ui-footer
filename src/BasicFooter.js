import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faAngellist,
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export default class BasicFooterComponent extends Component {
  render() {
    let {
      title,
      subtitle,
      phoneNumber,
      email,
      primaryFontColor,
      secondaryFontColor,
      logo,
      pages,
      copyright,
      copyrightColor,
      backgroundColor,
      facebook,
      github,
      linkedin,
      twitter,
      angellist,
      youtube,
      iconSize,
      iconColor,
    } = this.props;

    const info = (
      <div className="footer__info">
        {logo !== undefined ? (
          <img src={logo} alt={title} className="footer__logo" />
        ) : (
          ''
        )}
        <div>
          {title !== undefined ? (
            <h3 style={{ color: primaryFontColor || '#fefefe' }}>{title}</h3>
          ) : (
            ''
          )}
          {subtitle !== undefined ? (
            <p
              className="footer__info--subtitle"
              style={{ color: secondaryFontColor || '#c4c4c4' }}
            >
              {subtitle}
            </p>
          ) : (
            ''
          )}
          <br />
          {phoneNumber !== undefined ? (
            <p style={{ color: secondaryFontColor || '#c4c4c4' }}>
              <FontAwesomeIcon icon={faMobileAlt} /> {phoneNumber}
            </p>
          ) : (
            ''
          )}

          {email !== undefined ? (
            <p style={{ color: secondaryFontColor || '#c4c4c4' }}>
              <FontAwesomeIcon icon={faEnvelopeOpen} /> {email}
            </p>
          ) : (
            ''
          )}
        </div>
      </div>
    );

    const socialMedia = (
      <div className="socialIcons" style={{ fontSize: iconSize }}>
        {facebook !== undefined ? (
          <a
            href={facebook}
            target="_blank"
            rel="noreferrer"
            className="socialIcon"
            style={{ color: iconColor }}
          >
            {' '}
            <FontAwesomeIcon icon={faFacebookSquare} />{' '}
          </a>
        ) : (
          ''
        )}

        {linkedin !== undefined ? (
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="socialIcon"
            style={{ color: iconColor }}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        ) : (
          ''
        )}

        {twitter !== undefined ? (
          <a
            href={twitter}
            target="_blank"
            rel="noreferrer"
            className="socialIcon"
            style={{ color: iconColor }}
          >
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
        ) : (
          ''
        )}

        {angellist !== undefined ? (
          <a
            href={angellist}
            target="_blank"
            rel="noreferrer"
            className="socialIcon"
            style={{ color: iconColor }}
          >
            <FontAwesomeIcon icon={faAngellist} />{' '}
          </a>
        ) : (
          ''
        )}

        {youtube !== undefined ? (
          <a
            href={youtube}
            target="_blank"
            rel="noreferrer"
            className="socialIcon"
            style={{ color: iconColor }}
          >
            {' '}
            <FontAwesomeIcon icon={faYoutubeSquare} />{' '}
          </a>
        ) : (
          ''
        )}

        {github !== undefined ? (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="socialIcon"
            style={{ color: iconColor }}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        ) : (
          ''
        )}
      </div>
    );

    return (
      <div className="test">
        <div
          className="footer"
          style={{
            backgroundColor: backgroundColor || '#737478',
          }}
        >
          {pages === undefined ? (
            <div className="footer__firstRow">{info}</div>
          ) : (
            <div className="footer__firstRow">
              {info}

              <div
                className="footer__pages"
                style={{ color: secondaryFontColor || '#e8e8e8' }}
              >
                {pages.map((page, index) => (
                  <div key={index} className="footer__pageList">
                    <h4 className="footer__pageTitle">{page.title}</h4>
                    {page.pageList.map((pageList, index) => (
                      <div key={index}>
                        <a
                          href={`${pageList.link}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <h4 className="footer__pageLink">{pageList.name}</h4>
                        </a>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="footer__secondRow">
            {socialMedia}
            <p style={{ color: copyrightColor }}>
              {' '}
              © {new Date().getFullYear()} {copyright}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

BasicFooterComponent.propTypes = {
  backgroundColor: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  phoneNumber: PropTypes.string,
  email: PropTypes.string,
  primaryFontColor: PropTypes.string,
  secondaryFontColor: PropTypes.string,
  logo: PropTypes.string,
  copyright: PropTypes.string,
  copyrightColor: PropTypes.string,
  iconSize: PropTypes.string,
  linkedin: PropTypes.string,
  twitter: PropTypes.string,
  github: PropTypes.string,
  facebook: PropTypes.string,
  angellist: PropTypes.string,
  youtube: PropTypes.string,
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      pageList: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          link: PropTypes.string,
        })
      ),
    })
  ),
};
