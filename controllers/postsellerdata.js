const { response } = require("express");
const dbaseller=require("./dbaseller");
const insert=dbaseller.insert;
const dbauser=require("./dbauser");
const check=dbauser.finduser;
module.exports=(req,res)=>{
    // console.log(req.body);
    let data2=check(req.body.email)
    data2.then(function(data2)
    {
        // console.log(data2);
        if(data2==1)
        {
            res.end("okk");
            return;
        }
        else{
            let data3=dbaseller.find_seller(req.body.email)
            data3.then(function(data3)
            {
                if(data3==1)
                {
                    res.end("okkk");
                    return;
                }
                else{
                    let data=insert(req.body.name,req.body.email,req.body.aadhar,req.body.password)
                    data.then(function(data)
                    {
                        if(data==1)
                        {
                            res.end("ok");
                            return;
                        }
                    })
                    data.catch(function(err)
                    {
                        console.log(err);
                    })
                        }
                    })
                }
            })
           
    
}