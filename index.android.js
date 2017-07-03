/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import MarvelApp from "./src/App";

export default class Marvel extends Component {
  render() {
    return (
      <MarvelApp/>
    );
  }
}

AppRegistry.registerComponent('Marvel', () => Marvel);
