const dbaproduct=require("./dbaproduct");
const add_many=dbaproduct.add_many;
module.exports=(req,res)=>{

        let data=add_many()
        data.than(function(data)
        {
            if(data==1)
            {
                res.end("ok");
                return;
            }
        })
        return;
    
    
}