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
import PropTypes from 'prop-types';

export default class BasicFooterComponent extends Component {
  render() {
    let {
      title,
      subtitle,
      primaryFontColor,
      secondaryFontColor,
      logo,
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

    const socialMedia = (
      <div className="socialIcons" style={{ fontSize: iconSize }}>
        <a
          href={facebook}
          target="_blank"
          rel="noreferrer"
          className="socialIcon"
          style={{ color: iconColor }}
        >
          {facebook !== undefined ? (
            <FontAwesomeIcon icon={faFacebookSquare} />
          ) : (
            ''
          )}
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="socialIcon"
          style={{ color: iconColor }}
        >
          {linkedin !== undefined ? <FontAwesomeIcon icon={faLinkedin} /> : ''}
        </a>
        <a
          href={twitter}
          target="_blank"
          rel="noreferrer"
          className="socialIcon"
          style={{ color: iconColor }}
        >
          {twitter !== undefined ? (
            <FontAwesomeIcon icon={faTwitterSquare} />
          ) : (
            ''
          )}
        </a>
        <a
          href={angellist}
          target="_blank"
          rel="noreferrer"
          className="socialIcon"
          style={{ color: iconColor }}
        >
          {angellist !== undefined ? (
            <FontAwesomeIcon icon={faAngellist} />
          ) : (
            ''
          )}
        </a>
        <a
          href={youtube}
          target="_blank"
          rel="noreferrer"
          className="socialIcon"
          style={{ color: iconColor }}
        >
          {youtube !== undefined ? (
            <FontAwesomeIcon icon={faYoutubeSquare} />
          ) : (
            ''
          )}
        </a>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="socialIcon"
          style={{ color: iconColor }}
        >
          {github !== undefined ? <FontAwesomeIcon icon={faGithub} /> : ''}
        </a>
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
          <div className="footer__firstRowAlt">
            {logo !== undefined ? (
              <img src={logo} alt={title} className="footer__logo" />
            ) : (
              ''
            )}
            {title !== '' || undefined ? (
              <h2 style={{ color: primaryFontColor || '#e5dcdd' }}>{title}</h2>
            ) : (
              ''
            )}
            {subtitle !== '' || undefined ? (
              <p style={{ color: secondaryFontColor }}>{subtitle}</p>
            ) : (
              ''
            )}
          </div>

          <div className="footer__secondRow">
            <p style={{ color: copyrightColor }}>
              {' '}
              © {new Date().getFullYear()} {copyright}
            </p>
            {socialMedia}
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
};
