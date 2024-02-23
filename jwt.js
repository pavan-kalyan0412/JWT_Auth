const express = require('express'); 
const app = express();
const dotenv = require('dotenv')
dotenv.config();

const jwt = require('jsonwebtoken');

const cookieparser = require('cookie-parser');
// require('dotenv').config();

const secretKey = process.env.JWT_SECRET_KEY;

app.use(cookieparser());

app.get("/login", (req, res) => {

//Login credentials are proper then sign a token

const token = jwt.sign({ "vikas": "systems" }, secretKey, { expiresIn: '10s' });
console.log(secretKey);
return res

.cookie("access_token", token, { 
    httpOnly: true
 })
     .status(200) 
     .json({ message: "Logged in success....." });

});

const authorization = (req, res, next) => { 
    const token = req.cookies.access_token; 
    if (!token) {
         return res.sendStatus(403);
         } 
         const data = jwt.verify(token, secretKey, (err, data) => {
             if (err) { 
                console.log(err) 
                return res.sendStatus(403);
             } else  { 
                console.log("WITH ACCESS TOKEN") 
                console.log(data);
next();
}
});
}

app.get('/protected', authorization, (req,res)=>{
    console.log('inside protected');
    res.json({message: "Authorized"});
});

app.get('/logout', authorization, (req,res)=>{
    return res
    .clearCookie('access_token')
    .status(200)
    .json({message:'successfully logged out'});
});

app.listen(3000,()=>{
    console.log("running at port:3000");
});
