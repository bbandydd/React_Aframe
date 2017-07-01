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
          <a-entity particle-system="preset: snow; particleCount: 10000" />
          <a-entity particle-system="preset: default; color: #515; particleCount: 1000" position="0 0 -5" />
          <a-sky src="https://cdn.glitch.com/b870d9ec-1139-44f9-b462-223e4a2c74e7%2Fsechelt.jpg?1490307995926" radius="30" />

          <a-box src="https://cdn.glitch.com/b870d9ec-1139-44f9-b462-223e4a2c74e7%2Ftexture.jpg?1490308149272" position="-2 0.5 4" />
          <a-sphere src="https://cdn.glitch.com/b870d9ec-1139-44f9-b462-223e4a2c74e7%2Fcubes.jpg?1490308405745" radius="0.5" position="0 0.5 3" />
          <a-cone src="https://cdn.glitch.com/b870d9ec-1139-44f9-b462-223e4a2c74e7%2Fcone.jpg?1490308535937" height="2" radius-top="0.1" position="0 1 6" />
          <a-box src="https://cdn.glitch.com/b870d9ec-1139-44f9-b462-223e4a2c74e7%2Fdirt.jpg?1490308269805" position="2 0.5 4" />

          <a-plane src="https://cdn.glitch.com/b870d9ec-1139-44f9-b462-223e4a2c74e7%2Ffloor.jpg?1490307896453" rotation="-90 0 0" height="100" width="100" />

          <a-light type="ambient" color="#666" />
          <a-light type="point" intensity="1" position="2 4 4" />
          <Entity
            id="box"
            animation__rotate={{ property: 'rotation', dur: 4000, loop: true, to: '360 360 360' }}
            animation__scale={{ property: 'scale', dir: 'alternate', dur: 1000, loop: true, to: '1.1 1.1 1.1' }}
            position={{ x: 0, y: 1.5, z: -1 }}
          >
            <a-image src={logo} rotation="0" />
          </Entity>
          <a-text value="Hello, React Maker!" color="#fff" position="0 2.5 -2" align="center" />
          <a-sky color="#ECECEC" />
        </Scene>
      </div>
    );
  }
}
