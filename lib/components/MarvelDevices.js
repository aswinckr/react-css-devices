import React, { Component, defaultProps } from 'react';
import PropTypes from 'prop-types';
import '../css/marvel-devices.css'

const deviceContents = [
    "top-bar","sleep","volume","camera","sensor","speaker","screen","home","bottom-bar"
]

const availableDevices = [
    {
        deviceName: "iphone6",
        content: [...deviceContents]
    },
    {
        deviceName: "iphone6plus",
        content: [...deviceContents]
    },
    {
        deviceName: "iphone5s",
        content: [...deviceContents]
    },
    {
        deviceName: "iphone5c",
        content: [...deviceContents]
    },
    {
        deviceName: "ipad",
        content: ["camera","screen","home"]
    },
    {
        deviceName: "iphone4s",
        content: [...deviceContents]
    },
    {
        deviceName: "nexus5",
        content: ["top-bar","sleep","volume","camera","screen"]
    },
    {
        deviceName: "s5",
        content: ["top-bar","sleep","camera","sensor","speaker","screen","home"]
    },
    {
        deviceName: "htc-one",
        content: ["top-bar","camera","sensor","speaker","screen"]
    },
    {
        deviceName: "macbook",
        content: ["top-bar","camera","screen","bottom-bar"]
    }
]


class MarvelDevices extends Component {
    constructor(props){
        super(props)
        this.createDeviceDivs = this.createDeviceDivs.bind(this)
    }

    createDeviceDivs(device, children){
        const [ selectedDevice ] = availableDevices
            .filter(eachDevice => eachDevice.deviceName === device)
        const divs = selectedDevice.content.map((each, index) => (
            each==="screen"?(
                <div className={each}
                     key={index}
                     style={{overflow:'hidden'}}>
                    <div style={{position:'absolute'}}
                    // Absolute positioning attaches images from the left top corner
                    // Also removes the unnecessary deformation caused by margins of the child elements
                    >{children}</div>
                </div>):
                (
                    <div className={each} key={index}>
                    </div>
                )
            ))
        return (
            divs
        )
    }

    render(){
        const {
          deviceName,
          color,
          orientation,
          children,
          transform,
          ...other
        } = this.props;
        return(
            <div {...other}
                       className={`marvel-device
                       ${ deviceName }
                       ${ color }
                       ${ orientation }`}
                       style = {{ transform: 'scale(' + transform + ')' }} >
                {this.createDeviceDivs(deviceName, children)}
            </div>
        )
    }
}

Device.defaultProps = {
    deviceName: "macbook",
    color: "",
    orientation: "",
    transform: 1
}

Device.PropTypes = {
    deviceName: PropTypes.text,
    color: PropTypes.text,
    orientation: PropTypes.text,
    children: PropTypes.node,
    transform: PropTypes.number
}

export default MarvelDevices