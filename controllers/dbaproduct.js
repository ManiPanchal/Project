const connection=require("./connection");
const fs=require("fs");
function product_five(x)
{
    return new Promise(function(resolve,reject)
    {
      var con=connection();
          con.connect(function(err) {
            if (err) throw err;
            con.query(`SELECT * FROM products where flag="A" limit ${x}`, function (err, result, fields) {
              if (err) return reject(err);
              if(result)
              {
                // SELECT * FROM products where flag="A" limit 5 offset ${x}
                 resolve(JSON.parse(JSON.stringify(result)));
              }
            });
          });
    })

}
function find_a()
{
    return new Promise(function(resolve,reject)
    {
      var con=connection();
          con.connect(function(err) {
            if (err) throw err;
            con.query(`SELECT * FROM products where flag="A"`, function (err, result, fields) {
              if (err) return reject(err);
              if(result)
              {
                 resolve(JSON.parse(JSON.stringify(result)));
              }
            });
          });
    })
}
function find_all()
{
    return new Promise(function(resolve,reject)
    {
      var con=connection();
          con.connect(function(err) {
            if (err) throw err;
            con.query(`SELECT * FROM products`, function (err, result, fields) {
              if (err) return reject(err);
              if(result)
              {
                 resolve(JSON.parse(JSON.stringify(result)));
              }
            });
          });
    })
}
function create_new(ob)
{
    return new Promise(function(resolve,reject)
    {
      var con=connection();
          con.connect(function(err) {
            if (err) throw err;
            con.query(`Insert into products values("${ob.productname}","${ob.price}",${ob.price,ob.quantity},"${ob.product_id}","${ob.details}","${ob.image}","${ob.s_email}","R")`, function (err, result, fields) {
              if (err) return reject(err);
              if(result)
              {
                 resolve(1);
              }
            });
          });
    })
}
function delete_one(id)
{
    return new Promise(function(resolve,reject)
    {
      var con=connection();
          con.connect(function(err) {
            
            if (err) throw err;
            con.query(`update products set flag="D" where product_id="${id}"`, function (err, result, fields) {
              if (err) return reject(err);
              if(result)
              {
                // delete from products where product_id="${id}"
                 resolve(1);
              }
            });
          });
    })
}
function update_one(id,productname,discription,price,quantity)
{
    return new Promise(function(resolve,reject)
    {
      var con=connection();
          con.connect(function(err) {
            if (err) throw err;
            con.query(`update products set productname="${productname}",details="${discription}",price="${price}",quantity="${quantity}" where product_id="${id}"`, function (err, result, fields) {
              if (err) return reject(err);
              if(result)
              {
                 resolve(1);
              }
            });
          });
    })
}
function find_product(id)
{
  return new Promise(function(resolve,reject)
  {
    var con=connection();
        con.connect(function(err) {
          if (err) throw err;
          con.query(`select * from products where product_id="${id}"`, function (err, result, fields) {
            if (err) return reject(err);
            if(result)
            {
               resolve(JSON.parse(JSON.stringify(result)));
            }
          });
        });
  })
}
function update_pro(id,q)
{
  return new Promise(function(resolve,reject)
  {
    var con=connection();
        con.connect(function(err) {
          if (err) throw err;
          con.query(`update products set quantity=${q} where product_id="${id}"`, function (err, result, fields) {
            if (err) return reject(err);
            if(result)
            {
               resolve(JSON.parse(JSON.stringify(result)));
            }
          });
        });
  })
}
function add_q(id,q)
{
  return new Promise(function(resolve,reject)
  {
    var con=connection();
        con.connect(function(err) {
          if (err) throw err;
          con.query(`update products set quantity=quantity+${q} where product_id="${id}"`, function (err, result, fields) {
            if (err) return reject(err);
            if(result)
            {
              resolve(1);
            }
          
          });
        });
  })
}
function getpro(email)
{
  return new Promise(function(resolve,reject)
  {
    var con=connection();
        con.connect(function(err) {
          if (err) throw err;
          con.query(`SELECT * FROM products where s_email="${email}" AND flag="D"`, function (err, result, fields) {
            if (err) return reject(err);
            if(result)
            {
              // SELECT * FROM deleted_product where s_email="${email}"
               resolve(JSON.parse(JSON.stringify(result)));
            }
          
          });
        });
  })
}
function getprod(email)
{
  return new Promise(function(resolve,reject)
    {
      var con=connection();
          con.connect(function(err) {
            if (err) throw err;
            con.query(`SELECT * FROM products where s_email="${email}" AND flag="R"`, function (err, result, fields) {
              if (err) return reject(err);
              if(result)
              {
                 resolve(JSON.parse(JSON.stringify(result)));
              }
            });
          });
    })
}
function update_flag(id)
{
  return new Promise(function(resolve,reject)
  {
    var con=connection();
        con.connect(function(err) {
          if (err) throw err;
          con.query(`update products set flag="A" where product_id="${id}"`, function (err, result, fields) {
            if (err) return reject(err);
            if(result)
            {
               resolve(1);
            }
          });
        });
  })
}
function changestate(id,u_e,s,email)
{
  return new Promise(function(resolve,reject)
  {
    var con=connection();
        con.connect(function(err) {
          if (err) throw err;
          con.query(`update orders set state="${s}" where product_id="${id}" AND s_email="${email}" AND email="${u_e}"`, function (err, result, fields) {
            if (err) return reject(err);
            if(result)
            {
               resolve(1);
            }
          
          });
        });
  })
}
function get_seller(email)
{
  return new Promise(function(resolve,reject)
  {
    var con=connection();
        con.connect(function(err) {
          if (err) throw err;
          con.query(`SELECT * FROM products where s_email="${email}"`, function (err, result, fields) {
            if (err) return reject(err);
            if(result)
            {
               resolve(JSON.parse(JSON.stringify(result)));
            }
          
          });
        });
  }) 
}
function search(value)
{
  return new Promise(function(resolve,reject)
  {
    var con=connection();
        con.connect(function(err) {
          if (err) throw err;
          con.query(`SELECT * FROM products where productname like "%${value}%"`, function (err, result, fields) {
            if (err) return reject(err);
            if(result)
            {
               resolve(JSON.parse(JSON.stringify(result)));
            }
          
          });
        });
  }) 
}
function add_many()
{
    let data=fs.readFile("data.txt","utf-8",(err,data)=>{
      if(err)
      {
        console.log(err);
      }
  let count=0;
      data=JSON.parse(data);
      console.log(data);
      console.log(data.length);
      return new Promise(function(resolve,reject)
  {
    var con=connection();
        con.connect(function(err) {
          for(let i=0;i<data.length;i++)
          {
            if (err) throw err;
            con.query(`insert into products values("${data[i].productname}",${data[i].price},${data[i].quantity},${data[i].product_id+1},"${data[i].details}","${data[i].image}","${data[i].s_email}","${data[i].flag}")`, function (err, result, fields) {
              if (err) return reject(err);
              if(result)
              {
                //  resolve(JSON.parse(JSON.stringify(result)));
                count++;
                if(count==data.length)
                {
                  resolve(1);
                }
              }
            
            });
          }
          
        });
  })
      
    })
}
function find_next(x,off)
{
    return new Promise(function(resolve,reject)
    {
      var con=connection();
          con.connect(function(err) {
            if (err) throw err;
            con.query(`SELECT * FROM products where flag="A" limit ${x} offset ${off}`, function (err, result, fields) {
              if (err) return reject(err);
              if(result)
              {
                // SELECT * FROM products where flag="A" limit 5 offset ${x}
                 resolve(JSON.parse(JSON.stringify(result)));
              }
            });
          });
    })

}
function find_count()
{
  return new Promise(function(resolve,reject)
  {
    var con=connection();
        con.connect(function(err) {
          if (err) throw err;
          con.query(`SELECT count(productname) as count FROM products where flag="A"`, function (err, result, fields) {
            if (err) return reject(err);
            if(result)
            {
              // SELECT * FROM products where flag="A" limit 5 offset ${x}
               resolve(JSON.parse(JSON.stringify(result)));
            }
          });
        });
  })

}
module.exports={product_five,find_all,create_new,delete_one,update_one,find_product,update_pro,add_q,getpro,getprod,update_flag,changestate,get_seller,search,add_many,find_a,find_next,find_count};