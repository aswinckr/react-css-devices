/**
 * In this file, we create a React component
 */
import React, {Component} from 'react';
import Device from '../components/Device'

class Main extends Component {
  render() {
    return(
    <div>
        <Device deviceName={"iphone6"}
                color={""}
                orientation={""}>
        </Device>
    </div>
    )
  }
}

export default Main;
