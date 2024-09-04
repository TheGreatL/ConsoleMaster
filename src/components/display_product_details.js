export function initProductDetails(){
    const main = document.querySelector('main');
    main.className='flex flex-col gap-2 sm:flex-row sm:p-6 md:h-full';
    main.innerHTML=`   
      <section class="flex bg-white rounded-lg overflow-hidden mx-3 mt-5 sm:container lg:min-h-screen lg:bg-green-600 sm:bg-yellow-400 ">
        <div class="flex flex-col gap-1 bg-yellow-300 justify-center items-center sm:gap-10">
            <img class="other-product-image mx-3 w-12 min-h-11 max-h-14 cursor-pointer rounded-lg sm:w-20 sm:min-h-24" src="src/assets/images/items-image/ps-5-hand-held.png" alt="">
            <img class="other-product-image mx-3 w-12 min-h-11 max-h-14 cursor-pointer rounded-lg sm:w-20 sm:min-h-24" src="src/assets/images/items-image/ps-5-hand-held.png" alt="">
            <img class="other-product-image mx-3 w-12 min-h-11 max-h-14 cursor-pointer rounded-lg sm:w-20 sm:min-h-24" src="src/assets/images/items-image/ps-5-hand-held.png" alt="">
            <img class="other-product-image mx-3 w-12 min-h-11 max-h-14 cursor-pointer rounded-lg sm:w-20 sm:min-h-24" src="src/assets/images/items-image/ps-5-hand-held.png" alt="">
        </div>
        <div class="flex flex-grow items-center justify-center p-5 sm:p-10">
            <img class="cursor-pointer product-image w-44 h-60  sm:min-h-full sm:min-w-full" src="src/assets/images/items-image/read-dead-redemption.png" alt="">
        </div>
    </section>
    <section class="flex flex-grow  flex-col  bg-white rounded-sm p-2  m-1 sm:container sm:rounded-md gap-0.5 ">
            <div class="flex flex-col border-b-2 border-b-gray-300 pb-2 sm:gap-2">
                <p class="font-semibold text-sm text-red-600 space tracking-widest sm:text-2xl">Creator</p>
                <p class="text-lg font-bold sm:text-4xl">NSW NBA 2K24 Kobe Bryant Edition (US)</p>
                <p class="text-sm sm:text-2xl">⭐⭐⭐⭐⭐ Reviews 5</p>
                <p class="text-sm sm:text-xl">Available: In stock</p>
                <div class="flex">
                  <p class="flex-grow text-sm font-semibold sm:text-2xl">Game Key: 5026555427807</p>
                  <ul class="flex gap-3 items-center">
                    <li><a href="https://www.facebook.com/"><img class="w-4 sm:w-6" src="src/assets/icons/social-icons/facebook.png" alt=""></a></li>
                    <li><a href="https://www.instagram.com/"><img class="w-4 sm:w-6" src="src/assets/icons/social-icons/instagram.png" alt=""></a></li>
                    <li><a href="https://www.tiktok.com/"><img class="w-4 sm:w-6" src="src/assets/icons/social-icons/tik-tok.png" alt=""></a></li>
                    <li><a href="https://www.x.com/"><img class="w-4 sm:w-6" src="src/assets/icons/social-icons/twitter.png" alt=""></a></li>
                  </ul>
                </div>
            </div>
            <div class="flex flex-col sm:flex-col-reverse">
              <div class="flex flex-col border-b-2 border-b-gray-300 pb-2">
                <p class="text-base tracking-widest font-bold sm:text-2xl">Description</p>
                <p class="text-sm sm:text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex minima veniam nostrum et eaque voluptatum unde harum doloremque, officia assumenda saepe error. Reprehenderit itaque velit consequatur. Corrupti rem quaerat expedita.</p>
              </div>
              <div class="flex flex-col border-b-2 border-b-gray-300 pb-2 gap-2" >
                <p class="font-bold text-xl sm:text-3xl">Price: P32323</p>
                <form class="flex gap-2 items-center" action="">
                  <p class="sm:text-2xl">Quantity:</p>
                    <div class="flex flex-grow items-center  bg-yellow-500 max-w-48 rounded-xl overflow-hidden ">
                      <p class="flex-grow  text-center text-xl font-semibold sm:text-2xl">1</p>
                      <div class="flex gap-2">
                        <button type="button"  class="px-4 bg-gray-400 p-2 text-3xl sm:text-4xl">+</button>
                        <button type="button"  class="px-4 bg-gray-400 p-2 text-3xl sm:text-4xl">-</button>
                      </div>
                    </div>
                </form>
                <button class="uppercase self-start bg-blue-400 px-4 py-2 rounded-md text-lg">Add to cart</button>
              </div>
            </div>
            
            
    </section> `;
}
