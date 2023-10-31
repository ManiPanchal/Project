const dbauser=require("./dbauser");
const findunique=dbauser.find_user;
const find_admin=dbauser.find_admin;
const dbaseller=require("./dbaseller");
const find=dbaseller.find;
const dbadispatch=require("./dbadispatch");
const find_state=dbadispatch.find_dispatcher;
module.exports=function postlogin(req, res) {
    
       const name=req.body.name;
       const email=req.body.email;
       const password=req.body.password;
         let user=findunique(name,email,password)
       user.then(function(data)
       {
          if(data.length>0)
          {
            // console.log(data[0]);
            req.session.email=data[0].email;
            req.session.is_logged_in = true;
            req.session.user=data[0];
            let data2=find_admin(req.session.email)
            data2.then(function(data)
            {
              //  console.log(data);
               if(data==1)
               {
                  //  console.log(data);
                   res.redirect("/admin");
                   return;
               }
               else{
                   res.redirect("/product");
                   return;
   
               }
             
            })
          } 
           else if(data.length==0)
          {
            
              let data3=find(email,name,password)
              data3.then(function(d)
              {
                if(d.length>0)
                {
                  req.session.email=d[0].s_email;
                  req.session.is_logged_in = true;
                  req.session.user=d[0];
            
                   res.redirect("/seller");
                   return;
                }
                else{
                  let data4=find_state(email,password,name)
                  data4.then(function(data4)
                  {
                    // console.log(data4);
                    if(data4.length>0)
                    {
                      req.session.email=data4[0].email;
                      req.session.is_logged_in = true;
                  // req.session.user=d[0];
            
                      if(data4[0].state_name=="haryana")
                      {
                        res.redirect("/state");
                        return;
                      }
                      else{
                        res.redirect("/city");
                        return;
                      }
                    }
                    else{
                      res.render("login",{data:"Enter valid data"});
                      return;
                    }
                  })
                  
                }
              })
          }
          // else
          // {
          //   res.render("login",{data:"Enter valid data"});
          // }
          
       },()=>{
         res.render("login",{data:"Something went wrong"});
         return;
       })
      
    //    var productModel=new ProductModel;
    //    productModel.productname="Cap";
    //    productModel.price="Rs.299";
    //         productModel.quantity="5";
    //         productModel.product_id="213012";
    //         productModel.details="Men Cap & Hat";
    //         productModel.image="cap.jpg";
    //         productModel.save();
                
            }
    