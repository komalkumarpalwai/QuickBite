
//new products
let conatainer=document.querySelector(".conatainer")

let basket=JSON.parse(localStorage.getItem("data"))||[];

let genreateproducts=()=>

{
return (conatainer.innerHTML=productdat.map((x)=>{
let {name,id,price,img}=x;
let search=basket.find((x)=>x.id===id)||[]
    return `<div id=product-id${id} class="product-item">
    <div class="images">
    <img src=${img} alt="">
    </div>
    <div class=details>
   <h3 class="name">
   ${name}
   <br>
     </h3>
     
     <h3 class="price">price:-₹ ${price}</h3>
     
     <p class="description">${x.description}</p>
     </div>
    
    <div class="values">
    <h3 class="select-quantity">SelctQuantity</h3>
    <div onclick="decrement(${id})" class="plus"><p>-</p></div>

    <div onclick="update()" id=${id}  id="update"><p>${search.item===undefined?0:search.item}</p></div>

<div onclick ="increment(${id})"class="minus"><p>+</p></div>
<div class="btn"><button>Order Now</button></div> </div>  </div>
  
    `
})
.join(""));
};
genreateproducts();
let increment=(id)=>{
let search=basket.find((x)=>x.id===id);
if(search=== undefined){
    basket.push({
        id:id,
        item:1,
     })
}else
{
    search.item += 1;
}update(id);
basket=basket.filter((x)=>x.item!==0);


localStorage.setItem("data",JSON.stringify(basket))


//console.log(basket)
}
let decrement=(id)=>{
    
        let search=basket.find((x)=>x.id===id);
        if(search.item=== 0){
           return ;
        }else
        {
            search.item -= 1;
        }
        update(id);
      //  console.log(basket);
       
        }


let update=(id)=>{
    let search=basket.find((x)=>x.id===id);

   document.getElementById(id).innerHTML=search.item;
calculations();

}

let calculations=()=>
{
let dot=document.querySelector(".dot")
dot.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>x+y,0);
}
calculations();