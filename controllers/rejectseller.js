const dbaseller=require("./dbaseller");
const del=dbaseller.del;
const sendMail=require("../methods/sendmail");
module.exports=(req,res)=>{
    let data=del(req.body.email)
    data.then(function(data)
    {
        if(data==1)
        {
            sendMail(req.body.email,null,`<p>Sorry to inform You but you are not able to become seller in E-MART </p>`,function(err,data)
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