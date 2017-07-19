react-css-devices
==================

React component for CSS Devices in your project.
*(NOTE: This project is still work in progress. Marvel Devices are however ready to use. More devices and customization coming soon.)*

Installation
------------
`npm install --save react-css-devices`

Props
-----
| Props  | Cool  | Prop Values |
| :------------- | :----- | :------ |
| `deviceName` *(String)*  | Name of the device | `iphone6`, `iphone6plus`, `iphone5s`, `iphone5c`, `ipad`, `iphone4s`, `nexus5`, `s5`, `htc-one`, `macbook`
| `color` *(String)*  |   Color ( only supported by `iphone5c` for now ) | `white`, `red`, `yellow`, `green`, `blue` 
| `orientation` *(String)*  | Landscape or portrait | `landscape`, `portrait` 

Examples
--------
To create a silver iphone in landscape you do 
```
<Device deviceName={"iphone6"}
         color={"silver"}
         orientation={"landscape"}>
    <img src={"http://placeholder.it/300*200"}/> //Any content here will be within bounds of the screen 
</Device>
```
Credits
-------
[Marvel devices](https://marvelapp.github.io/devices.css/)

Author
------
 Any suggestions / improvements / critics are welcome. I'm available on [@aswinckr](https://twitter.com/aswinckr) 


 
