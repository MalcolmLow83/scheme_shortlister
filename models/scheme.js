var sha256 = require('js-sha256');
const cookieParser = require('cookie-parser')
const secretWord = "this is JAVASCRIPT!";
/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  // ===========================================
  //home path

    let getAll = (callback) => {
        let query = 'SELECT * FROM schemes1 ORDER BY id';
        dbPoolInstance.query(query, (error, queryResult) => {
            if( error ){
                // invoke callback function with results after query has executed
                callback(error, null);
            } else {
                if(queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        })
    };

    // ===========================================

    let checkName = (value, callback) => {
        let query = 'SELECT * FROM users WHERE name = ($1)';
        let values = [value.name];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        })
    };

    // ===========================================

    let postRegister = (value, callback) => {
        let query = 'INSERT INTO users (name, password, education, grad_year, employment, experience) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
        let values = [value.name, value.password, value.education, value.grad_year, value.employment, value.experience];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if(error) {
                callback(error, null);
            } else {
                if(queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        })
    };

    // ===========================================

    let checkLogin = (value, callback) => {
        let query = 'SELECT * FROM users WHERE name = ($1) AND password = ($2)';
        let values = [value.name, value.password];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error) {
                console.log(error);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        })
    };

    // ===========================================

    let postLogin = (value, callback) => {
        let query = 'SELECT * FROM users WHERE name = ($1)';
        let values = [value.name];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error) {
                console.log(error);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        })
    };

    // ===========================================

    let getUser = (value1, value2, value3, value4, callback) => {
        let today = new Date();
        let year = today.getFullYear();
        let grad_year = year - value2;
        console.log("grad_year is: " + grad_year);
        let query = 'SELECT * FROM schemes2 WHERE (education = $1 OR education = $2) AND grad_year >= $3 AND (employment = $4 OR employment = $5) AND experience <= $6';
        let values = [value1, 'all', grad_year, value3, 'all', value4];
        dbPoolInstance.query(query, values,(error, queryResult) => {
            if (error) {
                console.log(error);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        })
    };

    // ===========================================

    let getUserLogin = (value, callback) => {
        let query = 'SELECT * FROM users WHERE name = ($1)';
        let values = [value];
        dbPoolInstance.query(query, values,(error, queryResult) => {
            if (error) {
                console.log(error);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        })
    };

    // ===========================================

    let postTweet = (value, callback) => {
        let query = 'INSERT INTO tweets (tweet, user_id) VALUES ($1, $2) RETURNING *';
        let values = [value.tweet, value.user_id];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if( error ){
                callback(error, null);
            } else {
                if(queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        })
    };

  // ===========================================
  //register path
  // ===========================================

  return {
    getAll,
    checkName,
    postRegister,
    checkLogin,
    postLogin,
    getUser,
    getUserLogin,
    postTweet
  };
};