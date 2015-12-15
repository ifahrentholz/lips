# LIPS v1.0.0

> local image placeholder service

## Install dependencies
The LIPS Service was rewritten and depends now on [Cairo](http://cairographics.org/)

OS | Command
----- | -----
OS X | `brew install pkg-config cairo libpng jpeg giflib`
Ubuntu | `sudo apt-get install libcairo2-dev libjpeg8-dev libpango1.0-dev libgif-dev build-essential g++`
Fedora | `sudo yum install cairo cairo-devel cairomm-devel libjpeg-turbo-devel pango pango-devel pangomm pangomm-devel giflib-devel`
Solaris | `pkgin install cairo pkg-config xproto renderproto kbproto xextproto`
Windows | [Instructions on this wiki](https://github.com/Automattic/node-canvas/wiki/Installation---Windows)

**El Capitan users:** If you have recently updated to El Capitan and are experiencing trouble when compiling, run the following command: `xcode-select --install`. Read more about the problem [on Stack Overflow](http://stackoverflow.com/a/32929012/148072).

## Clone this repository to your local machine

    git clone https://github.com/ifahrentholz/lips .


## Run npm:install to install the necessary node modules

    npm install


## Start the service

    npm start


## Open your Browser at:

    http://localhost:3000/lips/800x600.png


## Configure the LIPS service to fit your needs:
    lib/config/config.js

> App settings

| setting | default | type
| --------| ------- | ---- |
| serviceName | "lips" | Boolean |
| port | 3000 | Integer |
| env | development | String |


> Image settings

| setting | default | type | parameter |
| --------| ------- | ---- | ----------|
| font | Arial | String | &font=Arial |
| fontSize | 24px | String | &fontSize=12px |
| fontColor | 000000 | HEX | &fontColor=fff000 |
| text | true | Boolean | &text=false |
| fill | 09F | HEX | &fill=bada55 |

> Network settings

| setting | default | type | parameter |
| --------| ------- | ---- | ----------|
| delay | 0 | Integer | &delay=5000 |
| contentType | "png" | String | .png |
| maxAge | 3153600 | Integer | &maxAge=0 |
| expiryDate| new Date() | DateTime | &expiryDate=[DATETIME] |


## TODO's

* Provide a home route with an introduction index page
