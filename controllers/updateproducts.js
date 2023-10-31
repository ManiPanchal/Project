const dbaproduct=require("./dbaproduct");
const update_pro=dbaproduct.update_pro;
module.exports=(req,res)=>{
    let data=req.body;
    for(let i=0;i<data[1].length;i++)
    {
        let promise=update_pro(data[1][i].product_id,data[1][i].quantity-data[1][i].curr_quantity);
    }
    res.end("ok");
    return;
}