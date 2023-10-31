let id, count = 5,off=0,a=0,b=0;
var total_products;
// let search=document.getElementById("search");
let view_btn = document.getElementById("view");
// console.log(search);
find_count();

function find_count()
{
    const request=new XMLHttpRequest();
    request.open("POST","/findcount");
    request.setRequestHeader("content-type","application/json");
    request.send();
    request.addEventListener("load",()=>{
         total_products=JSON.parse(request.responseText);
         total_products=total_products[0].count;
        //  console.log(total_products);
    })
}



const request = new XMLHttpRequest();
request.open("POST", "/addproducts");
request.setRequestHeader("content-type", "application/json");
request.send(JSON.stringify({ x: count }));
request.addEventListener("load", () => {
  // let start=0,end=5;
  const data = JSON.parse(request.responseText);
  count = count + data.length;
  load_item(data);

  function load_item(data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].quantity > 0) {


        let product = document.getElementById("products");
        let item = document.createElement("div");
        item.setAttribute("class", "img_div");
        let img = document.createElement("img");
        let img1 = data[i].image;
        img.setAttribute("src", `profile/${img1}`);
        item.appendChild(img);
        let p1 = document.createElement("p");
        p1.innerHTML = data[i].productname;
        item.appendChild(p1)
        let p2 = document.createElement("p");
        p2.innerHTML = data[i].price;
        item.appendChild(p2);
        let p3 = document.createElement("p");
        p3.innerHTML = data[i].details;
        p3.style.display = "none";
        item.appendChild(p3);
        let p4 = document.createElement("p");
        p4.innerHTML = `Only ${data[i].quantity} left!! Hurry Up`;
        if (data[i].quantity < 10) {
          p4.setAttribute("class", "block");
        }
        else {
          p4.setAttribute("class", "none");
        }
        item.appendChild(p4);
        let btn2 = document.createElement("input");
        btn2.setAttribute("type", "button");
        btn2.value = "Add To Cart";
        btn2.setAttribute("id", data[i].product_id);
        item.appendChild(btn2);
        btn2.addEventListener("click", add_to_cart);
        let btn = document.createElement("input");
        btn.setAttribute("type", "button");
        btn.setAttribute("id", Math.random());
        btn.value = "View Details";
        p3.setAttribute("id", btn.id + 1);
        item.appendChild(btn);
        btn.addEventListener("click", view);

        product.appendChild(item);
        // if(i+1==data.length)
        // {
        //   document.getElementById("view").style.display="none";
        // }
      }
    }
  }
  function add_to_cart(e) {
    const request = new XMLHttpRequest();
    request.open("POST", "/cart");
    request.setRequestHeader("content-type", "application/json");
    request.send(JSON.stringify({ product_id: e.target.id }));
    request.addEventListener("load", () => {
      if (request.responseText === "already") {
        swal({
          title: "Item already in cart",
          icon: "warning"
        })
      }
      else if (request.responseText === "okk") {
        swal({
          title: "Item is added to cart",
          icon: "success"
        })
      }
      else {
        window.location.href = "/login";
      }
    })
  }
  function view(e) {
    let value = e.target.parentNode.getElementsByTagName("p");
    swal({
      title: "Product Details",
      text: `${value[2].innerHTML} for ${value[1].innerHTML}`,
    })

  }
  
  // console.log(view_btn.value);
  view_btn.addEventListener("change", () => {
    // console.log(view_btn.value);
    add(1);
    function add(s)
   {
    console.log(s);
      n=view_btn.value;
      s=(s-1)*n;
      // console.log(s);
      const request=new XMLHttpRequest();
      request.open("POST","/nextproducts");
      request.setRequestHeader("content-type","application/json");
      request.send(JSON.stringify({x:n,off:s}));
      request.addEventListener("load",()=>{
        const data=JSON.parse(request.responseText);
        let product = document.getElementById("products");
        product.innerHTML="";
        // off=+off+ parseInt(view_btn.value);
        // console.log(off);
        load_item(data);
        
      })
  }
createnumbering(total_products,n);
function createnumbering(totals,total){

  $('#pagination').pagination({    
     items: totals, 
     itemsOnPage: total,  
     onPageClick: add,
 });
 }
    // const request = new XMLHttpRequest();
    // request.open("POST", "/addproducts");
    // request.setRequestHeader("content-type", "application/json");
    // request.send(JSON.stringify({ x: view_btn.value }));
    // request.addEventListener("load", () => {
    //   const data = JSON.parse(request.responseText);
    //   let product = document.getElementById("products");
    //   product.innerHTML = "";
    //   count = count + data.length;
    //   off=view_btn.value;
    //   load_item(data);
    // })

  })


 
  // let next=document.getElementById("next");
  // next.addEventListener("click",()=>{
  //   console.log(off);
  //   if(view_btn.value=="View")
  //   {
  //     swal({
  //       title: "Select the Limit",
  //       icon: "warning"
  //     })
  //   }
  //   else{
  //     a++;
  //     
  //   }
    
  // })
  // let prevoius=document.getElementById("previous");
  // prevoius.addEventListener("click",()=>{
  //   // if(off==0)
  //   // {
  //   //   prevoius.style.display="none";
  //   // }
    
  //   if(view_btn.value=="View")
  //   {
  //     swal({
  //       title: "Select the Limit",
  //       icon: "warning"
  //     })
  //   }
  //   else{
  //     if(off==0 ||a==0)
  //     {
  //       swal({
  //         title: "No More prevoius products available",
  //         icon: "warning"
  //       })
        
  //     }
  //     else{
  //       if(b==0)
  //       {
  //         off=+off- parseInt(view_btn.value);
  //       }
  //       b++;
  //       off=+off- parseInt(view_btn.value);
  //       const request=new XMLHttpRequest();
  //       request.open("POST","/nextproducts");
  //       request.setRequestHeader("content-type","application/json");
  //       request.send(JSON.stringify({x:view_btn.value,off:off}));
  //       request.addEventListener("load",()=>{
  //         const data=JSON.parse(request.responseText);
  //         let product = document.getElementById("products");
  //         product.innerHTML="";
          
  //         console.log(off);
  //         load_item(data);
  //       })
  //     }
      
  //   }
  // })
  // let multiple = document.getElementById("multiple");
  // multiple.addEventListener("click", () => {
  //   const request = new XMLHttpRequest();
  //   request.open("GET", "/addmultiple");
  //   // request.setRequestHeader("content-type","application/json");
  //   request.send();
  //   request.addEventListener("load", () => {
  //     if (request.responseText == "ok") {
  //       swal({
  //         title: "Item is added to cart",
  //         icon: "success"
  //       })
  //     }

  //   })
  // })
    // console.log(view_btn);
    // view_btn.addEventListener("click",()=>{
    //  const request=new XMLHttpRequest();
    //  request.open("POST","/addproducts");
    //  request.setRequestHeader("content-type","application/json");
    //  request.send(JSON.stringify({x:count}));
    //  request.addEventListener("load",()=>{
    //   const data=JSON.parse(request.responseText);
    //   if(data.length<5)
    //   {
    //     document.getElementById("view").style.display="none";
    //   }
    //   count=count+data.length;
    //   load_item(data);
    //  })
    // })
    let search = document.getElementById("search");
    search.addEventListener("keyup", fun_sear);
    //  search.addEventListener("keydown",no_search);
    function fun_sear(e) {
      let product = document.getElementById("products");
      product.innerHTML = "";
      if (search.value.trim() == "") {
        // product.innerHTML="";
        count = 0;
        const request = new XMLHttpRequest();
        request.open("POST", "/addproducts");
        request.setRequestHeader("content-type", "application/json");
        request.send(JSON.stringify({ x: count+5 }));
        request.addEventListener("load", () => {
          // let start=0,end=5;
          const data = JSON.parse(request.responseText);
          count = count + data.length;
          load_item(data);

        })
      }
      else {
        // let product=document.getElementById("search_pro");
        //   product.innerHTML="";
        const request = new XMLHttpRequest();
        request.open("POST", "/search");
        request.setRequestHeader("content-type", "application/json");
        request.send(JSON.stringify({ value: search.value }));
        request.addEventListener("load", () => {
          // console.log(request.responseText);
          let data = JSON.parse(request.responseText);
          //  console.log(data);
          if (data.length > 0) {

            load_item(data);

          }
        })
      }
    }
  })
