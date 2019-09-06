import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <section id="footer">
      <ul
        className="icons"
        style={{
          boxShadow:
            '2px 2px 5px black, 1px 1px 3px black, 0px 0px 5px black, 0px 0px 10px black, 0px 0px 20px black, 0px 0px 30px black, 0px 0px 25px black, 0px 0px 15px black, 0px 0px 35px black, 0px 0px 40px black',
        }}
      >
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={url}>
              <a
                href={url}
                className={`icon ${icon}`}
                style={{
                  textShadow:
                    '2px 2px 5px black, 1px 1px 3px black, 0px 0px 5px black, 0px 0px 10px black, 0px 0px 20px black, 0px 0px 30px black, 0px 0px 25px black, 0px 0px 15px black, 0px 0px 35px black, 0px 0px 40px black',
                }}
              >
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <div className="copyright">
        <ul className="menu">
          <li
            style={{
              textShadow:
                '2px 2px 5px black, 1px 1px 3px black, 0px 0px 5px black, 0px 0px 10px black, 0px 0px 20px black, 0px 0px 30px black, 0px 0px 25px black, 0px 0px 15px black, 0px 0px 35px black, 0px 0px 40px black',
            }}
          >
            &copy; Aaron Nordin. All rights reserved.
          </li>
        </ul>
      </div>
    </section>
  );
}
