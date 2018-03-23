const firebase = require('firebase');

var config = {
    apiKey: "AIzaSyCXiX-gsjFRUK-XW44SSpEfsIuvXtBcFog",
    authDomain: "quikorder-2068b.firebaseapp.com",
    databaseURL: "https://quikorder-2068b.firebaseio.com",
    projectId: "quikorder-2068b",
    storageBucket: "quikorder-2068b.appspot.com",
    messagingSenderId: "220741936795"
  };

firebase.initializeApp(config);
const database = firebase.database();


// export default database;
module.exports = database;