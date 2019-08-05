let today = new Date();
let currentYear = today.getFullYear();
function monthDiff(d1, d2) {
            var months;
            months = (d2.getFullYear() - d1.getFullYear()) * 12;
            months -= d1.getMonth() + 1;
            months += d2.getMonth();
            return months <= 0 ? 0 : months;
        };
let getYear = birthDate=>Math.floor((new Date()-new Date(birthDate).getTime())/3.15576e+10);

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
                            response.cookie("userId", result[0].id);
                            response.cookie("userName", request.body.name);
                            response.cookie("userAge", getYear(request.body.birth_date));
                            response.cookie("userORDMTH", monthDiff(result[0].ord_date, today));
                            response.cookie("userEducation", request.body.education);
                            response.cookie("userGradYear", currentYear - request.body.grad_year);
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
                                    response.cookie("userId", result[0].id);
                                    response.cookie("userName", result[0].name);
                                    response.cookie("userAge", getYear(result[0].birth_date));
                                    response.cookie("userORDMTH", monthDiff(result[0].ord_date, today));
                                    response.cookie("userEducation", result[0].education);
                                    response.cookie("userGradYear", currentYear - result[0].grad_year);
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
        db.scheme.getUser(request.cookies.userAge, request.cookies.userORDMTH, request.cookies.userEducation, request.cookies.userGradYear, request.cookies.userEmployment, request.cookies.userExperience, (error, result) => {          //goes to model,getUser function
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
        db.scheme.getUserEdit(request.cookies.userName,(error, result) => {          //goes to model,getUser function
            if (error) {
                console.log(error)
            } else {
                // console.log("From controller: " + result);
                const data = {
                    schemes : result[0]
                }
            // console.log("result");
            // console.log(result);
            response.render('scheme/userEdit', data);  //goes to views
            }
        })
    };

    //post user edit path
    let postUserEditControllerCallback = (request, response) => {
        console.log("request.cookies.userId");
        console.log(request.cookies.userId);
        db.scheme.postUserEdit(request.body, request.cookies.userId, (error, result) => {    //goes to model postNew function
            if (error) {
                console.log(error)
            } else {
                // console.log("From controller: " + result);
                response.cookie("userId", result[0].id);
                response.cookie("userName", result[0].name);
                response.cookie("userAge", getYear(result[0].birth_date));
                response.cookie("userORDMTH", monthDiff(result[0].ord_date, today));
                response.cookie("userEducation", result[0].education);
                response.cookie("userGradYear", currentYear - result[0].grad_year);
                response.cookie("userEmployment", result[0].employment);
                response.cookie("userExperience", result[0].experience);
                response.redirect('/user');  //redirect to routes, get home
            }
        })
    };

    //===========================================

    //post logout path
    let getLogoutControllerCallback = (request, response) => {
        response.clearCookie("userId");
        response.clearCookie("userName");
        response.clearCookie("userAge");
        response.clearCookie("userORDMTH");
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
    postUserEdit : postUserEditControllerCallback,
    getLogout : getLogoutControllerCallback,
    getDisclaimer : getDisclaimerControllerCallback,
  };

}