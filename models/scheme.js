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

    let getAll1 = (callback) => {
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

    let getAll2 = (callback) => {
        let query = 'SELECT * FROM schemes2 ORDER BY id';
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
        let query = 'INSERT INTO users (name, password, birth_date, ord_date, education, grad_year, employment, experience) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
        let values = [value.name, value.password, value.birth_date, value.ord_date, value.education, value.grad_year, value.employment, value.experience];
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
        // let query = 'SELECT * FROM schemes2 WHERE min_age<=$1 AND max_age>=$2 AND (education=$3 OR education=all) AND grad_year>=$4 AND (employment=$5 OR employment=all) AND experience<=$6';
        let query = 'SELECT * FROM schemes2 WHERE min_age<=$1 AND max_age>=$1 AND (education=$2 OR education=$3)';
        let values = [value1, value2, 'all'];
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

    let getUserEdit = (value, callback) => {
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
    getAll1,
    getAll2,
    checkName,
    postRegister,
    checkLogin,
    postLogin,
    getUser,
    getUserLogin,
    getUserEdit,
    postTweet
  };
};