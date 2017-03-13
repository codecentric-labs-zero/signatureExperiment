/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SignatureCapture from 'react-native-signature-capture'
var SignaturePad = require('react-native-signature-pad');

export default class signature extends Component {
  render() {
      _signaturePadError = (error) => {
          console.error(error);
      };

      _signaturePadChange = ({base64DataUrl}) => {
          console.log("Got new signature: " + base64DataUrl);
      };
    return (
      <View style={{flex: 1}}>

        <SignaturePad onError={this._signaturePadError}
                      onChange={this._signaturePadChange}
                      style={{flex: 1, backgroundColor: 'white'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('signature', () => signature);
