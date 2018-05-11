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

export default class Checklists extends React.Component {
  render() {
    return (
      <Slide bgImage={images.wheelchair} bgDarken={0.7}>
        <Notes>
          <p>
            Design-specific Tools
          </p>
        </Notes>

        <Heading
          size={2}
          textColor="primary"
          style={{ textShadow: '1px 1px 6px #222' }}
        >Oh look! Checklists!</Heading>
        
        <hr textfont="secondary" style={{width: '100%'}}/>

        <Text textColor="primary" style={[styles.largeText, styles.littleSpacePlease]}>
          A11y Project:
        </Text>
        <Link
          textColor="dktertiary"
          style={[styles.standardText, {textAlign: 'center', width: '100%', display: 'block'}]}
          href="https://a11yproject.com/checklist.html"
        >Web Accessibility Checklist</Link>

        <Text style={[styles.largeText, styles.littleSpacePlease] }/>

        <Text textColor="primary" style={[styles.largeText, styles.littleSpacePlease]}>
          Elsevier:
        </Text>
        <Link
          textColor="dktertiary"
          style={[styles.standardText, {textAlign: 'center', width: '100%', display: 'block'}]}
          href="http://romeo.elsevier.com/accessibility_checklist/"
        >Web Content Accessibility Guidelines 2.0</Link>
      </Slide>
    );
  }
}
