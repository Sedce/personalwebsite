var Sequelize = require('sequelize');
//connect database
var db = new Sequelize('postgres://postgres:12345@localhost:5432/webeng_sedce');
//creating the books books table
var Books = db.define('books',{
      link:{
              type: Sequelize.STRING,
      },
      title:{
              type: Sequelize.STRING
      },
      author:{
              type:Sequelize.STRING
      },
       createdAt: {
    type: Sequelize.DATE
},
updatedAt: {
    type: Sequelize.DATE
  }
 });
// var Messages = db.define('messages', {
//       email:{
//             type: Sequelize.STRING,
//             primaryKey: true
//       },
//       message: Sequelize.STRING
//     }, {
//         timestamps:true
// });
db.sync();
// module.exports.Messages = Messages;
module.exports.Books = Books;
