# Atecna - Test Developer Web Fullstack JS

# Demo
The project is hosted online using Heroku services 

Web: https://atecna-web-ahmed-ouali.herokuapp.com  
Api: https://atecna-api-ahmed-ouali.herokuapp.com

# Technologies
<img src="https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/230/formation-typescript.png" width="200" height="200" />
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width="200" height="150" />
<img src="https://miro.medium.com/max/365/1*Jr3NFSKTfQWRUyjblBSKeg.png" width="200" height="150" />



# Installation
<img src="https://user-images.githubusercontent.com/645641/79596653-38f81200-80e1-11ea-98cd-1c6a3bb5de51.png" width="200" height="200" />  

**File Structure**
```
root(lerna)
│   package.json  
└───packages
    └───front
    │       package.json
    └───server
            package.json

```

We have chosen to set up a monorepo project using [Lerna](https://github.com/lerna/lerna).    
You can launch the project by the following steps:

- npm install && lerna bootstrap
- npm run start-front (to start front(reactJs) application): http://localhost:3000
- npm run start-server (to start back(expressJs) application): http://localhost:3001


# UML sequence diagram

```mermaid
sequenceDiagram
Front(React) ->> NodeJs(Express): getGames() [http-get]
NodeJs(Express) ->> Twitch: getGames() [http-get]
Twitch -->> NodeJs(Express): Response
NodeJs(Express) -->> Front(React): Response

loop Realtime fetch viewers
NodeJs(Express) ->> Twitch: getViewers() [http-get]
Twitch -->> NodeJs(Express): Response
NodeJs(Express) ->>Front(React): pushViewrs() [socket]

Note right of Twitch : The process is repeated <br>at the rate of 800 <br> requests per minute.
end
```
# Documentation
- **[Front project documentation](https://gitlab.com/atecna/test-ouali-ahmed/-/blob/develop/packages/front/README.md)**  
- **[Api project documentation](https://gitlab.com/atecna/test-ouali-ahmed/-/blob/develop/packages/server/README.md)**
