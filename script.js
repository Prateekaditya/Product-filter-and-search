let products={
    data:[
    {
        productName:"Regular White T-shirt",
        category:"Topwear",
        price:"30",
        image:"./images/white-tshirt.jpg",
    },
    {
        productName:"Biege short skirt",
        category:"bottomwear",
        price:"49",
        image:"./images/short-skirt.jpg",
    },
    {
        productName:"sporty smartwatch",
        category:"watch",
        price:"99",
        image:"./images/sporty-smartwatch.jpg",
    },
    {
        productName:"Basic knitted top",
        category:"Topwear",
        price:"29",
        image:"./images/knitted-top.jpg",
    },
    {
        productName:"Black leather jacket",
        category:"jacket",
        price:"129",
        image:"./images/black-leather-jacket.jpg",
    },
    {
        productName:"Stylish Pink trouser",
        category:"bottomwear",
        price:"79",
        image:"./images/pink-trousers.jpg",
    },
    {
        productName:"Brown Mens jacket",
        category:"jacket",
        price:"130",
        image:"./images/brown-jacket.jpg",
    },
    {
        productName:"Comfy gray pants",
        category:"bottomwear",
        price:"76",
        image:"./images/comfy-gray-pants.jpg"
    },
]
};
for (let i of products.data) {
    
    let card=document.createElement("div"); //create card
    card.classList.add("card",i.category,"hide");//card should have category
    let imgconatiner=document.createElement("div");
    imgconatiner.classList.add("image-container");
    //create image div
    let image=document.createElement("img");
    image.setAttribute("src",i.image);
    imgconatiner.appendChild(image);
    card.appendChild(imgconatiner);
    let container=document.createElement("div");
    container.classList.add("container");
    let name=document.createElement("h5");
    name.classList.add("product-name");
    name.innerText=i.productName.toUpperCase();
    container.appendChild(name);
    let price=document.createElement("h6");
    price.classList.add("price");
    price.innerText="₹" +i.price;
    container.appendChild(price)
    card.appendChild(container);
    document.getElementById("products").appendChild(card);

}
function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button_value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    let elements=document.querySelectorAll(".card")

    elements.forEach((element) =>{
        if(value=="All"){
            element.classList.remove("hide");
        }
        else{
            if(element.classList.contains(value)){
                element.classList.remove("hide");
            }
            else{
                element.classList.add("hide");
            }
        }
    })
}
document.getElementById("search").addEventListener("click",()=>{
    let searchinput=document.getElementById("Search-input").value;
    let elements=document.querySelectorAll(".product-name");
    let cards=document.querySelectorAll(".card");
    elements.forEach((element,index) =>{
        if(element.innerText.includes(searchinput.toUpperCase())){
            cards[index].classList.remove("hide");
        }
        else{
            cards[index].classList.add("hide");
        }
    })
})
window.onload= () =>{
    filterProduct("All");
}

