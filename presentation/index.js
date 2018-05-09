// Import React
import React from "react";
import { AboutMe, Formidable } from './aboutme';
import { Intro, Why, What } from './aboutA11y';


// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const themeColors = {
	primary: '#FAFAFA',
	secondary: '#191919',
	tertiary: '#981804',
	dktertiary: 'deepskyblue',
	quartenary: '#FAFAFA',
	faded: '#CCCCCC',
	background: 'linear-gradient(#F8FAFA, #D8DADA)',
};

const theme = createTheme(themeColors, {
	primary: 'Raleway',
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        {/* About Me Slides */}
        <AboutMe />
        <Formidable />

        {/* 5 W's of Accessibility */}
        <Intro />
        <Why />
        <What />
      </Deck>
    );
  }
}
