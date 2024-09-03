import { getItem,getAllItems,getItemSize } from "./items.js";
import { clearMain } from "../utils/clear_main.js";
import { initProductDetails } from "./display_product_details.js";
export function displayHomePage(){
        getAllItems().forEach((item,index)=>{
    
            const itemContainer = document.createElement("div");
            itemContainer.className ="item flex flex-col sm:max-w-64 max-w-24 min-w-24 sm:min-w-64 shadow-sm  shadow-gray-500   bg-yellow-400 rounded-xl overflow-hidden cursor-pointer snap-end ";

            

            const itemName = document.createElement("p");
            itemName.className ="pl-0.1 m-0.5 text-wrap  text-xsm  sm:my-0 sm:text-2xl sm:pl-2 font-semibold ";
            itemName.textContent= item.productName;
           
        
            const itemImage = document.createElement("img");
            itemImage.className ='h-20 sm:h-52  src="src/assets/images/items-image/ps2-controller.png';
            itemImage.src= item.productImage;

            const itemDiscount = document.createElement("p");
            itemDiscount.className ="pl-0.1 m-0.5 text-xsm  sm:mt-0 sm:mb-3 sm:text-base sm:pl-2";
            itemDiscount.textContent= item.productDiscount;
            

            const itemPrice = document.createElement("p");
            itemPrice.className ="pl-0.1 m-0.5 mb-2  text-xsm sm:mt-2 sm:mb-4 sm:text-xl sm:pl-2 font-bold";
            itemPrice.textContent= item.productPrice;
            
            itemContainer.appendChild(itemImage);
            itemContainer.appendChild(itemName);
            itemContainer.appendChild(itemDiscount);
            itemContainer.appendChild(itemPrice);
            const parentContainer = document.getElementById('item-container');
            parentContainer.appendChild(itemContainer);
        });
}
export function initItemClick(){
    const items = document.querySelectorAll('.item');
    items.forEach((item,index)=>{
            item.addEventListener('click',()=>{
                    console.log(index);
                    clearMain();
                    document.querySelector('main').classList.className='';
                    initProductDetails();
                    localStorage.setItem('productID',index+1);
                });
    });
}

const carousellContainer = document.getElementById('carousell-container');
const carousellIndicator = document.querySelectorAll('.carousell-indicator');
function scrollContainer(position){
    const carouselImage = carousellContainer.clientWidth;
    carousellContainer.scrollTo(carouselImage*position,0);
    setIndicator(position);   
}
export function initCarousell(){
    let position = 0;
    carousellIndicator.forEach((indicator,index)=>{
        indicator.addEventListener('click',()=>{
            position=index;
            scrollContainer(position);
            position++;
        });
    });
            setIndicator(position);
            setInterval(() => {
            scrollContainer(position);
            position++;
            if(position>4){
                position=0;
            }
        }, 3000);

}
function setIndicator(position){  
    carousellIndicator.forEach(indicator=>{
            indicator.className ='carousell-indicator cursor-pointer rounded-xl bg-white p-1 sm:p-2';
       
    });
    carousellIndicator[position].className ='carousell-indicator cursor-pointer rounded-xl p-1 sm:p-2 bg-gray-700';
}
export function toggleMenuButton(){
const burgerButton = document.getElementById("burger");
     burgerButton.addEventListener("click", () => {
        const navigationLinks = document.getElementById('navigation-links');
        navigationLinks.classList.toggle('hidden');
   
});
}