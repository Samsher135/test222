const {
    jsonResponse
} = require("./commonController");
const jwt = require("jsonwebtoken");
const usersModule = require('../module/users');
const users = new usersModule();


module.exports = {
    register: async (req, res) => {
        try {
            console.log(req.body,"register")
            let [existingUser] = await Promise.all([users.signInWithEmail(req)])
            if(existingUser!=''){
                jsonResponse(res, "User Already Exists")
            }

            else {
                    let [results] = await Promise.all([users.register(req)])
                    let [results1] = await Promise.all([users.signInWithEmail(req)])
      
                    const id=results1[0]?.id;
                    const token = jwt.sign({email:results1[0].email, id:results1[0].id} , "secretkey" , {expiresIn:"30d"})
                    jsonResponse(res, "User Created", {token,id})
                }
        } catch (error) {
            console.log(error);
            jsonResponse(res, "error", error);
        };
    },
    submit_answer: async (req, res) => {
        try {
            req.body.id = (typeof (req.params.user_id) === 'undefined') ? 0 : req.params.user_id;
            // req.body.answers = {1:req.body.one,2:req.body.two}
            arr=[req.body.one,req.body.two];
            let [updated_answers] = await Promise.all([users.update_answers(arr,req)])
            jsonResponse(res, "sucess", updated_answers)
        } catch (error) {
            console.log(error);
            jsonResponse(res, "error", error);
        };
    },
}

const vari = toString()