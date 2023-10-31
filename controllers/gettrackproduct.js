const { find_st } = require("./dbaorders")

module.exports=(req,res)=>{
    let data=find_st(req.session.email,req.session.pro_id)
    data.then(function(data)
    {
        if(data.length>0)
        {
            res.send(JSON.stringify(data));
            return;
        }
    })
}