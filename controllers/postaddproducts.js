const dbaproduct=require("./dbaproduct");
const findfive=dbaproduct.product_five;
const find_all=dbaproduct.find_a;
module.exports=(req,res)=>
{
    x=req.body.x;
    if(x=="all")
    {
        let products=find_all()
        products.then(function(products)
        {
            res.send(JSON.stringify(products));
        })
    }
    else{
        let products=findfive(x)
    products.then(function(products)
    {
        res.send(JSON.stringify(products));
    })
    }
   
}