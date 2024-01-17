const User = require('../../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')


module.exports = {
    create,
    login,
    checktoken
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
    req.status(400).json(err)
}

}

function checktoken(req, res) {
    // req.user will always be there for you when a token is sent
    console.log('req.user', req.user);
    res.json(req.exp);
  }

function createJWT(user){
    return jwt.sign(
        {user},
        process.env.SECRET,
        {expiresIn: '24h'}
    )
}