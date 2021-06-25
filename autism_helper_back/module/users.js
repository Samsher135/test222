const mysqli = require('./users_mysqli');
const mysqliClass = new mysqli();

class Users {
    constructor() {}
    async register(req) {
        let mysql = {};
        let escape_data = [req.body.email,req.body.name, req.body.age , req.body.gender];
        let strQuery = await mysqliClass.mysqli(mysql, 'signup');
        return await global.mysql.query(strQuery, escape_data);
    }
    async update_answers(arr,req) {
        let mysql = {};
        let escape_data = [JSON.stringify(arr),req.body.id];
        let strQuery = await mysqliClass.mysqli(mysql, 'update_answers');
        return await global.mysql.query(strQuery, escape_data);
    }
}

module.exports = Users;

// const object = {'a': 1, 'b': 2, 'c' : 3};

// for (const [key, value] of Object.entries(object)) {
//   console.log(key, value);
// }