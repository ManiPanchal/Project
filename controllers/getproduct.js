const dbauser=require("./dbauser");
const find_admin=dbauser.find_admin;

module.exports=(req,res)=>{
    if(req.session.is_logged_in)
    {
        let data2=find_admin(req.session.email)
        data2.then(function(data)
        {
          
           if(data==1)
           {
               res.redirect("/admin");
                return;
           }
           else{
            res.render("product",{data:req.session.user.name});
            return;
           }
        })

        // if(req.session.email=="manishapanchal5591@gmail.com")
        // {
        //     res.redirect("/admin");
        //     return;
        // }
        // else{
        //     res.render("product",{data:req.session.user.name});
        //     return;
        // }  
    }
    else
    {
        res.render("product",{data:"User"});
    }
}