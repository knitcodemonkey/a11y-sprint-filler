// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes,
  Layout,
  Fill,
  Link,
  Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';
const images = {
  wheelchair: require('../../assets/backgrounds/access-wheelchair.jpg'),
  JenniferVan: require('../../assets/JenniferVan.jpg'),
}
preloader(images);

// Require CSS
require("normalize.css");
import styles from '../styles';

export default class Axe extends React.Component {
  render() {
    return (
      <Slide bgImage={images.wheelchair} bgDarken={0.7}>
        <Notes>
          <p>
            aXe by Deque
          </p>
        </Notes>
        <Heading
          size={2}
          textColor="dktertiary"
          style={{ textShadow: '1px 1px 6px #222' }}>aXe by Deque</Heading>
        <hr textfont="secondary" style={{width: '100%'}}/>
        <Text textColor="primary" style={[styles.largeText, styles.littleSpacePlease]}>
          aXe Browser Extensions
        </Text>
        <Text textColor="primary" style={[styles.largeText, styles.littleSpacePlease]}>
          Automated Functional Testing
        </Text>
        <Link
          textColor="dktertiary"
          style={[styles.smallText, styles.littleSpacePlease, {textAlign: 'center', width: '100%'}]}
          href="https://axe-core.org/"
        >~ aXe: The Accessibility Engine</Link>
      </Slide>
    );
  }
}
