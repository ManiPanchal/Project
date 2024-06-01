const dbaorder=require("./dbaorders");
const find_state=dbaorder.find_state;
module.exports=(req,res)=>{
    // console.log(req.body.id);
    req.session.pro_id=req.body.id;
    req.session.pro_d=req.body.d;
    res.end("ok");
    return;
    // let data=find_state(req.session.email,req.body.id)
    // data.then(function(data)
    // {
    //     if(data.length>0)
    //     {
    //         console.log(data);
    //          res.render("track",{});
    //         // res.send(JSON.stringify(data));
    //          return;
    //     }
    //     // res.send(JSON.stringify(data));
    //     // return;
    // })
}