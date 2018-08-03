require('dotenv').config();
const express=require('express');
const session=require('express-session');
const axios = require('axios');
const massive = require('massive')
const controller = require('./controller')
const bodyParser = require("body-parser")
const app = express();
const{SERVER_PORT , REACT_APP_DOMAIN , REACT_APP_CLIENT_ID , CLIENT_SECRET , SESSION_SECRET, CONNECTION_STRING} = process.env;

app.use(bodyParser.json())

app.use(session({
    secret: SESSION_SECRET,
    saveUninitialized: false,
    resave: false
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db',db)
})

app.get('/spotter/api/myloads/:id',controller.myLoads);
app.get('/spotter/api/uloads',controller.uLoads);
app.get('/spotter/api/myloads/:uid/:lid',controller.myLoadsSingle);
app.get('/spotter/api/dloads',controller.dLoads);
app.get('/spotter/api/adminloads',controller.adminLoads);

app.post('/spotter/api/newload',controller.newLoad);

app.put('/spotter/api/update/:id',controller.updateLoad);

app.delete('/spotter/api/delete/:id',controller.deleteLoad);

// app.get('/auth/callback', async (req,res)=>{
//     let payload={
//         client_id: REACT_APP_CLIENT_ID,
//         client_secret: CLIENT_SECRET,
//         code: req.query.code,
//         grant_type: 'authorization_code',
//         redirect_uri:`http://${req.headers.host}/auth/callback`
//     };

// let resWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`,payload);


// let resWithUserData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`)


//db calls 
// put user data on req.session object
// req.session ={}
// add in a user property with email, id, picture etc...=
// req.session.user = response database things, or.
//db always sends back arrays.

// const db = req.app.get('db');
// let {sub,name,email,picture} = resWithUserData.data
// let foundUser = await db.find_user([sub]);
// if (foundUser[0]){
//     // put them on the req.session object
//     req.session.user=foundUser[0];
//     res.redirect('/#/private')
// }
// else{
//     //create user, then put on req.session object.
// let createdUser = await db.create_user([name,email,sub,picture]);

// req.session.user = createdUser[0];
// res.redirect('/#/private')
// }
// });

// app.get('/api/user-data',(req,res)=>{
//     if(req.session.user){
//         res.status(200).send(req.session.user);
//         console.log('You are logged in')
//     }
//     else{
//         res.status(401).send('Nice try Sucka!');
//     }
// })

// app.get('/api/logout',(req,res)=>{
//     req.session.destroy();
//     res.redirect('http://localhost:3000/')
// })

app.listen(SERVER_PORT,()=>{
    console.log(`Wubstep Wubbeth on port: ${SERVER_PORT}`)
});