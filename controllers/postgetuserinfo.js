const dbauserinfo=require("./dbauserinfo");
const find_user=dbauserinfo.getuser;
module.exports=(req,res)=>{
    let data=find_user(req.session.email)
    data.then(function(data){
        res.send(JSON.stringify(data));
        return;
    })
}