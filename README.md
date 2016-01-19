[![Travis](https://img.shields.io/travis/ifahrentholz/lips.svg?style=flat-square)]()
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

[![npm](https://img.shields.io/npm/l/node-img-placeholder.svg?style=flat-square)]()
[![Dependency Status](https://www.versioneye.com/user/projects/569e1ecd2025a60031000402/badge.svg?style=flat)](https://www.versioneye.com/user/projects/569e1ecd2025a60031000402)
[![node](https://img.shields.io/node/v/node-img-placeholder.svg?style=flat-square)]()
[![npm](https://img.shields.io/npm/dt/node-img-placeholder.svg?style=flat-square)]()


# LIPS

> local image placeholder service

## Install dependencies
The LIPS service was rewritten and depends now on:
- [GraphicsMagick](http://www.graphicsmagick.org/)
- [Ghostscript](http://www.ghostscript.com/)


#### OSX

    brew install graphicsmagick
    brew install ghostscript

#### Ubuntu

    sudo add-apt-repository ppa:dhor/myway
    sudo apt-get update
    sudo apt-get install graphicsmagick
    sudo apt-get install ghostscript

#### Windows (binary downloads)

    ftp://ftp.graphicsmagick.org/pub/GraphicsMagick/windows/
    http://www.ghostscript.com/download/gsdnld.html

## Clone this repository to your local machine

    git clone https://github.com/ifahrentholz/lips .


## Run npm:install to install the necessary node modules

    npm install


## Start the service

    npm start


## Open your Browser at:

    http://localhost:3000/lips/800x600.png


## Configure the LIPS service to fit your needs:
    lib/config/app.js

> Settings

| setting | default | type | parameter
| --------| ------- | ---- | ----------|
| serviceName | lips | String | - |
| port | 3000 | Integer | - |
| env | development | String | - |
| delay | 0 | Integer | &delay=5000 |
| contentType | "png" | String | .png |
| maxAge | 3153600 | Integer | &maxAge=0 |
| expiryDate| new Date() | DateTime | &expiryDate=[DATETIME] |
| fontSize | 24px | String | &fontSize=12px |
| fontColor | 000000 | HEX | &fontColor=fff000 |
| text | - | String | &text=Hallo Welt |
| fill | 09F | HEX | &fill=bada55 |


## License
The MIT License (MIT)

Copyright (c) 2016 Ingo Fahrentholz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
