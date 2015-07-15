# LIPS 

> local image placeholder service

## Install dependencies 
First download and install [GraphicsMagick](http://www.graphicsmagick.org/) or [ImageMagick](http://www.imagemagick.org/) and [Ghostscript](http://www.ghostscript.com/). In Mac OS X, you can simply use [Homebrew](http://mxcl.github.io/homebrew/) and do:

    brew install imagemagick
    brew install graphicsmagick
    brew install gs

If you want WebP support with ImageMagick, you must add the WebP option:

    brew install imagemagick --with-webp


## Clone this repository to your local machine

    git clone https://github.com/ifahrentholz/lips .


## Run npm:install to install the necessary node modules
 
    npm install
    
    
## Start the service

    npm start
    
    
## Open your Browser at <a href="http://localhost:3000/gen/800x800.png/fff/bada55" target="_blank">local-server</a>

    The url pattern is:
    http://localhost/gen/550x250.png?fg=bada55&bg=000000&text=this%20is%20sample%20text
    
    
## TODO's

* ~~Refactor - distinguish functions to separate files~~
* Create an Design
* Provide a home route with an introduction index page
* Write tests
* Setup Travis CI
* write an API
* Create a NPM package for easy inclusion in existing projects
* ...

