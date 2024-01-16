const User = require('../../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')


module.exports = {
    create,
    login
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

function createJWT(user){
    return jwt.sign(
        {user},
        process.env.SECRET,
        {expiresIn: '24h'}
    )
}