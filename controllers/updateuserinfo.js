const { updateuserinfo } = require("./dbauserinfo");

module.exports=(req,res)=>{
    // console.log(req.body);
    let data=updateuserinfo(req.session.email,req.body.name,req.body.pincode,req.body.phone,req.body.state,req.body.city,req.body.add)
    data.then(function(data)
    {
        if(data==1)
        {
            res.end("ok");
            return;
        }
        else{
            res.end("okk");
            return;
        }
    })
}