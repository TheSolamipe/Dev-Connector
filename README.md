#DEVELOPERS CONNECTOR
This is a small social network for developers, we can look at profiles,login, create our own profile, add experiences, add education, add posts, comments, likes etc.

##SETTING UP SERVER
*using npm init, create and set server.js as our entry point.
*install all dependencies and dev-dependencies,you will find them in the package.json file. use npm install .....
\*require express, route to '/' and listen to port.

##CONNECT MONGOOSE TO OUR MONGODB
*create a config folder and a file called keys.js.
*export the URI copied from mlab.
\*import mongoose in server.js and require the URI
