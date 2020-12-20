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
          {title !== '' || undefined ? (
            <h3 style={{ color: primaryFontColor || '#fefefe' }}>{title}</h3>
          ) : (
            ''
          )}
          {subtitle !== '' || undefined ? (
            <p
              className="footer__info--subtitle"
              style={{ color: secondaryFontColor }}
            >
              {subtitle}
            </p>
          ) : (
            ''
          )}
        </div>
      </div>
    );

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

    const contact = (
      <div className="footer__contact">
        <h4 className="footer__pageTitle">Contact Us!</h4>
        <h4 className="footer__pageList">555-555-5555</h4>
        <h4 className="footer__pageList">Email: testing@test.com</h4>
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
            {linkedin !== undefined ? (
              <FontAwesomeIcon icon={faLinkedin} />
            ) : (
              ''
            )}
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

              {/* {socialMedia} */}

              <div className="footer__pages">
                {pages.map((page, index) => (
                  <div key={index} className="footer__pageListTest">
                    <h4 className="footer__pageTitle">{page.title}</h4>
                    {page.pageList.map((pageList, index) => (
                      <div key={index}>
                        <a
                          href={`${pageList.link}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <h4 className="footer__pageList">{pageList.name}</h4>
                        </a>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {contact}
            </div>
          )}

          <div className="footer__secondRow">
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
