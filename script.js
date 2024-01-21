// let menu=document.querySelector(".menuimg")
// let menus=document.querySelector(".menus")
// let f=1;
// menu.addEventListener("click",function()
// {
//     if(f===1)
//     {
//         menu.style.display="block"
//         menus.style.display="block";
       
//         f=0;
//     }
//     else
//     {

//         menu.style.display="block"
       
//         menus.style.display="none";
       
       
//         f=1
//     }
    
// })
const btn=document.querySelector(".location");
function gotlocation(position)
{
 
    console.log(position)
    let lat=position.coords.latitude;
    let lang=position.coords.longitude;
console.log(lat,lang)
alert("THANKS FOR SHARING YOUR LOCATION")
}
function faliedtogetlocation()
{
    alert("Allow the location Acces ")
}
btn.addEventListener("click", async()=>
{
    navigator.geolocation.getCurrentPosition(gotlocation,faliedtogetlocation)
})

function createcard(image,name,link)
{

    let html=
    `<a href="${link}">
    <img src="${image}" alt="" class="food"><p>${name}</p>
  </a>
 `
    document.querySelector(".Item-Name").innerHTML=document.querySelector(".Item-Name").innerHTML+html

}
createcard("abc/bread.jpeg","Bread","abcbakerry.html")
createcard("abc/cake.jpeg","Cake","abcbakerry.html")
createcard("abc/eggpuff.jpeg","Currypuff","abcbakerry.html")
createcard("abc/sprite.jpeg","Sprite","abcbakerry.html")
createcard("abc/eggpuff.jpeg","Egg-puff","abcbakerry.html")
createcard("abc/sprite.jpeg","Sprite","abcbakerry.html")

function createcards(image,name,link)
{

    let html=
    `<a href="${link}">
    <img src="${image}" alt="" class="food"><p>${name}</p>
  </a>
 `
    document.querySelector(".Item-Name1").innerHTML=document.querySelector(".Item-Name1").innerHTML+html

//    document.querySelector(".Item-Name2").innerHTML=document.querySelector(".Item-Name2").innerHTML+html
//    document.querySelector(".Item-Name3").innerHTML=document.querySelector(".Item-Name3").innerHTML+html
// document.querySelector(".Item-Name4").innerHTML=document.querySelector(".Item-Name4").innerHTML+html
}
createcards("images1/chicken.webp","Chicken","")
createcards("images1/pizza.avif","pizza")
createcards("images1/dosa.avif","Dosa")
createcards("images1/friedrice.avif","Fried Rice")
createcards("images1/shawarma.avif","Shawarma")
createcards("images1/chicken.webp","Chicken")


function createcard2(image,name,link)
{

    let html=
    `<a href="${link}">
    <img src="${image}" alt="" class="food"><p>${name}</p>
  </a>
 `
    document.querySelector(".Item-Name2").innerHTML=document.querySelector(".Item-Name2").innerHTML+html

}
createcard2("abc/bread.jpeg","Bread","")
createcard2("abc/cake.jpeg","Cake")
createcard2("abc/eggpuff.jpeg","Egg-puff")
createcard2("abc/sprite.jpeg","Sprite")
createcard2("abc/eggpuff.jpeg","Egg-puff")
createcard2("abc/sprite.jpeg","Sprite")

function createcard3(image,name,link)
{

    let html=
    `<a href="${link}">
    <img src="${image}" alt="" class="food"><p>${name}</p>
  </a>
 `
    document.querySelector(".Item-Name3").innerHTML=document.querySelector(".Item-Name3").innerHTML+html

}
createcard3("images1/chicken.webp","Chicken","")
createcard3("images1/pizza.avif","pizza")
createcard3("images1/dosa.avif","Dosa")
createcard3("images1/friedrice.avif","Fried Rice")
createcard3("images1/shawarma.avif","Shawarma")
createcard3("images1/chicken.webp","Chicken")

function createcard4(image,name,link)
{

    let html=
    `<a href="${link}">
    <img src="${image}" alt="" class="food"><p>${name}</p>
  </a>
 `
    document.querySelector(".Item-Name4").innerHTML=document.querySelector(".Item-Name4").innerHTML+html

}
createcard4("images1/chicken.webp","Chicken","")
createcard4("images1/pizza.avif","pizza")
createcard4("images1/dosa.avif","Dosa")
createcard4("images1/friedrice.avif","Fried Rice")
createcard4("images1/shawarma.avif","Shawarma")
createcard4("images1/chicken.webp","Chicken")



let cart=document.querySelector(".cart")
let flag=0;
let cartlogo=document.querySelector(".cartlogo i")
cartlogo.addEventListener("click", function()
{ 
    if(flag==0)
    {

    cart.style.right="0";
    flag=1;
}
else
{
    cart.style.right="-1000%";
    flag=0;
}
})

var icon = document.querySelector('.close-btn i');
icon.addEventListener("click",function ()
{
    cart.style.right="-1000%";
})
setTimeout(function() {
    document.getElementById('myDiv').style.left = '80%';
   }, 3000);

    setTimeout(function() {
    document.getElementById('myDiv').style.left = '-80%';
   }, 11000);
   let backbtn=document.getElementById("backbtn")
   backbtn.addEventListener("click",function()
   {
       document.getElementById('myDiv').style.left = '-80%';
   })