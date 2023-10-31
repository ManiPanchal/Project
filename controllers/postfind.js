const dbaproduct=require("./dbaproduct");
const find_count=dbaproduct.find_count;
module.exports=(req,res)=>{
    let count=find_count()
    count.then(function(count){
        res.send(JSON.stringify(count));
        return;
    })
}