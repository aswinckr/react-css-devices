import React, { Component, defaultProps } from 'react';
import PropTypes from 'prop-types';

const deviceContents = [
  "top-bar","sleep","volume","camera","sensor","speaker","screen","home","bottom-bar"
];

const availableDevices = [
  {
    deviceName: "iphone6",
    content: [...deviceContents],
    width: 423,
    height: 887
  },
  {
    deviceName: "iphone6plus",
    content: [...deviceContents],
    width: 466,
    height: 960
  },
  {
    deviceName: "iphone5s",
    content: [...deviceContents],
    width: 364,
    height: 778
  },
  {
    deviceName: "iphone5c",
    content: [...deviceContents],
    width: 364,
    height: 778
  },
  {
    deviceName: "ipad",
    content: ["camera","screen","home"],
    width: 626,
    height: 948
  },
  {
    deviceName: "iphone4s",
    content: [...deviceContents],
    width: 374,
    height: 738
  },
  {
    deviceName: "nexus5",
    content: ["top-bar","sleep","volume","camera","screen"],
    width: 350,
    height: 668
  },
  {
    deviceName: "s5",
    content: ["top-bar","sleep","camera","sensor","speaker","screen","home"],
    width: 356,
    height: 668
  },
  {
    deviceName: "htc-one",
    content: ["top-bar","camera","sensor","speaker","screen"],
    width: 370,
    height: 740
  },
  {
    deviceName: "macbook",
    content: ["top-bar","camera","screen","bottom-bar"],
    width: 1048,
    height: 720
  }
];



class MarvelDevices extends Component {
  constructor(props){
    super(props);
    this.createDeviceDivs = this.createDeviceDivs.bind(this);
  }

  createDeviceDivs(props) {

    const {
      deviceName,
      color,
      orientation,
      children,
      transform,
    } = props;

    const [selectedDevice] = availableDevices
      .filter(eachDevice => eachDevice.deviceName === deviceName);

    const newDimension = (value) => (value * transform)

    //noinspection JSSuspiciousNameCombination
    const Div = (orientation!=="landscape")?{
      width: newDimension(selectedDevice.width),
      height: newDimension(selectedDevice.height)

    }:{
      width: newDimension(selectedDevice.height),
      height: newDimension(selectedDevice.width)
    };

    const divs = selectedDevice.content.map((each, index) => (
      each==="screen"?(
        <div
          className={each}
          key={index}
          style={{ overflow:'hidden' }}
        >
          <div
            style={{ position:'absolute' }}
          >{children}</div>
        </div>):
        (
          <div
            className={each}
            key={index}
          />
        )
    ));

    return (
      <div style={{ width: Div.width, height:Div.height }}>
        <div
          className={`marvel-device
                             ${ deviceName }
                             ${ color }
                             ${ orientation }`}
          style={{ transform: 'scale(' + transform + ')', transformOrigin: 'top left' }}
        >
          {divs}
        </div>
      </div>
    );
  }

  render(){
    return (
      <div className="marvel-device-wrapper">
        {this.createDeviceDivs(this.props)}
      </div>

    );
  }
}

MarvelDevices.defaultProps = {
  deviceName: "macbook",
  color: "",
  orientation: "",
  transform: 1
};

MarvelDevices.propTypes = {
  deviceName: PropTypes.string,
  color: PropTypes.string,
  orientation: PropTypes.string,
  children: PropTypes.node,
  transform: PropTypes.number
};

export default MarvelDevices;
