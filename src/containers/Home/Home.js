import React, { Component } from 'react';
import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';
import './Home.less';
import logo from './logo.png';

export default class Home extends Component {
  render() {
    return (
      <div id="pageHome">
        <Scene>
          <Entity particle-system="preset: snow; particleCount: 10000" />
          <Entity particle-system="preset: default; color: #515; particleCount: 5000" position="0 0 -5" />
          <a-sky src="https://cdn.glitch.com/b870d9ec-1139-44f9-b462-223e4a2c74e7%2Fsechelt.jpg?1490307995926" radius="30" />
          <a-plane src="https://cdn.glitch.com/b870d9ec-1139-44f9-b462-223e4a2c74e7%2Ffloor.jpg?1490307896453" rotation="-90 0 0" height="100" width="100" />

          <Entity
            id="box"
            animation__rotate={{ property: 'rotation', dur: 4000, loop: true, to: '360 360 360' }}
            animation__scale={{ property: 'scale', dir: 'alternate', dur: 1000, loop: true, to: '1.1 1.1 1.1' }}
            position={{ x: 0, y: 1.5, z: -1 }}
          >
            <a-image src={logo} rotation="0" />
          </Entity>
          <a-text value="We are React Maker!" color="#fff" position="0 2.5 -2" align="center" />
        </Scene>
      </div>
    );
  }
}
