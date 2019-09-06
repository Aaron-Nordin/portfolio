import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'gatsby';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import Scroll from '../components/Scroll';
import Gallery from '../components/Gallery';
import Lightbox from 'react-images';
import ModalImage from 'react-modal-image';

const ROW1_IMAGES = [
  {
    src: require('../assets/images/fulls/01.jpg'),
    thumbnail: require('../assets/images/thumbs/ReactIcon.png'),
    caption: 'React',
    iconName: 'React',
  },
  {
    src: require('../assets/images/fulls/02.jpg'),
    thumbnail: require('../assets/images/thumbs/ReduxIcon.png'),
    caption: 'Redux',
    iconName: 'Redux',
  },
  {
    src: require('../assets/images/fulls/03.jpg'),
    thumbnail: require('../assets/images/thumbs/node.png'),
    caption: 'Node.JS',
    iconName: 'Node.JS',
  },
  {
    src: require('../assets/images/fulls/04.jpg'),
    thumbnail: require('../assets/images/thumbs/express.png'),
    caption: 'Express',
    iconName: 'Express',
  },
];

const ROW2_IMAGES = [
  {
    src: require('../assets/images/fulls/05.jpg'),
    thumbnail: require('../assets/images/thumbs/html5.png'),
    caption: 'HTML5',
    iconName: 'HTML5',
  },
  {
    src: require('../assets/images/fulls/06.jpg'),
    thumbnail: require('../assets/images/thumbs/css-3.png'),
    caption: 'CSS3',
    iconName: 'CSS3',
  },
  {
    src: require('../assets/images/fulls/07.jpg'),
    thumbnail: require('../assets/images/thumbs/javascript.png'),
    caption: 'Javascript',
    iconName: 'Javascript',
  },
  {
    src: require('../assets/images/fulls/08.jpg'),
    thumbnail: require('../assets/images/thumbs/PostgreSQL.png'),
    caption: 'PostgreSQL',
    iconName: 'PostgreSQL',
  },
];

const ROW3_IMAGES = [
  {
    src: require('../assets/images/fulls/05.jpg'),
    thumbnail: require('../assets/images/thumbs/git.png'),
    caption: 'Git',
    iconName: 'Git',
  },
  {
    src: require('../assets/images/fulls/06.jpg'),
    thumbnail: require('../assets/images/thumbs/jest-test.png'),
    caption: 'Jest Test',
    iconName: 'Jest',
  },
  {
    src: require('../assets/images/fulls/07.jpg'),
    thumbnail: require('../assets/images/thumbs/d3.png'),
    caption: 'd3',
    iconName: 'd3',
  },
  {
    src: require('../assets/images/fulls/08.jpg'),
    thumbnail: require('../assets/images/thumbs/digOcean.png'),
    caption: 'DigitalOcean',
    iconName: 'DigitalOcean',
  },
];

const ROW4_IMAGES = [
  {
    src: require('../assets/images/fulls/05.jpg'),
    thumbnail: require('../assets/images/thumbs/csharp.png'),
    caption: 'C#',
    iconName: 'C#',
  },
  {
    src: require('../assets/images/fulls/06.jpg'),
    thumbnail: require('../assets/images/thumbs/heroku.png'),
    caption: 'Heroku',
    iconName: 'Heroku',
  },
  {
    src: require('../assets/images/fulls/07.jpg'),
    thumbnail: require('../assets/images/thumbs/Postman.png'),
    caption: 'Postman',
    iconName: 'Postman',
  },
  {
    src: require('../assets/images/fulls/08.jpg'),
    thumbnail: require('../assets/images/thumbs/cypress.png'),
    caption: 'Cypress',
    iconName: 'Cypress',
  },
];

const bikePic = require('../assets/images/thumbs/cypress.png');
function bikeFn() {
  return <ModalImage large={bikePic} small={bikePic} alt="dirtbike" />;
}

const IndexPage = () => (
  <Layout>
    <Header />

    <section
      id="banner"
      style={{
        boxShadow:
          '2px 2px 5px black, 1px 1px 3px black, 0px 0px 5px black, 0px 0px 10px black, 0px 0px 20px black, 0px 0px 30px black, 0px 0px 25px black, 0px 0px 15px black, 0px 0px 35px black, 0px 0px 40px black',
      }}
    >
      <header>
        <h2>About Aaron</h2>
      </header>
      <p>
        Aaron is a Microbiologist whose love of all things tiny turned him
        towards coding. <br />
        He also loves round things, mainly basketballs and things that are
        attached to wheels. <br />
      </p>
      <footer>
        <button
          href="#first"
          className="button style2 scrolly"
          style={{ fontSize: '1em' }}
          onClick={bikeFn}
        >
          Here is a picture of Aaron on a wheeled thing
        </button>
      </footer>
    </section>

    <article className="container box style2">
      <header
        style={{
          boxShadow:
            '2px 2px 5px black, 1px 1px 3px black, 0px 0px 5px black, 0px 0px 10px black, 0px 0px 20px black, 0px 0px 30px black, 0px 0px 25px black, 0px 0px 15px black, 0px 0px 35px black, 0px 0px 40px black',
        }}
      >
        <h2>Skills</h2>
        {/* <p>
          Justo phasellus et aenean dignissim
          <br />
          placerat cubilia purus lectus.
        </p> */}
      </header>
      <br />
      <br />
      <br />
      <br />
      <div
        className="inner gallery"
        style={{
          boxShadow:
            '2px 2px 5px black, 1px 1px 3px black, 0px 0px 5px black, 0px 0px 10px black, 0px 0px 20px black, 0px 0px 30px black, 0px 0px 25px black, 0px 0px 15px black, 0px 0px 35px black, 0px 0px 40px black',
          backgroundColor: 'rgb(225, 255, 225, 0.3)',
        }}
      >
        <Gallery
          images={ROW1_IMAGES.map(({ src, thumbnail, caption, iconName }) => ({
            src,
            thumbnail,
            caption,
            iconName,
          }))}
        />
        <Gallery
          images={ROW2_IMAGES.map(({ src, thumbnail, caption, iconName }) => ({
            src,
            thumbnail,
            caption,
            iconName,
          }))}
        />
        <Gallery
          images={ROW3_IMAGES.map(({ src, thumbnail, caption, iconName }) => ({
            src,
            thumbnail,
            caption,
            iconName,
          }))}
        />
        <Gallery
          images={ROW4_IMAGES.map(({ src, thumbnail, caption, iconName }) => ({
            src,
            thumbnail,
            caption,
            iconName,
          }))}
        />
      </div>
    </article>

    <article className="container box style2">
      <header
        style={{
          boxShadow:
            '2px 2px 5px black, 1px 1px 3px black, 0px 0px 5px black, 0px 0px 10px black, 0px 0px 20px black, 0px 0px 30px black, 0px 0px 25px black, 0px 0px 15px black, 0px 0px 35px black, 0px 0px 40px black',
        }}
      >
        <h2>Projects</h2>
        {/* <p>
          Justo phasellus et aenean dignissim
          <br />
          placerat cubilia purus lectus.
        </p> */}
      </header>
    </article>

    <article
      id="first"
      className="container box style1 right"
      style={{
        boxShadow:
          '2px 2px 5px black, 1px 1px 3px black, 0px 0px 5px black, 0px 0px 10px black, 0px 0px 20px black, 0px 0px 30px black, 0px 0px 25px black, 0px 0px 15px black, 0px 0px 35px black, 0px 0px 40px black',
      }}
    >
      <a href="/#" className="image fit">
        {/* <img src={pic1} alt="" /> */}
        <iframe
          src="https://gene-toolkit.com"
          frameborder="0"
          height="100%"
          width="100%"
          style={{ zoom: '0.5' }}
        ></iframe>
      </a>
      <div className="inner">
        <header>
          <br />
          <br />
          <h2>
            GeneToolkit
            {/* <br />
            dolor sit amet */}
          </h2>
        </header>
        <p>
          GeneToolkit is a platform for testing, exploring, and storing genetic
          sequences. To begin, users upload genes in either DNA or RNA format to
          their profile. These sequences can then be used in a variety of
          scientific assays, including transcription, translation, and sequence
          analysis. This project is literally award-winning!
        </p>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <a
            className="projectLink"
            href="https://github.com/Aaron-Nordin/genetic-toolset"
          >
            Github
          </a>
          <a className="projectLink" href="https://gene-toolkit.com">
            Live Site
          </a>
        </div>
        <br />
      </div>
    </article>

    <article
      className="container box style1 left"
      style={{
        boxShadow:
          '2px 2px 5px black, 1px 1px 3px black, 0px 0px 5px black, 0px 0px 10px black, 0px 0px 20px black, 0px 0px 30px black, 0px 0px 25px black, 0px 0px 15px black, 0px 0px 35px black, 0px 0px 40px black',
      }}
    >
      <a href="/#" className="image fit">
        <img src={pic2} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>
            Mollis posuere
            <br />
            lectus lacus
          </h2>
        </header>
        <p>
          Rhoncus mattis egestas sed fusce sodales rutrum et etiam ullamcorper.
          Etiam egestas scelerisque ac duis magna lorem ipsum dolor.
        </p>
      </div>
    </article>

    <article
      className="container box style3"
      style={{
        boxShadow:
          '2px 2px 5px black, 1px 1px 3px black, 0px 0px 5px black, 0px 0px 10px black, 0px 0px 20px black, 0px 0px 30px black, 0px 0px 25px black, 0px 0px 15px black, 0px 0px 35px black, 0px 0px 40px black',
      }}
    >
      <header>
        <h2>Contact Me</h2>
        <br />
        {/* <p>Diam dignissim lectus eu ornare volutpat orci.</p> */}
      </header>
      <form action="POST" data-netlify="true" name="contactForm">
        <div className="row gtr-50">
          <div className="col-6 col-12-mobile">
            <input
              type="text"
              className="text"
              name="name"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="col-6 col-12-mobile">
            <input
              type="text"
              className="text"
              name="email"
              id="email"
              placeholder="Your Email"
            />
            {/* <div className="col-6 col-12-mobile">
            </div> */}
          </div>
          <div data-netlify-recaptcha="true"></div>
          <div className="col-12">
            <textarea name="message" id="message" placeholder="Message" />
          </div>
          <div className="col-12">
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </div>
        </div>
      </form>
    </article>

    {/* <article className="container box style3">
      <header>
        <h2>Elements</h2>
        <p>This starter has other elements.</p>
        <br />
        Check it out
        <Link to="/Element"> here </Link>
      </header>
    </article> */}

    <Footer />
  </Layout>
);

export default IndexPage;
