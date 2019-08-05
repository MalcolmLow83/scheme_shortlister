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
        //backdate ord date to year 2000 for NS non-applicables
        let ord_date = '2001-02-02';
        if (value.ord_date = " ") {
            let query = 'INSERT INTO users (name, password, birth_date, ord_date, education, grad_year, employment, experience) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
            let values = [value.name, value.password, value.birth_date, ord_date, value.education, value.grad_year, value.employment, value.experience];
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
        } else {
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
        }
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
    let getUser = (value1, value2, value3, value4, value5, value6, callback) => {
        let query = 'SELECT * FROM schemes2 WHERE min_age<=$1 AND max_age>=$1 AND ord_mths >= $2 AND (education=$3 OR education=$4) AND grad_year>=$5 AND (employment=$6 OR employment=$7) AND experience<=$8';
        let values = [value1, value2, value3, 'all', value4, value5, 'all', value6];
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

    let postUserEdit = (value1, value2, callback) => {
        let query = 'UPDATE users SET name=$1, password=$2, birth_date=$3, ord_date=$4, education=$5, grad_year=$6, employment=$7, experience=$8 WHERE id = $9 RETURNING *';
        let values = [value1.name, value1.password, value1.birth_date, value1.ord_date, value1.education, value1.grad_year, value1.employment, value1.experience, value2];
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
    postUserEdit
  };
};