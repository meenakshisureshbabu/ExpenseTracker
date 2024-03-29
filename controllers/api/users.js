const User = require('../../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const SALT_ROUNDS = 6


module.exports = {
    create,
    login,
    checktoken,
    resetpwd
}

async function create(req,res){
    try{
        const user = await User.create(req.body);
        console.log(user)
        const token = createJWT(user);
        console.log("TOKEN:::",token)
        res.json(token)
    }
    catch(err){
        console.log("here.....")
        res.status(400).json(err)
    }
}

//Restting the password
async function resetpwd(req,res){
    try{
        const hash = await bcrypt.hash(req.body.password,SALT_ROUNDS)
        const user = await User.updateOne({email:req.body.email},{$set:{password:hash}})
        //const token = createJWT(user);
        //console.log("TOKEN:::",token)
        res.json(user)
    }
    catch(err){
        //console.log("here.....")
        res.status(400).json(err)
    }
}


async function login(req,res){
try{
    const foundUser = await User.findOne({email:req.body.email});
    if(!foundUser) throw new Error;
    const match = await bcrypt.compare(req.body.password,foundUser.password)
    if(!match) throw new Error;
    const token = createJWT(foundUser);
    res.json(token)
}
catch(err){
    res.status(400).json(err)
}

}

function checktoken(req, res) {
    // req.user will always be there for you when a token is sent
    //console.log('req.user', req.user);
    res.json(req.exp);
  }

function createJWT(user){
    return jwt.sign(
        {user},
        process.env.SECRET,
        {expiresIn: '24h'}
    )
}