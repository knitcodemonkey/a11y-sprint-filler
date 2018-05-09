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

export default class What extends React.Component {
  render() {
    return (
      <Slide bgImage={images.wheelchair} bgDarken={0.7}>
      <Notes>
        <p>
          What is A11y, anyway?
        </p>
        <p>
          When we think of Accessibility features, we focus
          too much on those whose experiences are permanent.
          Though it is important to remember them, they aren't
          the only ones who need those features.
        </p>
      </Notes>
      <Heading
        size={2}
        textColor="dktertiary"
        style={{ textShadow: '1px 1px 6px #222' }}
      >
        What is A11y?
      </Heading>

        <Heading caps textColor="primary" size={4}>A c c e s s i b i l i t y</Heading>
        <Heading textColor="primary" style={{fontSize: 60}}>A 1 2 3 4 5 6 7 8 9 10 11 Y</Heading>
      
    </Slide>
    );
  }
}
