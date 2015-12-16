# LIPS v1.1.0

> local image placeholder service

## Install dependencies
The LIPS service was rewritten and depends now on [GraphicsMagick](http://www.graphicsmagick.org/)

#### OSX

    brew install graphicsmagick
    
#### Ubuntu

    sudo add-apt-repository ppa:dhor/myway
    sudo apt-get update
    sudo apt-get install graphicsmagick
    
#### Windows (binary download)

    ftp://ftp.graphicsmagick.org/pub/GraphicsMagick/windows/

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

