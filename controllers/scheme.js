module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic, all paths are from routes.js
   * ===========================================
   */

   //===========================================

   //home path
    let homeControllerCallback = (request, response) => {
      db.scheme.getAll((error, result) => {          //goes to model,getAll function
        console.log("From controller: " + result);
        const data = {
            schemes : result
        }
        // console.log(result);
        response.render('scheme/home', data);    //goes to views
      })
    };

    //===========================================

    //get register path
    let getRegisterControllerCallback = (request, response) => {
        response.render('scheme/register');    //goes to views
    };

    //post register path
    let postRegisterControllerCallback = (request, response) => {
        //check user table if name have already been taken up
        db.scheme.checkName(request.body, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                // console.log(result);
                if (result != undefined) {
                    response.send("username have been taken up, click back and choose another user name.");
                } else {
                    db.scheme.postRegister(request.body, (error, result) => {    //goes to model, postRegister function
                        if (error) {
                            console.log(error);
                        } else {
                            // console.log("From controller: " + result);
                            // console.log("Successful Registered");
                            response.cookie("userEmployment", request.body.employment);
                            response.cookie("userExperience", request.body.experience);
                            response.redirect('/user');     //redirect to routes, user
                        }
                    })
                }
            }
        })
    };

    //===========================================

    //get login path
    let getLoginControllerCallback = (request, response) => {
        response.render('scheme/login'); //goes to views
    };

    //post login path
    let postLoginControllerCallback = (request, response) => {
        //check if user input wrong name or wrong password
        db.scheme.checkLogin(request.body, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                console.log(result);
                if (result === null) {
                    response.send("You have keyed in incorrect user name or password, click back and try again.");
                } else {
                    db.scheme.postLogin(request.body, (error, result) => {
                        if (error) {
                            console.log(error);
                        } else {
                            // console.log("Successful Login");
                            db.scheme.getUserLogin(request.body.name, (error, result) => {
                                if (error) {
                                    console.log(error);
                                } else {
                                    // console.log("From controller: " + result[0]);
                                    response.cookie("userEmployment", result[0].employment);
                                    response.cookie("userExperience", result[0].experience);
                                    response.redirect('/user'); //redirect to routes, get user
                                }
                            })
                        }
                    })
                }
            }
        })
    };

    //===========================================

    //get user path
    let getUserControllerCallback = (request, response) => {
        let values = [request.cookies.employment, request.cookies.experience];
        db.scheme.getUser(request.cookies.userEmployment, request.cookies.userExperience,(error, result) => {          //goes to model,getUser function
            console.log("From controller: " + result);
            const data = {
                schemes : result
            }
        response.render('scheme/user', data);  //goes to views
      })
    };

    //===========================================

    //post logout path
    let getLogoutControllerCallback = (request, response) => {
        response.clearCookie("userEmployment");
        response.clearCookie("userExperience");
        response.redirect('/'); //redirect to routes, get home
    };

    //===========================================

    //get new tweet path
    let getTweetControllerCallback = (request, response) => {
        console.log("getting new tweet");
        response.render('tweet/tweet'); //goes to views
    };

    //post new tweet path
    let postTweetControllerCallback = (request, response) => {
        console.log("posting new tweet");
        db.scheme.postTweet(request.body, (error, result) => {    //goes to model postNew function
            // console.log("From controller: " + result);
        })
        response.redirect('/user');  //redirect to routes, get home
    };

    //===========================================

// db.tweet refer tweet file in modal folder
// db.tweet."function" is the link to modal folder (example, "getAll")

// render will go to views folder
// redirect will be route path from routes.js





  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */

    // routes.js : function name above
  return {
    home: homeControllerCallback,
    getRegister : getRegisterControllerCallback,
    postRegister : postRegisterControllerCallback,
    getLogin : getLoginControllerCallback,
    postLogin : postLoginControllerCallback,
    getUser : getUserControllerCallback,
    getLogout : getLogoutControllerCallback,
    getTweet : getTweetControllerCallback,
    postTweet : postTweetControllerCallback
  };

}