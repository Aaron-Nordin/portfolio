import React from 'react';
import Scroll from './Scroll';
import config from '../../config';

export default function Header({ title, heading, avatar }) {
  return (
    <section id="header">
      <header>
        <h1
          style={{
            fontWeight: 'bold',
            textShadow:
              '2px 2px 5px black, 1px 1px 3px black, 0px 0px 5px black, 0px 0px 10px black, 0px 0px 20px black, 0px 0px 30px black, 0px 0px 25px black, 0px 0px 15px black, 0px 0px 35px black, 0px 0px 40px black',
          }}
        >
          {config.authorName}
        </h1>
        <p
          style={{
            fontWeight: 'bold',
            textShadow:
              '2px 2px 5px black, 1px 1px 3px black, 0px 0px 5px black, 0px 0px 10px black, 0px 0px 20px black, 0px 0px 30px black, 0px 0px 25px black, 0px 0px 15px black, 0px 0px 35px black, 0px 0px 40px black',
          }}
        >
          {config.heading}
        </p>
      </header>
      <footer>
        <Scroll type="id" element="banner">
          <a
            href="#banner"
            className="button style2 "
            style={{
              boxShadow:
                '2px 2px 5px black, 1px 1px 3px black, 0px 0px 5px black, 0px 0px 10px black, 0px 0px 20px black, 0px 0px 30px black, 0px 0px 25px black, 0px 0px 15px black, 0px 0px 35px black, 0px 0px 40px black',
            }}
          >
            Continue
          </a>
        </Scroll>
      </footer>
    </section>
  );
}
