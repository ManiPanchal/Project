const dbaorders=require("./dbaorders");
const findall=dbaorders.find_item;
module.exports=(req,res)=>{
    if(req.session.is_logged_in)
    {
        let data=findall(req.session.email)
        data.then(function(data)
        {
            res.send(JSON.stringify(data));
            return;
        })
    }
    else{
        res.redirect("/login");
        return;
    }
}