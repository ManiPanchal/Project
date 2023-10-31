const dbaproduct=require("./dbaproduct");
const find_all=dbaproduct.get_seller;

module.exports=(req,res)=>{
    if(req.session.is_logged_in)
    {
        let data=find_all(req.session.email)
        data.then(function(data)
        {
        res.send(JSON.stringify(data));
        })
    }
    else{
        res.redirect("/login");
        return;
    }
    
}