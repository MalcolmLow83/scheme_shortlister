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
        let query = 'SELECT * FROM schemes ORDER BY id';
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
        let query = 'INSERT INTO users (name, password, employment, experience) VALUES ($1, $2, $3, $4) RETURNING *';
        let values = [value.name, value.password, value.employment, value.experience];
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

    let getUser = (value1, value2, callback) => {
        let query = 'SELECT * FROM schemes WHERE employment = ($1) AND EXPERIENCE <= ($2)';
        let values = [value1, value2];
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

    let getUser1 = (value, callback) => {
        let query = 'SELECT * FROM schemes WHERE name = ($1)';
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
    getUser1,
    postTweet
  };
};