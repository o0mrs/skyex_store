import { createRequire } from "module";
const require = createRequire(import.meta.url);
var https = require('https');
var http = require('https');
const express = require('express');
const { get } = require('http');
const app = express();
// var Ddos = require('ddos')
const PORT = process.env.PORT || 2000;
const cors = require('cors');
const mysql = require('mysql');
const fs = require('fs');
// var ddos = new Ddos({burst:300, limit:200})
import multer from 'multer'
import path from 'path';
import {fileURLToPath} from 'url';
// app.use(ddos.express);
const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);
const { promisify } = require('util')
const pipeline = promisify(require('stream').pipeline)
var privateKey  = fs.readFileSync('cret.key', 'utf8');
var certificate = fs.readFileSync('cert.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};

const { 
    v1: uuidv1,
    v4: uuidv4,
  } = require('uuid');
app.use(express.json());
app.use(cors({
    "Access-Control-Allow-Headers": "Origin"
}))

const db = mysql.createPool({
    user: "omar",
    host: "localhost",
    password: "*Onepeesosaaa2#",
    database: "omrseu_projects",
    charset: "utf8mb4",
})
let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();
const cur_time = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds
var dir = path.join(__dirname, 'public');
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.send('Welcome to Astatine Api maybe You meant https://astatine.tk');
  console.log(cur_time);
});
// paypal web hook
app.post("/payhook", (req, res) => {
    res.status(200).end()



// db.query('SELECT Client_id FROM STORE_payment;')



paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'Aa8o2-2vdQuS8pBEuIcfj2564XJAPlCAJ4LLbkTfzhqmCv1bH-hl4SUZGsSOPHSPSnwF8OS29hBOXRvz',
    'client_secret': 'EFszc8FWvRquVjqyZUig4W_gPnudXlEYeGOWPV1RqzaoRpoHmRDM9HMTl2mT8Y6muAKSA6SToZlGxkS2'
  });
    console.log('verfing')
var certURL = req.headers['paypal-cert-url']
var transmissionId = req.headers['paypal-transmission-id']
var transmissionSignature = req.headers['paypal-transmission-sig']
var transmissionTimestamp = req.headers['paypal-transmission-time']
var headers = {
    'paypal-auth-algo': 'SHA256withRSA',
    'paypal-cert-url': certURL,
    'paypal-transmission-id': transmissionId,
    'paypal-transmission-sig': transmissionSignature,
    'paypal-transmission-time': transmissionTimestamp
};

var eventBody = JSON.stringify(req.body)
var webhookId = "6PP86298AF2306244";
paypal.notification.webhookEvent.verify(headers, eventBody, webhookId, function (error, response) {
    if (error) {
        console.log(error);
        throw error;
    } else {
        // console.log(response);       
        

        // Verification status must be SUCCESS
        if (response.verification_status === "SUCCESS") {
            console.log("It was a success.");
            // console.log(req.body)
            // event_type: 'CHECKOUT.ORDER.APPROVED',resource.id , resource.payer.name(obj) , resource.payer.email_address,resource.payer.payer_id, resource.payer.address(obj)


            // event_type: 'PAYMENT.CAPTURE.COMPLETED',req.body.resource.supplementary_data.related_ids.order_id,req.body.resource.amount.value,req.body.resource.amount.currency_code

            console.log(req.body.event_type)

            if(req.body.event_type == 'CHECKOUT.ORDER.APPROVED'){
                console.log(req.body.resource.id)
                // console.log(req.body.resource.payer.name)
                // console.log(req.body.resource.payer.email_address)
                // console.log(req.body.resource.payer.payer_id)
                // console.log(req.body.resource.payer.address)
            //     db.query("INSERT INTO `webhook_create_order` (`order_id`, `name`, `email`, `payer_id`, `address`) VALUES (?,?,?,?,?);",[req.body.resource.id,JSON.stringify(req.body.resource.payer.name),req.body.resource.payer.email_address,req.body.resource.payer.payer_id,JSON.stringify(req.body.resource.payer.address)],(err,result)=>{
            //         if(err){
            // console.log(err)
            //         }else if(result){
            //             console.log('done')
            //         }
            //     })
                
            }
            if(req.body.event_type == 'PAYMENT.CAPTURE.COMPLETED'){
                //   db.query("INSERT INTO `transactions` (`order_id`, `amount`, `currncy`) VALUES (?,?,?)",[req.body.resource.supplementary_data.related_ids.order_id,req.body.resource.amount.value,req.body.resource.amount.currency_code],(err,result)=>{
                //             if(err){
                //     console.log(err)
                //             }else if(result){
                //                 console.log('done')
                //             }
                //         })
            }else{
                // echo to a file
            }

//                 console.log(req.body.resource.amount.value)
//     console.log(req.body.resource.supplementary_data.related_ids) 

    // Call your action on the request here
        } else {
            console.log("It was a failed verification");
        }
    }
});
// console.log(certURL)
// console.log(transmissionSignature)
    // console.log(req)

  })



app.post("/hook", (req, res) => {
    res.status(200).end()
// TsBPahy06eZ1RMhY440JYlISifQKfZ08o1LjIgAE
console.log(req.body)
  })

//time
// tamplate
// app.post('/getusers',(req, res)=>{
//         const userToken = req.body.userToken
//     const usernamevefy = req.body.username
    
//         var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
//     db.query('SELECT STORE_users.user, STORE_rank.* FROM STORE_users INNER JOIN STORE_rank ON STORE_users.rank=STORE_rank.name WHERE STORE_users.userToken = ? AND user = ?',[userToken,usernamevefy],(err,result) => {
//         if(err){
//             console.log(err)
//         }else{
//             if(result.length == 0){
//                 //kick him 
//                 res.send({status:0})
//             }else if(result.length == 1){
//                 //check permissions
//                 var s = result[0].perm
//                 if(s.indexOf(',2,') > -1){
//                  //all good
//                 //do your thing
//             db.query('INSERT INTO `STORE_logs` (`made_by`, `wchange`, `date`,ip) VALUES ("UNKNOWN","tried to login",?,?)',[cur_time,ip],(err96,result96) => {
//                 if(err96){
//                     console.log(err96)
//                 }
//             })
//                 }else{
//                     res.send({status:22})
//                 }


//             }else{
//                 res.send({status:2})
//                 //send this request to support
//             }
//         }
//     })
// })
app.post('/login',(req, res) => {
    console.log('requsest')
    const username = req.body.username
    const password = req.body.password
    console.log(username)
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    db.query('SELECT id, userToken, user FROM STORE_users WHERE user = ? AND password = ?',[username,password],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                db.query('INSERT INTO `STORE_logs` (`made_by`, `wchange`, `date`,ip) VALUES ("UNKNOWN","tried to login",?,?)',[cur_time,ip],(err96,result96) => {
                    if(err96){
                        console.log(err96)
                    }
                })
                res.send({msg: 0})
            }else if( result.length == 1){
                console.log()
                db.query('INSERT INTO `STORE_logs` (`made_by`, `wchange`, `date`, ip) VALUES (?,"loged in",?,?)',[result[0].user,cur_time,ip],(err96,result96) => {
                    if(err96){
                        console.log(err96)
                    }
                })
                res.send({msg:1,userToken: result[0].userToken})
            }
        }
    })
})

//check userToken
app.post('/verfy',(req, res) => {
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
    const username = req.body.username
    db.query('SELECT user, email, rank, name, id FROM STORE_users WHERE userToken = ? AND user = ?',[userToken,username],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if( result.length == 0){
                res.send({msg: 0})
            }else if (result.length == 1){
            res.send({msg: 1, username: result[0].user, email: result[0].email, rank: result[0].rank, name: result[0].name, id: result[0].id})
            }else if ( result.length < 1){
                res.send({msg: 2})     
            }
        }
    })
})


app.post('/overview',(req, res) => {



        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
    db.query('SELECT user, email, rank, name FROM STORE_users WHERE userToken = ?',[userToken],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if( result.length == 0){
                res.send({msg: 0})
            }else if (result.length == 1){
//get orders
db.query('SELECT COUNT(order_id) AS num FROM STORE_orders',(err,result) => {
    if(err){
        console.log(err)
    }else{
        const ornum = result[0].num
        //get products
        db.query('SELECT COUNT(id) AS pronum FROM STORE_products',(err2,result2) => {
            if(err2){
                console.log(err2)
            }else{
                const pronum = result2[0].pronum
                //get earning (not finished)
                res.send({orders:ornum,products:pronum,earn:'69'})
            }
        })
    }
})
            }else if ( result.length < 1){
                // res.send({msg: 2})     
            }
        }
    })

})







//get product by id 
app.post('/idproduct',(req, res)=>{
    const productid = req.body.productid
    db.query('SELECT * FROM STORE_products WHERE id = ?',[productid],(err, result)=>{
        if(err){
            console.log(err)
        }else{
            // console.log(result)
            res.send({result})
        }
    })
})
//get store info
app.post('/getstoreinfo',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
    db.query('SELECT user FROM STORE_users WHERE userToken = ?',[userToken],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //all good
                //get store info
                db.query('SELECT * FROM STORE_info',(err2,result2)=>{
                    // console.log('hey')
                    if(err2){
                        console.log(err2)
                    }else{
                        res.send({name:result2[0].name,logo:result2[0].logo,created:result2[0].creating_date,currency:result2[0].currency})
                        console.log(result2[0].name)
                    }
                })
            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})
//get catagory for admin
app.post('/getcatagorys',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    db.query('SELECT user FROM STORE_users WHERE userToken = ?',[userToken],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                db.query('SELECT * FROM `STORE_catagory`',[],(err2,result2) => {
                    if(err2){
                        console.log(err2)
                    }else{
                        res.send(result2)
                    }
                })

            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})
//edit catagory
app.post('/handlecatagorysave',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    const Name = req.body.name
    const Vis = req.body.toEditV
    const id = req.body.id
    const home = req.body.home
    const order = req.body.order
    const t = req.body.t
    db.query('SELECT user FROM STORE_users WHERE userToken = ?',[userToken],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
                db.query('INSERT INTO `STORE_logs` (`made_by`, `wchange`, `date`,ip) VALUES (?,"tried to Access with unvailed Token",?,?)',['UNKNOWN',cur_time,ip],(err96,result96) => {
                    if(err96){
                        console.log(err96)
                    }
                })
            }else if(result.length == 1){
                //all good
                db.query('INSERT INTO `STORE_logs` (`made_by`, `wchange`, `date`,ip) VALUES (?,"Edited/Removed catagory",?,?)',[result[0].user,cur_time,ip],(err96,result96) => {
                    if(err96){
                        console.log(err96)
                    }
                })
                if(t == 1){
               db.query('UPDATE `STORE_catagory` SET name = ? , display = ?, corder = ?, displays = ? WHERE id = ?',[Name,Vis,order,home,id],(err2,result2) => {
                   if(err2){
                       console.log(err2)
                   }else{
                       console.log(result2)
                       res.send({msg: 1})
                   }
               })
            }else if(t == 0){
                console.log('removing')
                db.query('DELETE FROM `STORE_catagory` WHERE id = ?',[id],(err3,result3)=>{
                    if(err3){
                        console.log(err3)
                    }else{
                        console.log(result3)
                        res.send({msg: 1})
                    }
                })
            }
            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})
//add catagory to the
app.post('/addcatagory',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    const Name = req.body.name
    const Vis = req.body.v
    const vishomnepage = req.body.vishomnepage
    const order = req.body.order
    db.query('SELECT user FROM STORE_users WHERE userToken = ?',[userToken],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //all good
               db.query('INSERT INTO `STORE_catagory` (`name`, `display`,displays,corder,sub) VALUES (?,?,?,?,?)',[Name,Vis,vishomnepage,order,'nothing'],(err2,result2) => {
                   if(err2){
                       console.log(err2)
                   }else{
                       console.log(result2)
                       res.send({msg: 1})
                       db.query('INSERT INTO `STORE_logs` (`made_by`, `wchange`, `date`,ip) VALUES (?,"Added catagory",?,?)',[result[0].user,cur_time,ip],(err96,result96) => {
                        if(err96){
                            console.log(err96)
                        }
                    })
                    }})

            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})

//logs
app.post('/logs',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
    const LIMIT = req.body.limit
    console.log(LIMIT)
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    db.query('SELECT user FROM STORE_users WHERE userToken = ?',[userToken],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //all good
                db.query('SELECT * FROM STORE_logs ORDER by id DESC LIMIT ?',[LIMIT],(err2,result2)=>{
                    if(err2){
                        console.log(err2)
                    }else{
                        res.send(result2)
                    }
                })

            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})

//get admin acc info
app.post('/adminaccount',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    db.query('SELECT user FROM STORE_users WHERE userToken = ?',[userToken],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //all good
                //do your thing
                db.query('SELECT user, email, rank, name FROM STORE_users WHERE userToken = ?',[userToken],(err3,result3) => {
                    if(err3){
                        console.log(err3)
                    }else{
                        res.send(result3)
                    }
                })

            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})
//cange admin password
app.post('/changepasswordadmin',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
    const oldpassword = req.body.oldpass
    const newpass = req.body.newpass
    const renewpass = req.body.renewpass
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    db.query('SELECT user FROM STORE_users WHERE userToken = ?',[userToken],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //all good
                //do your thing
                if(newpass == renewpass){
                    if(newpass.length > 6){
                db.query('SELECT user, id FROM STORE_users WHERE password = ? AND userToken = ?',[oldpassword,userToken],(err3,result3) => {
                    if(err3){
                        console.log(err3)
                    }else{
                        if(result3.length == 1){
                            db.query('UPDATE `STORE_users` SET `password` = ? WHERE `STORE_users`.`id` = ?',[newpass,result3[0].id],(err4,result4)=>{
                                if(err4){
                                    console.log(err4)
                                }else{
                                    res.send({status:1})
                                    db.query('INSERT INTO `STORE_logs` (`made_by`, `wchange`, `date`, ip) VALUES (?,"Changed his password",?,?)',[result[0].user,cur_time,ip],(err96,result96) => {
                                        if(err96){
                                                            console.log(err96)
                                                        }
                                                    })
                                }
                            })
                        }else{
                            //wrong pass
                            res.send({status:3})
                        }
                    }

                })
            
            
                    }else{
                        //pass length
                        res.send({status:4})
                    }
            
            }else{
                //is not the same
                res.send({status:5})
            }
            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})
//get currency and catagorys to add product
app.post('/getaddproductpageinfoifurreadingthisstopreadingcuzitisgonnabeareallylongurlmadebyomar',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
    db.query('SELECT user FROM STORE_users WHERE userToken = ?',[userToken],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //all good
                //do your thing
                 db.query('SELECT * FROM `STORE_catagory`',(err2,result2) => {
                     if(err2){
                         console.log(err2)
                     }else{
                         res.send(result2)
                     }
                 })
            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})
app.post('/getpaymentforadmin',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
    db.query('SELECT user FROM STORE_users WHERE userToken = ?',[userToken],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //all good
                //do your thing
                db.query('SELECT * FROM `STORE_payment`',(err2, result2)=>{
                    if(err2){
                        console.log(err2)
                    }else{
                        res.send(result2)
                        console.log(result2)
                    }
                })
            }else{
                res.send({status:2})
                
            }
        }
    })
})
app.post('/editpaypal',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    const client_id = req.body.client_id
    const client_secret = req.body.client_secret
    const webhook_id = req.body.webhook_id
    const vise = req.body.vise
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    db.query('SELECT STORE_users.user, STORE_rank.* FROM STORE_users INNER JOIN STORE_rank ON STORE_users.rank=STORE_rank.name WHERE STORE_users.userToken = ? AND user = ?',[userToken,usernamevefy],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                res.send({status:0})
            }else if(result.length == 1){
                var s = result[0].perm
                if(s.indexOf(',3,') > -1){
                if(client_id.length < 3 && vise == 0){
                    res.send({status:3})
                }else{
                db.query('UPDATE `STORE_payment` SET `visible` = ?, `Client_id` = ?, client_secret = ?, webhook_id = ? WHERE `STORE_payment`.`id` = 1',[vise,client_id,client_secret,webhook_id],(err3,result3) => {
                    if(err3){
                        console.log(err3)
                    }else{
                        res.send({status:1})
                    }
                })
            db.query('INSERT INTO `STORE_logs` (`made_by`, `wchange`, `date`,ip) VALUES (?,"Changed Paypal Settings",?,?)',[result[0].user,cur_time,ip],(err96,result96) => {
                if(err96){
                    console.log(err96)
                }
            })
        }




                }else{
                    res.send({status:22})
                }


            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})


app.post('/editpaypal',(req, res)=>{
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    db.query('SELECT user FROM STORE_users WHERE userToken = ?',[userToken],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //all good
                //do your thing
                // 
            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})
app.post('/editcash',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
    const vise = req.body.vise
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    db.query('SELECT user FROM STORE_users WHERE userToken = ?',[userToken],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //all good
                //do your thing
                // 
                db.query('UPDATE `STORE_payment` SET `visible` = ? WHERE `STORE_payment`.`id` = 2',[vise],(err3,result3) => {
                    if(err3){
                        console.log(err3)
                    }else{
                        res.send({status:1})
                    }
                })
                db.query('INSERT INTO `STORE_logs` (`made_by`, `wchange`, `date`,ip) VALUES (?,"changed paypal payment method",?,?)',[result[0].user,cur_time,ip],(err96,result96) => {
                    if(err96){
                    console.log(err96)
                }
            })

            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})
// upload image 
// Multer
const upload = multer()
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
app.post('/upload', upload.single('file'), async function (req, res, next) {
    console.log('request')
const { 
  file,
  body:{userToken,id}
} = req;

var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
const handleimage = async ()=>{
    const filename = id + getRandomInt(93832) * getRandomInt(213) + getRandomInt(382745) + getRandomInt(123) * getRandomInt(4241) + getRandomInt(93832) + id + file.detectedFileExtension
    await pipeline(file.stream, fs.createWriteStream(`${__dirname}/public/${filename}`))
    console.log('Done')
    // 1
    // res.send({id: id,image:'https://' + req.headers.host + '/' + filename})
    // 2
    res.send({id: id,image:'https://' + req.socket.servername + '/' + filename})
    
console.log()
  }
    db.query('SELECT user FROM STORE_users WHERE userToken = ?',[userToken],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //all good
                //do your thing
                console.log(file.detectedFileExtension)
                if(file.detectedFileExtension == ".mp4"){
                    handleimage()
                    }else if(file.detectedFileExtension == ".png"){
                      handleimage()
                    }else if(file.detectedFileExtension == ".jpg"){
                      handleimage()
                    }else if(file.detectedFileExtension == ".jpg"){
                          handleimage()
                    }else if(file.detectedFileExtension == ".svg"){
                      handleimage()
                    }else if(file.detectedFileExtension == ".mov"){
                        handleimage()
                    }else if(file.detectedFileExtension == ".webp"){
                        handleimage()
                    }else{
                        console.log(file.detectedFileExtension)
                    }
            db.query('INSERT INTO `STORE_logs` (`made_by`, `wchange`, `date`,ip) VALUES (?,"Upload a File",?,?)',[result[0].user,cur_time,ip],(err96,result96) => {
                if(err96){
                    console.log(err96)
                }
            })

            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })

})



app.post('/addproduct',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
    const name = req.body.name
    const price = req.body.price
    const details = req.body.details
    const tags = req.body.tags
    const catagory = JSON.stringify(req.body.catagory)
    const size = JSON.stringify(req.body.size)
    const colors = JSON.stringify(req.body.colors)
    const option1 = JSON.stringify(req.body.option1)
    const imgs = JSON.stringify(req.body.imgs)
    const shipping = req.body.shipping
    const sku = req.body.sku
    const returnpolicy = req.body.returnpolicy
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    db.query('SELECT STORE_users.user, STORE_rank.* FROM STORE_users INNER JOIN STORE_rank ON STORE_users.rank=STORE_rank.name WHERE STORE_users.userToken = ? AND user = ?',[userToken,usernamevefy],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //check permissions
                var s = result[0].perm
                if(s.indexOf(',1,') > -1){
                 //all good
                //do your thing
                db.query('INSERT INTO `STORE_products` (`name`, `price`, `details`, `media`, `keywords`, `sale_price`, `is_sale`,options,catagorys,shipping, `sku`, `return`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',[name,price,details,imgs,tags,33,0,1,catagory,shipping,sku,returnpolicy],(err2,result2)=>{
                    if(err2) {
                        console.log(err2)
                    }else{
                        // console.log(result2.insertId)
                        res.send({status:1})
                        const idPRo = result2.insertId
                            if(req.body.colors.length > 0){
                                db.query("INSERT INTO `STORE_products_options` (`array`, `Sgroup`, `Sto`) VALUES (?,?,?)",[colors,2,idPRo],(err5,result5)=>{
                                    if(err5) {
                                        console.log(err5)
                                    }
                                })
                            }
                            if(req.body.size.length > 0){
                                db.query("INSERT INTO `STORE_products_options` (`array`, `Sgroup`, `Sto`) VALUES (?,?,?)",[size,1,idPRo],(err6,result6)=>{
                                   if(err6) {
                                       console.log(err6)
                                   }
                                })
                            }
                            if(req.body.option1.length > 0){
                                db.query("INSERT INTO `STORE_products_options` (`array`, `Sgroup`, `Sto`) VALUES (?,?,?)",[option1,3,idPRo],(err7,result7)=>{
                                   if(err7){
                                       console.log(err7)
                                   }
                                })
                            }
                    }
                })
                
                db.query('INSERT INTO `STORE_logs` (`made_by`, `wchange`, `date`,ip) VALUES (?,"Added a product",?,?)',[result[0].user,cur_time,ip],(err96,result96) => {
                if(err96){
                    console.log(err96)
                }
                })
            db.query('INSERT INTO `STORE_logs` (`made_by`, `wchange`, `date`,ip) VALUES (?,"tried to login",?,?)',[result[0].user,cur_time,ip],(err96,result96) => {
                if(err96){
                    console.log(err96)
                }
            })
                }else{
                    res.send({status:22})
                }


            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})

app.post('/getproducts',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    db.query('SELECT user FROM STORE_users WHERE userToken = ?',[userToken],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //all good
                //do your thing
            db.query('SELECT * FROM `STORE_products`',(err2,result2) => {
                if(err2){
                    console.log(err2)
                }else{
                    res.send(result2)
                }
            })

            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})

// select all users
// SELECT STORE_users.*, STORE_rank.* FROM STORE_users INNER JOIN STORE_rank ON STORE_users.rank=STORE_rank.name
// with id
// SELECT STORE_users.*, STORE_rank.* FROM STORE_users INNER JOIN STORE_rank ON STORE_users.rank=STORE_rank.name WHERE STORE_users.id = 1

app.post('/getusersranktoadd',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    db.query('SELECT STORE_users.user, STORE_rank.* FROM STORE_users INNER JOIN STORE_rank ON STORE_users.rank=STORE_rank.name WHERE STORE_users.userToken = ? AND user = ?',[userToken,usernamevefy],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //check permissions
                var s = result[0].perm
                if(s.indexOf(',9,') > -1){
                 //all good
                //do your thing
                db.query('SELECT * FROM `STORE_rank`',(err3,result3) => {
                    if(err3){
                        console.log(err3)
                    }else{
                        res.send(result3)
                    }
                })
                }else{
                    res.send({status:22})
                }


            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})
app.post('/adduser',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
    const username = req.body.username
    const name = req.body.name
    const rank = req.body.rank
    const email = req.body.email
    const password = req.body.password
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    const usert = uuidv1() + uuidv4() + username + ip + uuidv4()
    db.query('SELECT STORE_users.user, STORE_rank.* FROM STORE_users INNER JOIN STORE_rank ON STORE_users.rank=STORE_rank.name WHERE STORE_users.userToken = ? AND user = ?',[userToken,usernamevefy],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //check permissions
                var s = result[0].perm
                if(s.indexOf(',9,') > -1){
                 //all good
                //do your thing
                db.query('select * from STORE_rank where id = ?',[rank],(err3,result3)=>{
                    if(err3){
                        console.log(err3)
                    }else{
                        if(result3.length == 1){
                            db.query('SELECT * FROM `STORE_users` WHERE user = ?',[username],(err354,result354)=>{
                                if(err354){
                                    console.log(err354)
                                }else{

                                    if(result354.length > 0){
                                        res.send({status:28})
                                        // username already exist
                                    }else{
                                        if(username.length < 3){
                                            // username
                                            res.send({status:24})
                                          }else if(name.length == 0){
                                            // name length
                                            res.send({status:25})
                                          }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false){
                                            // email
                                            res.send({status:26})
                                          }else if(password.length <= 5){
                                            // password
                                            res.send({status:27})
                                          }else{
                                            // send the request
                                            db.query('INSERT INTO `STORE_users` (`user`, `name`, `email`, `password`, `rank`, `userToken`) VALUES (?,?,?,?,?,?);',[],(err122,result122)=>{
                                                if(err122){
                                                    console.log(err122)
                                                }else{
                                                    res.send({status:1})
                                                }
                                            })
                                          }
                                    }
                                }
                            })
                  
                        }else{
                            // something went wrong with adding rank to the user pklease contact support
                            res.send({status:23})
                        }
                    }
                })



            db.query('INSERT INTO `STORE_logs` (`made_by`, `wchange`, `date`,ip) VALUES (?,"Added a user",?,?)',[result[0].user,cur_time,ip],(err96,result96) => {
                if(err96){
                    console.log(err96)
                } 
            })
                }else{
                    res.send({status:22})
                }


            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})
app.post('/getcatagorysshop',(req, res)=>{
const limit = req.body.limit
db.query('SELECT * FROM `STORE_catagory` WHERE displays = 1 ORDER BY `STORE_catagory`.`corder` ASC LIMIT ?',[limit],(err1,result1)=>{
   if(err1){
       console.log(err1)
       res.send({status:"something wrong happened"})
   }else{
    //    console.log('here')
    //    console.log(result1)
       res.send(result1)
   }
})
})
app.post('/getproductsshopw',(req, res)=>{
    const limit = req.body.limit
    const finished = []
    const product = []
    if(limit <= 1){

    }else{

    db.query('SELECT * FROM `STORE_catagory` WHERE displays = 1 ORDER BY `STORE_catagory`.`corder` ASC LIMIT ?',[limit],(err1,result1)=>{
       if(err1){
           console.log(err1)
           res.send({status:"something wrong happened"})
       }else{
        //    console.log(result1)
           const catagory = result1
           if(catagory.length == 0){
            res.send([])
           }

           catagory.map((git)=>{
               console.log('stating the loop for ' + git.id)
               const idss = '%'+ git.id + ',%'
               db.query('SELECT DISTINCT * FROM `STORE_products` WHERE catagorys LIKE ? LIMIT 5',[idss],(err33,result33)=>{
                   if(err33){
                       console.log(err33)
                   }
                   if(result33){
                    if(result33.length == 0){
                        finished.push({d:1})
                    }else{

                    
                    console.log('stage 1 geting products id ' + git.id + 'length')
                       console.log(result33.length)
                    for (var i = 0; i < result33.length; i++) {
                     product.push({for: git.id, id:result33[i].id, name:result33[i].name,price:result33[i].price, details:result33[i].details, media:result33[i].media,sale_price:result33[i].sale_price,is_sale:result33[i].is_sale})
                        if(result33.length - 1 == i){
                            // console.log('ee')
                            finished.push({d:1})
                        }
                    }
                }
                    // console.log('p' + product.length)
                    // console.log('ff' + finished.length)
                    if(finished.length == result1.length){
                     res.send(product)
                 }else{
                    //  res.send([])
                 }
                   }
                   
                   
                   else{
                     res.status(501)
                       
                   }
          
               })

           })
  
       }

    })
}
    })
    app.get('/getnavigationinfo',(req, res)=>{
        // console.log('hey')
        db.query('SELECT * FROM `STORE_catagory` WHERE display = 1 ORDER BY `STORE_catagory`.`corder` ASC',[],(err1,result1)=>{
       if(err1){
        console.log(err1)
        res.send({status:"something wrong happened"})
       }else{
        //    console.log(result1)
           res.send(result1)
       }
        })
})
app.post('/getbasicinfoforproducts',(req, res)=>{
    const id = req.body.id
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    db.query('SELECT STORE_users.user, STORE_rank.* FROM STORE_users INNER JOIN STORE_rank ON STORE_users.rank=STORE_rank.name WHERE STORE_users.userToken = ? AND user = ?',[userToken,usernamevefy],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //check permissions
                var s = result[0].perm
                if(s.indexOf(',1,') > -1){
                 //all good
                //do your thing


                db.query('SELECT * FROM `STORE_products` WHERE id = ?',[id],(err31,result31)=>{
                    if(err31){
                        console.log(err31)
                    }else{
                        if(result31){
                            res.send(result31)
                        }
                    }
                })




                }else{
                    res.send({status:22})
                }


            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})
app.post('/getproductoptionsforadmins',(req, res)=>{
    const id = req.body.id
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    db.query('SELECT STORE_users.user, STORE_rank.* FROM STORE_users INNER JOIN STORE_rank ON STORE_users.rank=STORE_rank.name WHERE STORE_users.userToken = ? AND user = ?',[userToken,usernamevefy],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //check permissions
                var s = result[0].perm
                if(s.indexOf(',1,') > -1){
                 //all good
                //do your thing
                db.query('SELECT * FROM `STORE_products_options` WHERE Sto = ?',[id],(err31,result31)=>{
                    if(err31){
                        console.log(err31)
                    }else{
                        if(result31){
                            res.send(result31)
                        }
                    }
                })




                }else{
                    res.send({status:22})
                }


            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})

app.post('/editproduct',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
    const name = req.body.name
    const price = req.body.price
    const details = req.body.details
    const tags = req.body.tags
    const catagory = JSON.stringify(req.body.catagory)
    const size = JSON.stringify(req.body.size)
    const colors = JSON.stringify(req.body.colors)
    const option1 = JSON.stringify(req.body.option1)
    const imgs = JSON.stringify(req.body.imgs)
    const shipping = req.body.shipping
    const sku = req.body.sku
    const returnpolicy = req.body.returnpolicy
    const id = req.body.id
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    db.query('SELECT STORE_users.user, STORE_rank.* FROM STORE_users INNER JOIN STORE_rank ON STORE_users.rank=STORE_rank.name WHERE STORE_users.userToken = ? AND user = ?',[userToken,usernamevefy],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //check permissions
                var s = result[0].perm
                if(s.indexOf(',1,') > -1){
                 //all good
                //do your thin
                db.query('UPDATE `STORE_products` SET  `name` = ?, `price` = ?,`details` = ?, `media` = ? ,`options` = ?, `keywords` = ?, `catagorys` =?, `sale_price` = ?, `is_sale` =  ?, sku = ?, `return` = ?, `shipping` = ?  WHERE `STORE_products`.`id` = ?',[name,price,details,imgs,1,tags,catagory,33,0,sku,returnpolicy,shipping,id],(err2,result2)=>{
                    if(err2) {
                        console.log(err2)
                        res.send({status:501})
                    }else{
                    
                        db.query('DELETE FROM STORE_products_options WHERE `Sto` = ?',[id],(err69,result69)=>{
                            if(err69){
                                res.send({status:501})
                            }else{
                                res.send({status:1})
                                if(req.body.colors.length > 0){
                                    db.query("INSERT INTO `STORE_products_options` (`array`, `Sgroup`, `Sto`) VALUES (?,?,?)",[colors,2,id],(err5,result5)=>{
                                        if(err5) {
                                            console.log(err5)
                                        }
                                    })
                                }
                                if(req.body.size.length > 0){
                                    db.query("INSERT INTO `STORE_products_options` (`array`, `Sgroup`, `Sto`) VALUES (?,?,?)",[size,1,id],(err6,result6)=>{
                                       if(err6) {
                                           console.log(err6)
                                       }
                                    })
                                }
                                if(req.body.option1.length > 0){
                                    db.query("INSERT INTO `STORE_products_options` (`array`, `Sgroup`, `Sto`) VALUES (?,?,?)",[option1,3,id],(err7,result7)=>{
                                       if(err7){
                                           console.log(err7)
                                       }
                                    })
                                }
                            }

                        })

                    }
                })
                
                db.query('INSERT INTO `STORE_logs` (`made_by`, `wchange`, `date`,ip) VALUES (?,"Added a product",?,?)',[result[0].user,cur_time,ip],(err96,result96) => {
                if(err96){
                    console.log(err96)
                }
                })
            db.query('INSERT INTO `STORE_logs` (`made_by`, `wchange`, `date`,ip) VALUES (?,"tried to login",?,?)',[result[0].user,cur_time,ip],(err96,result96) => {
                if(err96){
                    console.log(err96)
                }
            })
                }else{
                    res.send({status:22})
                }


            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})




app.get('/currency',(req, res)=>{
db.query('SELECT name, logo, currency FROM `STORE_info` WHERE id = 1',(err,resp)=>{
    if(err){
        console.log(err)
        res.send({status:'something wrong happened'});
    }else{
        res.send(resp)
    }
})
})






app.get('/phone',(req, res)=>{
    db.query('SELECT name, logo, currency FROM `STORE_info` WHERE id = 3',(err,resp)=>{
        if(err){
            console.log(err)
            res.send({status:501});
        }else{
            res.send(resp)
        }
    })
    })


app.post('/options',(req, res)=>{
    const id = req.body.id
    console.log(id)
    db.query('SELECT * FROM `STORE_products_options` WHERE Sto = ?',[id],(err,resp)=>{
        if(err){
            console.log(err)
            res.send({status:'something wrong happened'});
        }else{
            res.send(resp)
        }
    })
    })
// 
app.post('/deleteproduct',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
        const id = req.body.id
    db.query('SELECT STORE_users.user, STORE_rank.* FROM STORE_users INNER JOIN STORE_rank ON STORE_users.rank=STORE_rank.name WHERE STORE_users.userToken = ? AND user = ?',[userToken,usernamevefy],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //check permissions
                var s = result[0].perm
                if(s.indexOf(',1,') > -1){
                 //all good
                //do your thing
            db.query('INSERT INTO `STORE_logs` (`made_by`, `wchange`, `date`,ip) VALUES ("UNKNOWN","tried to login",?,?)',[cur_time,ip],(err96,result96) => {
                if(err96){
                    console.log(err96)
                }
            })
            db.query('DELETE FROM `STORE_products` WHERE `STORE_products`.`id` = ?',[id],(err11,result11) => {
                if(err11){

                }else{
                    res.send({status:1})
                }
            })
                }else{
                    res.send({status:22})
                }


            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})

app.get('/payments',(req, res)=>{

    db.query('SELECT id, name, Client_id, logo FROM `STORE_payment` WHERE visible = 1',[],(err,result) => {
if(err){
    console.log(err)
    res.send({status:404})
}else{
    res.send(result)

}
    })

})
app.post('/getshippingforadmin',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
    const profile = req.body.profile
    db.query('SELECT STORE_users.user, STORE_rank.* FROM STORE_users INNER JOIN STORE_rank ON STORE_users.rank=STORE_rank.name WHERE STORE_users.userToken = ? AND user = ?',[userToken,usernamevefy],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //check permissions
                var s = result[0].perm
                if(s.indexOf(',4,') > -1){
                 //all good
                //do your thing
            db.query('SELECT * FROM STORE_shipping WHERE ptype = 1 AND ptoc = ?',[profile],(err96,result96) => {
                if(err96){
                    console.log(err96)
                }else{
                    res.send(result96)
                }
            })
                }else{
                    res.send({status:22})
                }


            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})
app.post('/add_region',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
    const name = req.body.name
    const type = req.body.type
    const visible = req.body.visible
    const price = req.body.price
    const profile = req.body.profile
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    db.query('SELECT STORE_users.user, STORE_rank.* FROM STORE_users INNER JOIN STORE_rank ON STORE_users.rank=STORE_rank.name WHERE STORE_users.userToken = ? AND user = ?',[userToken,usernamevefy],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //check permissions
                var s = result[0].perm
                if(s.indexOf(',4,') > -1){
                 //all good
                //do your thing
                db.query('INSERT INTO `STORE_shipping` (`name`, `type`, `price`, `visible`,array,ptype,ptoc) VALUES (?,?,?,?,?,1,?);',[name,type,price,visible,JSON.stringify([]),profile],(err3,result3) => {
                    if(err3){
                        console.log(err3)
                    }else{
                        res.send({status:1})
                    }
                })

            db.query('INSERT INTO `STORE_logs` (`made_by`, `wchange`, `date`,ip) VALUES (?,"Added a Region",?,?)',[result[0].user,cur_time,ip],(err96,result96) => {
                if(err96){
                    console.log(err96)
                }
            })
                }else{
                    res.send({status:22})
                }


            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})
app.post('/shippingCountrys',(req, res)=>{
    const cart = req.body.cart

var profiles = []
if(cart){
    cart.map((g,i)=>{
        db.query('SELECT shipping FROM STORE_products WHERE id = ?',[g.prid],(err4,result4)=>{
            if(err4){
                console.log(err4)
                res.send({status:501})
            }else{
                if(result4.length > 0){
                    profiles.push({id:result4[0].shipping})
                    if(profiles.length == cart.length){
                        var r = profiles.filter(obj=>obj.id > 0);
                                if(r.length > 0){
                                    db.query('SELECT * FROM `STORE_shipping` WHERE visible = "true" AND ptype = 1',(err,result)=>{
                                        if(err){
                                            console.log(err)
                                        }else{
                                            res.send(result)
                                        }
                                    })
                                }else{
                                    res.send({status:1})
                                }
                        // console.log(profiles)
                    }
                }else{
                    // res.send({status:2})
                    profiles.push({id:0})
                }
  
            }
        
        })
            })
}else{
    res.send({status:404})
}

})
app.post('/shippingbyid',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
    const id = req.body.id
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    db.query('SELECT STORE_users.user, STORE_rank.* FROM STORE_users INNER JOIN STORE_rank ON STORE_users.rank=STORE_rank.name WHERE STORE_users.userToken = ? AND user = ?',[userToken,usernamevefy],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //check permissions
                var s = result[0].perm
                if(s.indexOf(',4,') > -1){
                 //all good
                //do your thing
            db.query('SELECT * FROM `STORE_shipping` WHERE id = ?',[id],(err96,result96) => {
                if(err96){
                    console.log(err96)
                }else{
                    res.send(result96)
                }
            })
                }else{
                    res.send({status:22})
                }


            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})
app.post('/add_state',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
    const id = req.body.id
    const array = req.body.array
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
        const a = JSON.parse(array)
        // console.log(array)
    db.query('SELECT STORE_users.user, STORE_rank.* FROM STORE_users INNER JOIN STORE_rank ON STORE_users.rank=STORE_rank.name WHERE STORE_users.userToken = ? AND user = ?',[userToken,usernamevefy],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //check permissions
                var s = result[0].perm
                if(s.indexOf(',4,') > -1){
                 //all good
                //do your thing
            db.query('INSERT INTO `STORE_logs` (`made_by`, `wchange`, `date`,ip) VALUES (?,"Added a State",?,?)',[result[0].user,cur_time,ip],(err96,result96) => {
                if(err96){
                    console.log(err96)
                }
            })
            if(id && a.name.length > 0){
                db.query('SELECT * FROM `STORE_shipping` WHERE `id` = ?',[id],(err4,result4) => {
                    if(err4){
                        console.log(err4)
                    }else{
                        if(result4.length > 0){
                            // console.log(result4[0].array)
                            if(JSON.parse(result4[0].array).length > 0){
                                    const old = JSON.parse(result4[0].array)
                                    console.log(old)
                                    console.log(a)
                                    const fid = old.length + 1
                                    const p = {id:fid,name:a.name,visible:a.visible,price:a.price}
                                    old.push(p)
                                    console.log(old)
                                    const endd = JSON.stringify(old)
                                    // const newp = [...old,...a]
                                    // const news = JSON.stringify(newp)
                                    // console.log(newp)
                                db.query('UPDATE `STORE_shipping` SET `array` = ? WHERE `STORE_shipping`.`id` = ?',[endd,id],(err2,result2)=>{
                                    if(err2){
                                        console.log(err2)
                                    }else{
                                        res.send({status:1})
                                    }
                                })




                            }else{
                                const p ={id:1,name:a.name,visible:a.visible,price:a.price}

                                const ff = [p]
                                const ed = JSON.stringify(ff)
                                db.query('UPDATE `STORE_shipping` SET `array` = ? WHERE `STORE_shipping`.`id` = ?',[ed,id],(err2,result2)=>{
                                    if(err2){
                                        console.log(err2)
                                    }else{
                                        res.send({status:1})
                                    }
                                })
                            }
                            // const b = JSON.parse(result4[0].array)
                            // console.log(b)
                        // const f = JSON.stringify([...b,...a])
                            // db.query('UPDATE `STORE_shipping` SET `array` = ? WHERE `STORE_shipping`.`id` = ?',[array,id],(err2,result2)=>{
                            //     if(err2){
                            //         console.log(err2)
                            //     }else{
                            //         res.send({status:1})
                            //     }
                            // })
                        }else{
                      
                        }
                        
                        // console.log(f)

                    }
                })
            const e = JSON.parse(array)
            // console.log(e)
              
            }else{
                res.send({status:501})
            }
     
                }else{
                    res.send({status:22})
                }


            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})
app.post('/getstatesbyidadmin',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
    const id = req.body.id
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    db.query('SELECT STORE_users.user, STORE_rank.* FROM STORE_users INNER JOIN STORE_rank ON STORE_users.rank=STORE_rank.name WHERE STORE_users.userToken = ? AND user = ?',[userToken,usernamevefy],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //check permissions
                var s = result[0].perm
                if(s.indexOf(',4,') > -1){
                 //all good
                //do your thing
            db.query('SELECT * FROM `STORE_shipping` WHERE `id` = ?',[id],(err96,result96) => {

                if(err96){
                    console.log(err96)
                }else{
                    if(result96.length > 0){
                        const old = JSON.parse(result96[0].array)
                        res.send(old)
                    }
                }
            })
                }else{
                    res.send({status:22})
                }

            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})
app.get('/states',(req, res)=>{

    db.query('SELECT array FROM `STORE_shipping`',[id],(err96,result96) => {
        if(err96){
            console.log(err96)
        }else{
            const old = JSON.parse(result96[0].array)
            res.send(old)
        }
    })
})
app.post('/editregion',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    const id = req.body.id
    const name = req.body.name
    const visible = req.body.visible
    const type = req.body.type
    const price = req.body.price
    console.log(price)
console.log('d')
    db.query('SELECT STORE_users.user, STORE_rank.* FROM STORE_users INNER JOIN STORE_rank ON STORE_users.rank=STORE_rank.name WHERE STORE_users.userToken = ? AND user = ?',[userToken,usernamevefy],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //check permissions
                var s = result[0].perm
                if(s.indexOf(',4,') > -1){
                 //all good
                //do your thing
                if(id){
db.query("UPDATE `STORE_shipping` SET `name` = ?, `type` = ?, `price` = ?, `visible` = ? WHERE `STORE_shipping`.`id` = ?",[name,type,price,visible,id],(err55,result55)=>{
    if(err55){
        console.log(err55)
    }else{
        res.send({status:1})}})
                }else{
                    res.send({status:501})
                }
            db.query('INSERT INTO `STORE_logs` (`made_by`, `wchange`, `date`,ip) VALUES (?,"Edited a region",?,?)',[result[0].user,cur_time,ip],(err96,result96) => {
                if(err96){
                    console.log(err96)
                }
            })
                }else{
                    res.send({status:22})
                }


            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})
app.post('/addshippingprofile',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
    const name = req.body.name
    const price = req.body.price
    const worlswide = req.body.worlswide
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    db.query('SELECT STORE_users.user, STORE_rank.* FROM STORE_users INNER JOIN STORE_rank ON STORE_users.rank=STORE_rank.name WHERE STORE_users.userToken = ? AND user = ?',[userToken,usernamevefy],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //check permissions
                var s = result[0].perm
                if(s.indexOf(',4,') > -1){
                 //all good
                //do your thing
                if(name.length > 0){
                    db.query("INSERT INTO `STORE_shipping` ( `name`, `ptype`, worldwide, worldwide_price, array, type, price, visible, ptoc) VALUES (?,2,?,?,NULL,0,NULL,NULL,NULL)",[name,worlswide,price],(err4,result4) => {
                        if(err4){
                            console.log(err4)
                        }else{
                            res.send({status:1})
                        }
                    })
                }else{
                    res.send({status:501})
                }
               
            db.query('INSERT INTO `STORE_logs` (`made_by`, `wchange`, `date`,ip) VALUES (?,"Added shipping profile",?,?)',[result[0].user,cur_time,ip],(err96,result96) => {
                if(err96){
                    console.log(err96)
                }
            })
                }else{
                    res.send({status:22})
                }


            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})
// visible
app.post('/getshippingprofileforadmins',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    db.query('SELECT STORE_users.user, STORE_rank.* FROM STORE_users INNER JOIN STORE_rank ON STORE_users.rank=STORE_rank.name WHERE STORE_users.userToken = ? AND user = ?',[userToken,usernamevefy],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //check permissions
                var s = result[0].perm
                if(s.indexOf(',4,') > -1){
                 //all good
                //do your thing
                
            db.query('SELECT * FROM `STORE_shipping` WHERE ptype = 2',(err96,result96) => {
                if(err96){
                    console.log(err96)
                }else{
                    res.send(result96)
                }
            })
                }else{
                    res.send({status:22})
                }


            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})
app.post('/editprofilen',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
    const name = req.body.name
    const ww = req.body.worlswide
    const p  = req.body.price
    const id = req.body.id
console.log('re')
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    db.query('SELECT STORE_users.user, STORE_rank.* FROM STORE_users INNER JOIN STORE_rank ON STORE_users.rank=STORE_rank.name WHERE STORE_users.userToken = ? AND user = ?',[userToken,usernamevefy],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //check permissions
                var s = result[0].perm
                if(s.indexOf(',4,') > -1){
                 //all good
                //do your thing
                db.query("UPDATE `STORE_shipping` SET `name` = ?, price = ? , worldwide = ? WHERE `STORE_shipping`.`id` = ?",[name,p,ww,id],((err4,result4) => {
                    if(err4){
                        console.log(err4)
                    }else{
                        res.send({status:1})
                        console.log(result4)
                    }
                }))
            db.query('INSERT INTO `STORE_logs` (`made_by`, `wchange`, `date`,ip) VALUES ("UNKNOWN","tried to login",?,?)',[cur_time,ip],(err96,result96) => {
                if(err96){
                    console.log(err96)
                }
            })
                }else{
                    res.send({status:22})
                }


            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})
app.post('/deleteprofile',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
    const id = req.body.id
console.log('re')
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    db.query('SELECT STORE_users.user, STORE_rank.* FROM STORE_users INNER JOIN STORE_rank ON STORE_users.rank=STORE_rank.name WHERE STORE_users.userToken = ? AND user = ?',[userToken,usernamevefy],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //check permissions
                var s = result[0].perm
                if(s.indexOf(',4,') > -1){
                 //all good
                //do your thing
                db.query("DELETE FROM `STORE_shipping` WHERE `STORE_shipping`.`id` = ?",[id],((err4,result4) => {
                    if(err4){
                        console.log(err4)
                    }else{
                        db.query('DELETE FROM `STORE_shipping` WHERE `STORE_shipping`.`ptoc` = ?',[id],((err6,result6) => {
                            if(err6){
                                console.log(err6)
                            }else{
                                res.send({status:1})
                            }

                        }))
                    }
                }))
            db.query('INSERT INTO `STORE_logs` (`made_by`, `wchange`, `date`,ip) VALUES ("UNKNOWN","tried to login",?,?)',[cur_time,ip],(err96,result96) => {
                if(err96){
                    console.log(err96)
                }
            })
                }else{
                    res.send({status:22})
                }


            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})
app.post('/getprofileshippingforproducts',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    db.query('SELECT STORE_users.user, STORE_rank.* FROM STORE_users INNER JOIN STORE_rank ON STORE_users.rank=STORE_rank.name WHERE STORE_users.userToken = ? AND user = ?',[userToken,usernamevefy],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //check permissions
                var s = result[0].perm
                if(s.indexOf(',1,') > -1){
                 //all good
                //do your thing
            db.query("SELECT * FROM `STORE_shipping` WHERE ptype = 5",(err96,result96) => {
                if(err96){
                    console.log(err96)
                }else{
                    if(result96){
                        res.send(result96)
                    }else{
                        res.send({status:707})
                    }
                }
            })
                }else{
                    res.send({status:22})
                }


            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})
// calculate products price

app.post('/getsubtotal',(req, res)=>{
    const gcart = req.body.cart
    console.log('cart')
    console.log(gcart)
    
    var products = []
    
    
    if(gcart){
    //    console.log(gcart)
       if(gcart.length > 0){
        gcart.map((value,i)=>{
            var product = []
            let counter = 0
            const send =  ()=>{
      
                console.log(counter)
                if(counter == 4){
                    // console.log('here')
                    // products.push([...product])
                    // console.log(counter)
                    console.log(product)
                    let sump
                    sump = 0
    
                    product.map((gf,i)=>{
       
    
    
                        var r = product.filter(obj=>obj.status == 404);
                        if(r.length > 0 && i == 0){
    
                            products.push({status:404,array:JSON.stringify(product)})
                            sump = 0
                        }else if (r.length == 0){
                            if(i == product.length - 1){
                                sump += parseInt(gf.price)
                                // console.log('to:' + sump)
                                // console.log('gf:' + gf.price)
                                products.push({status:200,price:sump,array:JSON.stringify(product)})
                            // console.log(products)
        
                                sump = 0
                            }else{
                                // console.log('add:' + sump)
                                // console.log('gf:' + gf.price)
                                sump += parseInt(gf.price)
                            
                            
                            }
                        }
    
    
                   
                   
                   
                   
                    })
    
    
    
    
                    product.splice(0,200)
                    counter = 0 
    
    
                    if(products.length == gcart.length){
                        console.log(products)
                        res.send(products)
                    }
                }else{
                    if(products.length == gcart.length){
                        console.log(products)
                        res.send(products)
                    }
                }
            
            }
            // console.log('one')
        db.query('SELECT price,name FROM `STORE_products` WHERE id = ?',[value.prid],(err,result)=>{
            if(err){
                console.log(err)
            }else{
                if(result.length == 1){
                    const basicPrice = parseInt(result[0].price)
                    // console.log(result[0])
                    product.push({status:200,name:result[0].name,price:basicPrice})
                    counter ++
                    send()
    
    // size
                    if(value.size.state == 'null'){
                         counter ++
                         send();
                         // no size
                    }else{
                        db.query('SELECT * FROM `STORE_products_options` WHERE Sgroup = 1 AND Sto = ?',[value.prid],(err2,result2)=>{
                            if(err2){
                                console.log(err2)
                            }else{
                            // console.log(result2)
                            if(result2.length > 0){
                                if(JSON.parse(result2[0].array).length >= value.size.arnum){
                                    const si = JSON.parse(result2[0].array)[value.size.arnum]
                                    // console.log(si)
                                    if(si.enable == true && parseInt(si.instock) > 0){
                                        // console.log('yeaaa')
                                        product.push({status:200,name:si.name,price:parseInt(si.price)})
                                        counter ++
                                        send()
                                    }else{
                                        // not availble
                                        console.log('not availble')
                                        product.push({status:404,name:si.name,price:parseInt(si.price)})
                                        counter ++
                                        send();
                                    }
                                }else{
                                    product.push({status:404,name:'size',price:0})
                                    counter ++
                                    send();
                                }
      
    
                                
                            }else{
                                product.push({status:404,name:'size',price:0})
                                counter ++
                                send();
                            }  
    
                        }                
     })}
    
    
    // color
     if(value.color.state == 'null'){
         counter ++
         send();
         // no color
    }else{
        db.query('SELECT * FROM `STORE_products_options` WHERE Sgroup = 2 AND Sto = ?',[value.prid],(err2,result2)=>{
            if(err2){
                console.log(err2)
            }else{
    
            // console.log(result2)
            if(result2.length > 0){
                if(JSON.parse(result2[0].array).length >= value.color.arnum){
                    const si = JSON.parse(result2[0].array)[value.color.arnum]
                    // console.log(si)
                    if(si.enable == true && parseInt(si.instock) > 0){
                        // console.log('yeaaa')
                        product.push({status:200,name:si.color,price:0})
                        counter ++
                        send()
                    }else{
                        // not availble
                        product.push({status:404,name:si.color,price:0})
                        counter ++
                        send();
                    }
                }else{
                    product.push({status:404,name:'color',price:0})
                    counter ++
                    send();
                }
    
    
                
            }else{
                product.push({status:404,name:'color',price:0})
                counter ++
                send();
            }    
    
        }                
    })}
    
    
    
    if(value.op.state == 'null'){
        counter ++
        send();
        // no custom options
    }else{
       db.query('SELECT * FROM `STORE_products_options` WHERE Sgroup = 3 AND Sto = ?',[value.prid],(err2,result2)=>{
           if(err2){
               console.log(err2)
           }else{
    
        //    console.log(result2)
           if(result2.length > 0){
               const si = JSON.parse(result2[0].array)[value.op.arnum]
            //    console.log(si)
               if(si.enable == true && parseInt(si.instock) > 0){
                //    console.log('yeaaa')
                   product.push({status:200,name:si.optionName,price:si.price})
                   counter ++
                   send()
               }else{
                   // not availble
                   product.push({status:404,name:si.optionName,price:si.price})
                   counter ++
                   send();
               }
    
               
           }else{
               product.push({status:404,name:'custom options',price:0})
               counter ++
               send();
           }    
    
       }                
    })}
    
    // 
    
    // op
    
    
    
    
    
    
    
    
    
    
    
                }else{
                    // 
                    product.push({status:405,name:value.name,price:0})
                    counter = 4
                    send();
                }
            }
        })
         // console.log()
         if(counter == gcart.length ){
        //    setprice(sum)
          }
        });
    
    
    
    
    
        
    
       }else{
        // setproductsnum(0)
        // setprice(0)
      }
    
     
    
      
      }else{
        // setproductsnum(0)
        // setprice(0)
      }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // if(gcart){
    //     setproductsnum(gcart.length)
    //     setcart(gcart)
       // // console.log(gcart)
    //    if(gcart.length > 0){
    //     var sum = null;
    //     let counter = 0
    //     gcart.forEach(function(value, index, arry){
    
    //       // // // console.log(value)
    //     //   if(value.price){
    //     //     sum += parseInt(value.price);
    //     //   }
    
    
    
    //      counter++
    //      // console.log()
    //      if(counter == gcart.length ){
    //     //    setprice(sum)
    //       }
    //     });
    //    }else{
    //     // setproductsnum(0)
    //     // setprice(0)
    //   }
    
     
    
      
    //   }else{
    //     // setproductsnum(0)
    //   }
    })
//calculate shipping price

app.post('/shippingmethods',(req,res)=>{

    // const f = JSON.stringify([{"id":1,"name":"reg shipping","icon":"fa-solid fa-truck-fast","priceble":1,"type":1,price:12,to:11},{"id":1,"name":"PICK UP","icon":"fa-solid fa-boxes-packing","priceble":0,"type":1,price:12,to:11}])
    // db.query("INSERT INTO `STORE_shipping` (`id`, `name`, `array`, `type`, `price`, `worldwide`, `worldwide_price`, `visible`, `ptype`, `ptoc`, `shippingmethods`) VALUES (NULL, 'DHL', '[]', '5', NULL, NULL, NULL, '1', '5', '0', ?);",[f],(errd4,resdult4)=>{})
        const cart = req.body.cart
        const country = req.body.country
        
        let state = '%'+req.body.state+'%'
    var profiles = []
    var profiles2 = []
    if(cart){
        cart.map((g,i)=>{
            db.query('SELECT shipping FROM STORE_products WHERE id = ?',[g.prid],(err4,result4)=>{
                if(err4){
                    console.log(err4)
                    res.send({status:501})
                }else{
                    if(result4.length > 0){
                        profiles.push({id:result4[0].shipping})
                        profiles2.push(JSON.stringify(result4[0].shipping))
                        if(profiles.length == cart.length){
                            var meth = []
                            var r = profiles.filter(obj=>obj.id > 0);
                                    if(r.length > 0){
                                        // console.log(profiles2)
                                        db.query('SELECT id, `shippingmethods` FROM `STORE_shipping` WHERE id IN(?) AND type = 5',[profiles2],(err,result)=>{
                                            if(err){
                                                console.log(err)
                                            }else{
                                                // res.send(result)
                                                var end = []
                                                result.map((gf,i)=>{
                                                    var t = JSON.parse(gf.shippingmethods)
                                                    var e = []

                                                    // console.log(t)
                                                    const send = ()=>{
                                                        console.log(e)
                                                        end.push({id:gf.id,shippingmethods:JSON.stringify(e)})
                                                        if(end.length == result.length){
                                                            console.log(end)
                                                            res.send(end)
                                                        }
                                                    }
                                                    t.map((gff,ii)=>{
                                                            // console.log(ii)
                                                            var element = {}
                                                        if(gff.type == 1 && gff.priceble == 1){
                                                            db.query('SELECT * FROM STORE_shipping WHERE id = ? AND worldwide = 1 OR ptoc = ? AND name = ? AND ptype = 1 AND type = 2 OR ptoc = ? AND name = ? AND ptype = 1 AND type = 1 AND array = ? ORDER BY `STORE_shipping`.`id` DESC',[gff.to,gff.to,country,gff.to,country,state],(err9,result9)=>{

                                                                // console.log(result9[0])
                                                                if(err9){
                                                                    // console.log(err9)
                                                                    res.send({status:501})
                                                                }else if(result9.length > 0){
                                                            // console.log(result9)
                                                            e.push({id:gff.id,name:gff.name,icon:gff.icon,priceble:gff.priceble,type:gff.type,price:gff.price,to:gff.to,en:1})
                                                            if(e.length == t.length){
                                                                // console.log(e)
                                                                send()
                                                                // console.log('e')
                                                            }
                                                            // console.log(e)
                                                            // console.log('ddd')
                                                                }else{
                                                                    e.push({id:gff.id,name:gff.name,icon:gff.icon,priceble:gff.priceble,type:gff.type,price:gff.price,to:gff.to,en:0})
                                                                    if(e.length == t.length){
                                                                        // console.log(e)
                                                                        send()
                                                                        // console.log('e')
                                                                    }
                                                                }
                                                            })
                                                                                                                    }else{
                                                            // alr
                                                            // console.log('pick up')
                                                            e.push({id:gff.id,name:gff.name,icon:gff.icon,priceble:gff.priceble,type:gff.type,price:gff.price,to:gff.to,en:1})
                                                            if(e.length == t.length){
                                                                // console.log(e)
                                                                send()
                                                                // console.log('e')
                                                            }
                                                        }
                                                    })


                                                })
                                            }
                                        })
                                    }else{
                                        res.send({status:1})
                                    }
                            // console.log(profiles)
                        }
                    }else{
                        // res.send({status:2})
                        profiles.push({id:0})
                    }
      
                }
            
            })
                })
    }else{
        res.send({status:404})
    }
    
    
})

app.post('/changesettings',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
    const name = req.body.name;
    const currency = req.body.currency
     var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    db.query('SELECT STORE_users.user, STORE_rank.* FROM STORE_users INNER JOIN STORE_rank ON STORE_users.rank=STORE_rank.name WHERE STORE_users.userToken = ? AND user = ?',[userToken,usernamevefy],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                res.send({status:0})
            }else if(result.length == 1){
                //check permissions
                var s = result[0].perm
                if(s.indexOf(',6,') > -1){
                 db.query("UPDATE `STORE_info` SET `name` = ?, `currency` = ? WHERE `STORE_info`.`id` = 1;",[name,currency],(err2,result2)=>{
                     if(err2){
                        console.log(err2)
                     }else{
                        res.send({status:501})
                     }
                 })
            db.query('INSERT INTO `STORE_logs` (`made_by`, `wchange`, `date`,ip) VALUES ("UNKNOWN","tried to login",?,?)',[cur_time,ip],(err96,result96) => {
                if(err96){
                    console.log(err96)
                }
            })
                }else{
                    res.send({status:22})
                }


            }else{
                res.send({status:2})
            }
        }
    })
})





app.post('/addusers',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
    const user = req.body.user
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const rank = req.body.rank
    if(user && name && email && password && rank){
    if(user.length < 2 && name.length < 2 && email.length < 4 && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false && password.length < 7 && rank.length < 1){
        res.send({status:404})
    }else{
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
        const userkon = uuidv1() + uuidv4() + user + ip + uuidv4()
    db.query('SELECT STORE_users.user, STORE_rank.* FROM STORE_users INNER JOIN STORE_rank ON STORE_users.rank=STORE_rank.name WHERE STORE_users.userToken = ? AND user = ?',[userToken,usernamevefy],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //check permissions
                var s = result[0].perm
                if(rank == 'Owner' && result[0].name != 'Owner'){
                    res.send({status:22})
                }else{
                if(s.indexOf(',9,') > -1){
                 //all good
                //do your thing
                db.query('SELECT id FROM STORE_users WHERE user = ?',[user],(err3,result3)=>{
                    if(err3){
                        console.log(err3)
                        res.send({status:501})
                    }else{
                        if(result3.length == 0){
                            db.query('INSERT INTO `STORE_users` (`user`, `name`, `email`,password,rank,userToken) VALUES (?,?,?,?,?,?)',[user,name,email,password,rank,userkon],(err4,result4) => {
                                if(err4){
                                    console.log(err4)
                                }else{
                                    console.log(result4)
                                    res.send({status:200})
                                    db.query('INSERT INTO `STORE_logs` (`made_by`, `wchange`, `date`,ip) VALUES ("UNKNOWN","tried to login",?,?)',[cur_time,ip],(err96,result96) => {
                                        if(err96){
                                            console.log(err96)
                                        }
                                    })
                                }
                            })
                        }else{
                            res.send({status:201})
                        }
                    }
                })



                }else{
                    res.send({status:22})
                }}


            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })}}else{
        res.send({status:404})
    }
})

app.post('/getusers',(req, res)=>{
        const userToken = req.body.userToken
    const usernamevefy = req.body.username
    
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    db.query('SELECT STORE_users.user, STORE_rank.* FROM STORE_users INNER JOIN STORE_rank ON STORE_users.rank=STORE_rank.name WHERE STORE_users.userToken = ? AND user = ?',[userToken,usernamevefy],(err,result) => {
        if(err){
            console.log(err)
        }else{
            if(result.length == 0){
                //kick him 
                res.send({status:0})
            }else if(result.length == 1){
                //check permissions
                var s = result[0].perm

                if(s.indexOf(',9,') > -1){
                 //all good
                //do your thing
                db.query('SELECT name,email,rank FROM STORE_users',[],(err3,result3) => {
                    if(err3){
                        console.log(err3)
                    }else{
                        res.send(result3)
                    }
                })
                }else{
                    res.send({status:22})
                    // console.log('f')
                }


            }else{
                res.send({status:2})
                //send this request to support
            }
        }
    })
})

app.post('/getproductsbycategory',(req, res)=>{
    const catid = req.body.id
    const limit = req.body.limit
    const idss = '%'+ catid + ',%'
    db.query('SELECT DISTINCT * FROM `STORE_products` WHERE catagorys LIKE ? LIMIT 50',[idss],(err33,result33)=>{
if(err33){
    res.send({status:500})
}else{
    res.send(result33)
}
    })
    })
    app.post('/getcatagorysshoptoo',(req, res)=>{
        const limit = req.body.limit
        const catid = req.body.id
        db.query('SELECT * FROM `STORE_catagory` WHERE id = ? ORDER BY `STORE_catagory`.`corder` ASC',[catid],(err1,result1)=>{
           if(err1){
               console.log(err1)
               res.send({status:"something wrong happened"})
           }else{
            //    console.log('here')
            //    console.log(result1)
               res.send(result1)
           }
        })
        })
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));