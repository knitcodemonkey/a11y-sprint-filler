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
  triad: require('../../assets/backgrounds/Triad_center_slc_utah.jpg'),
  desnews: require('../../assets/ddm-websites/deseretnews.com.png'),
}
preloader(images);

// Require CSS
require("normalize.css");
import styles from '../styles';

export default class OtherTools extends React.Component {
  render() {
    return (
      <Slide bgImage={images.triad} bgDarken={0.7}>
        <Notes>
          <p>
            Design-specific Tools
          </p>
        </Notes>

        <Heading
          size={2}
          textColor="primary"
          style={[styles.littleSpacePlease, { textShadow: '1px 1px 6px #222' }]}
        >Ksl.com</Heading>

        <Fill style={styles.littleSpacePlease}>
          <Image
            margin="0"
            src={images.desnews}
            style={{
              maxWidth: '100%',
              height: 'auto',
              boxShadow: '0px 0px' + ' 10px #222',
            }}
          />
        </Fill>

      </Slide>
    );
  }
}
