# Nodejs
****startup project****
npm install --save body-parser dotenv ejs express
npm install --save-dev @babel/core @babel/preset-env @babel/node nodemon

#make file .babelrc
{
    "presets": [
        "@babel/preset-env"
    ]
}   

#insert into pakage.json
"start": "nodemon --exec ./node_modules/.bin/babel-node src/server.js"

you can change src/server.js 

****sequelize-mysql****
npm install --save-dev sequelize-cli
npm install --save mysql2
npm install --save sequelize

#make file .sequelizerc

const path = require('path');
module.exports = {
  'config': path.resolve('./src/config', 'config.json'),
  'migrations-path': path.resolve('./src', 'migrations'),
  'models-path': path.resolve('./src', 'models'),
  'seeders-path': path.resolve('./src', 'seeders')
}

#edit database name config/database

npx sequelize-cli init

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

npm install --save bcrypt
