# create-express-api

# Installation
This is a Node.js module available through the npm registry.
This Module will scaffold a basic REST API (Node-Express-Mongoose) for you.

Installation is done using the npm install command:

```bin
$ npm i @fridsn/create-express-api -g
```

# Usage
```bin
$ create-express-api new-project
$ cd new-project
$ npm start
```

# Structure

```
new-project
├── package.json
└── src
    ├── App.js
    ├── models
    │   └── User.js
    ├── modules
    │   └── users.module.js
    ├── routes
    │   └── users.router.js
    ├── server.js
    └── tools
        └── mongoose.js
```

```bin

$ cd new-project && npm start

```

# ENV

You can add variables to the Environment variables to get access to your DB
or just to save other stuff.

I used .dotenv for development.
Just add a ```.env``` file in your root project folder and store your variables in there.

```
API_PORT=$PORT
API_NAME=$API_NAME
MONGO_HOST=$MONGO_HOST
MONGO_PORT=$MONGO_PORT
MONGO_DB=$MONGO_DB
MONGO_USER=$MONGO_USER
MONGO_PASS=$MONGO_PASS
```


