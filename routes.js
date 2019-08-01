module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

   // require the tweedr controller

    const schemeControllerCallbacks = require('./controllers/scheme')(allModels);

//user ====================================

    //get index path to display home page
    app.get('/', schemeControllerCallbacks.home);

    //get register path to display new register form
    app.get('/register/new', schemeControllerCallbacks.getRegister);

    //post register path redirect to user page
    app.post('/register', schemeControllerCallbacks.postRegister);



    //get login path to display login form
    app.get('/login/new', schemeControllerCallbacks.getLogin);

    //get login path redirect to user page
    app.post('/login', schemeControllerCallbacks.postLogin);

    //get login path to to display user page
    app.get('/user', schemeControllerCallbacks.getUser);

    //get logout path redirect to home page
    app.get('/logout', schemeControllerCallbacks.getLogout);

//tweets ==================================

    //get new tweet path to display new tweet form
    app.get('/tweet/new', schemeControllerCallbacks.getTweet);

    //post new tweet
    app.post('/tweet', schemeControllerCallbacks.postTweet);

//=========================================

//All paths will go to controllers/tweet.js

  // require the controller
  // const pokemonControllerCallbacks = require('./controllers/pokemon')(allModels);

  // app.get('/pokemons', pokemonControllerCallbacks.index);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};