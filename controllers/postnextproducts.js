const dbaproduct=require("./dbaproduct");
const find_next=dbaproduct.find_next;
module.exports=(req,res)=>{
    let count=req.body.x;
    let off=req.body.off;
    let data=find_next(count,off)
    data.then(function(data){
        res.send(JSON.stringify(data));
        return;
    })
}