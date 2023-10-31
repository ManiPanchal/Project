function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.material-symbols-outlined',)) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



const request=new XMLHttpRequest();
request.open("GET","/admin_products");
request.send();
request.addEventListener("load",()=>
{
  
    const data=JSON.parse(request.responseText);
     load_item(data);
     function load_item(data)
     {
        for(let i=0;i<data.length;i++)
                    {
                        if(data[i].flag=="R")
                        {
                            console.log("inside load item");
                        let br=document.createElement("br");
                        let product=document.getElementById("second");
                        let item=document.createElement("div");
                        item.setAttribute("class","img_div");
                        item.setAttribute("id",data[i].product_id);
                        let img=document.createElement("img");
                        let img1=data[i].image;
                        img.setAttribute("src",`profile/${img1}`);
                        item.appendChild(img);
                        img.appendChild(br);
                        let l1=document.createElement("label");
                        l1.innerHTML="Product Name:";
                        item.appendChild(l1)
                        let i1=document.createElement("input");
                        i1.setAttribute("type","text");
                        i1.value=data[i].productname;
                        item.appendChild(i1);
                        let l2=document.createElement("label");
                        l2.innerHTML="Discription:";
                        item.appendChild(l2);
                        let i2=document.createElement("input");
                        i2.setAttribute("type","text");
                        i2.value=data[i].details;
                        item.appendChild(i2);
                        let l3=document.createElement("label");
                        l3.innerHTML="Product Price:";
                        item.appendChild(l3);
                        let i3=document.createElement("input");
                        i3.setAttribute("type","text");
                        i3.value=data[i].price;
                        item.appendChild(i3);
                        let l4=document.createElement("label");
                        l4.innerHTML="Product Quantity:";
                        item.appendChild(l4);
                        let i4=document.createElement("input");
                        i4.setAttribute("type","text");
                        i4.value=data[i].quantity;
                        item.appendChild(i4);
                        product.appendChild(item);
                    }
                    }
     }
    
     let allowedtype=["jpeg","jpg","png"];
     let btn=document.getElementById("btn");
     btn.addEventListener("click",check);
     function check()
     {
        let p_name=document.getElementById("p_name");
        let dis=document.getElementById("dis");
        let p_price=document.getElementById("p_price");
        let quan=document.getElementById("quan");
        let file_up=document.getElementById("file_uploads");
        let type=file_up.value.split(".");
        
        if(p_name.value.trim()==""&&dis.value.trim()==""&&p_price.value.trim()==""&&quan.value.trim()=="")
        {
            swal({
                    title:"Please Fill out all the fields",
                    icon:"warning"
                })
            // alert("Please fill out all the fields");
        }
        else if(file_up.value=="")
        {
            swal({
                    title:"Choose a file of upto 2kb size",
                    icon:"warning"
                })
            // alert("Choose a file of upto 2kb size");
        }
        else if(file_up.size>2028)
        {
            swal({
                    title:"Choose a file of upto 2kb size",
                    icon:"warning"
                })
            // alert("Choose a file of upto 2kb size");
        }
        else if(!allowedtype.includes(type[1]))
        {
            swal({
                    title:"Select a image of png,jpg,jpeg type",
                    icon:"warning"
                })
            // alert("Select a image of png,jpg,jpeg type");
            file_up.value="";
        }
        else{
                const request=new XMLHttpRequest();
                request.open("POST","/adminproduct");
                // request.setRequestHeader("Content-Type","application/json");
               let b=new FormData();
               b.append("name",p_name.value.trim());
               b.append("discription",dis.value.trim());
               b.append("price",p_price.value.trim());
               b.append("quantity",quan.value.trim());
               b.append("pic",file_up.files[0]);
               request.send(b);
                // request.send(JSON.stringify({name:p_name.value.trim(),discription:dis.value.trim(),price:p_price.value.trim(),quantity:quan.value.trim(),file:file_up.value}));
                request.addEventListener("load",()=>
                {
                   let  data2=JSON.parse(request.responseText);
                   console.log(data2);
                    load_item(data2);
                    swal({
                            title:"Item Added successfully",
                            icon:"success"
                         })
                })
                p_name.value="";
                dis.value="";
                p_price.value="";
                quan.value="";
                file_up.value="";
           }
     }
        
    })   
