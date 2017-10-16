1.  This is the source code for the auth-mern-client

2.  It is a companion program to the auth-mern-server
also available from my github account.

3.  It is a basic React, Redux, Bootstrap application,
that demonstrates interaction with a MERN server back end.

4.  The Single Page Application, SPA, demonstrated how to design and implement: a header section, a nav section, and footer section, surrounding a group of articles that are switched in and out dependent on the application route.  

5.  The action creators in actions/index.js show how to call server code to create a new user, login to an existing account, logout, and get authenticated data from a server using a JSON Web Token, JWT.  

6.  It calls the server to create a new mongo database, add form date to fields in the database, retrieve form data, as well as authenticated data.  

7.  The components/article_router.js component shows how to filter routing, so that the /users route won't respond unless the user is logged in.

8.  The configs/site_config_en.json used by containers/nav_menu.js shows how to define a menu in a config file that changes the menu system dependent on the user being logged in or not.

9.  The site_config.en.json can easily be reconfigured, paths added to article_router and new articles added to the containers/articles to easily introduce additional functionality to the site.  Please take a look at https://www.sweetlightstudios.com and it's open source also available from my github for ideas on additional articles for a full featured site.

10.  To run this SPA, first install node, npm, and mongo db and get mongo db running in a terminal window.

11.  Next, download and run the auth_mern_server companion program available on my github in it's own terminal window.  See its attached readme for additional information.

12.  Test it with Postman to verify it and the mongo db are working correctly.

13.  Clone this repo from Github to your local machine.

14.  Install its dependencies and start it up:
$ cd auth_mern_client
$ npm install
$ npm start

15.  This application will start up and launch itself into a browser window, giving you the basic login, create new account, logout, and display users functionality.  Notice how the menu options change for a logged in user as opposed to a non logged in user and how you need to be logged in to get the user list from the server.

16.  I would like to thank Joshua Slate and Stephen Grinder
for their inspiration for this single page application. 

[authentication api blog](http://blog.slatepeak.com/refactoring-a-basic-authenticated-api-with-node-express-and-mongo/)

[AdvancedReduxCode](https://github.com/StephenGrider/AdvancedReduxCode)

17.  I would also like to thank the great authors who created the libraries that this server depends on.  It stands on the shoulders of giants!

[Node js](https://github.com/nodejs)

[NPM](https://github.com/npm/npm)

[Mongo db](https://github.com/mongodb/mongo)

[mongoose](https://github.com/Automattic/mongoose)

[create-react-app](https://github.com/facebookincubator/create-react-app)

[react-router](https://github.com/ReactTraining/react-router) 

[axios](https://github.com/mzabriskie/axios)

[react-bootstrap](https://github.com/react-bootstrap/react-bootstrap)

[react-social-icons](https://github.com/jaketrent/react-social-icons)

Best wishes,
Robert Bourbonnais (b0ts)
