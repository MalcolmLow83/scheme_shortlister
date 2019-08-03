module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic, all paths are from routes.js
   * ===========================================
   */

   //===========================================

   //get home path
    let homeControllerCallback = (request, response) => {
      db.scheme.getAll1((error, result) => {          //goes to model,getAll function
        // console.log("From controller: " + result);
        const data = {
            schemes : result
        }
        // console.log(result);
        response.render('scheme/home', data);    //goes to views
      })
    };

    //===========================================

    //get home path
    let allControllerCallback = (request, response) => {
      db.scheme.getAll2((error, result) => {          //goes to model,getAll function
        // console.log("From controller: " + result);
        const data = {
            schemes : result
        }
        // console.log(result);
        response.render('scheme/all', data);    //goes to views
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
                            // console.log("From controller");
                            // console.log(result);
                            // console.log("Successful Registered");
                            response.cookie("userName", result[0].Name);
                            response.cookie("userDOB", request.body.birth_date);
                            response.cookie("userORD", request.body.ord_date);
                            response.cookie("userEducation", request.body.education);
                            response.cookie("userGradYear", request.body.grad_year);
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
                                    response.cookie("userName", result[0].name);
                                    response.cookie("userDOB", result[0].birth_date);
                                    response.cookie("userORD", result[0].ord_date);
                                    response.cookie("userEducation", result[0].education);
                                    response.cookie("userGradYear", result[0].grad_year);
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
        let getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime())/3.15576e+10);
        let age = getAge(request.cookies.userDOB);
        console.log("age");
        console.log(age);
        let ORD = getAge(request.cookies.userORD);

        let today = new Date();
        let currentYear = today.getFullYear();
        let grad_year = currentYear - request.cookies.userGradYear;
        console.log("grad_year");
        console.log(grad_year);
        // , request.cookies.userEducation, request.cookies.userGradYear, request.cookies.userEmployment, request.cookies.userExperience
        db.scheme.getUser(age, request.cookies.userEducation, (error, result) => {          //goes to model,getUser function
            if (error) {
                console.log(error)
            } else {
                // console.log("From controller: " + result);
                const data = {
                    schemes : result
                }
            response.render('scheme/user', data);  //goes to views
            }
        })
    };

    //===========================================

    //get user edit path
    let getUserEditControllerCallback = (request, response) => {
        db.scheme.getUserEdit(request.cookies.userId,(error, result) => {          //goes to model,getUser function
            if (error) {
                console.log(error)
            } else {
                // console.log("From controller: " + result);
                const data = {
                    schemes : result
                }
            response.render('scheme/userEdit', data);  //goes to views
            }
        })
    };

    //===========================================

    //post logout path
    let getLogoutControllerCallback = (request, response) => {
        response.clearCookie("userName");
        response.clearCookie("userDOB");
        response.clearCookie("userORD");
        response.clearCookie("userEducation");
        response.clearCookie("userGradYear");
        response.clearCookie("userEmployment");
        response.clearCookie("userExperience");
        response.redirect('/'); //redirect to routes, get home
    };

    //===========================================

    //get disclaimer path
    let getDisclaimerControllerCallback = (request, response) => {
        response.render('scheme/disclaimer'); //goes to views
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
    all: allControllerCallback,
    getRegister : getRegisterControllerCallback,
    postRegister : postRegisterControllerCallback,
    getLogin : getLoginControllerCallback,
    postLogin : postLoginControllerCallback,
    getUser : getUserControllerCallback,
    getUserEdit : getUserEditControllerCallback,
    getLogout : getLogoutControllerCallback,
    getDisclaimer : getDisclaimerControllerCallback,
    postTweet : postTweetControllerCallback
  };

}