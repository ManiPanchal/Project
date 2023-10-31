const dbaseller=require("./dbaseller");
const update=dbaseller.updation;
const sendMail=require("../methods/sendmail");

module.exports=(req,res)=>{
    let data=update(req.body.email)
    data.then(function(data)
    {
        if(data==1)
        {
            sendMail(req.body.email,null,`<p>E-Mart welcomes you as a seller</p>`,function(err,data)
            {
                if(err)
                {
                    res.end("okk");
                    return;
                }
                else{
                    res.end("ok");
                    return;
                }
            })
            
        }
    })
    data.catch(function(err)
    {
        console.log(err);
    })
}