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
    
    
## Open your Browser at <a href="http://localhost:3000/gen/800x800.png/fff/bada55" target="_blank">local-server</a>

    The url pattern is:
    http://localhost:3000/gen/550x250.png?color=000000&bg=bada55&text=[Text]
    
    
## TODO's

* Provide a home route with an introduction index page

