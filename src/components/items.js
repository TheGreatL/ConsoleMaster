const itemsArray=[
    {
        productID:1,
        productName:"Nintendo Console", 
        productDiscount:"₱2000",
        productPrice:"₱2000",
        productImage:"src/assets/images/items-image/nintendo.png",
        productCreator:"BandamCo",
        productReviewsCount:4,
        productDescription:'Description 1'
    },
    {
        productID:2,
        productName:"Ps2 Console", 
        productDiscount:"₱2000",
        productPrice:"₱2000",
        productImage:"src/assets/images/items-image/ps-2-console.png",
        productCreator:"BandamCo",
        productReviewsCount:5,
        productDescription:'Description 2'
    },
    {
        productID:3,
        productName:"Ps3 Console",
        productDiscount:"₱2000",
        productPrice:"₱2000",
        productImage:"src/assets/images/items-image/ps-3-console.png",
        productCreator:"BandamCo",
        productReviewsCount:3,
        productDescription:'Description 3'
    },
    {
        productID:4,
        productName:"Ps4 Controller",
        productDiscount:"₱2000",
        productPrice:"₱2000",
        productImage:"src/assets/images/items-image/ps-4-controller.png",
        productCreator:"BandamCo",
        productReviewsCount:2,
        productDescription:'Description 4'
    },
    {
        productID:5,
        productName:"Ps5 Handheld",
        productDiscount:"₱2000",
        productPrice:"₱2000",
        productImage:"src/assets/images/items-image/ps-5-hand-held.png",
        productCreator:"BandamCo",
        productReviewsCount:5,
        productDescription:'Description 5'
    },
    {
        productID:6,
        productName:"Read Dead Redemption 2",
        productDiscount:"₱2000",
        productPrice:"₱2000",
        productImage:"src/assets/images/items-image/read-dead-redemption.png",
        productCreator:"BandamCo",
        productReviewsCount:3,
        productDescription:'Description 6'
    },
    {
        productID:7,
        productName:"Xbox 360",
        productDiscount:"₱2000",
        productPrice:"₱2000",
        productImage:"src/assets/images/items-image/x-box-360.png",
        productCreator:"BandamCo",
        productReviewsCount:4,
        productDescription:'Description 7'
    },
    {
        productID:8,
        productName:"Ps2 Controller8",
        productDiscount:"₱2000",
        productPrice:"₱2000",
        productImage:"src/assets/images/items-image/ps-2-console.png",
        productCreator:"BandamCo",
        productReviewsCount:4,
        productDescription:'Description 8'
    },
    {
        productID:9,
        productName:"Ps2 Controller9",
        productDiscount:"₱2000",
        productPrice:"₱2000",
        productImage:"src/assets/images/items-image/ps-2-console.png",
        productCreator:"BandamCo",
        productReviewsCount:1,
        productDescription:'Description 11'
    },
    {
        productID:10,
        productName:"Ps2 Controller10",
        productDiscount:"₱2000",
        productPrice:"₱2000",
        productImage:"src/assets/images/items-image/ps-2-console.png",
        productCreator:"BandamCo",
        productReviewsCount:5,
        productDescription:'Description 10'
    }
    ];

    export   function getItem(productID){
        return itemsArray.find(item=>{
        return item.productID===productID;
    }); 

    }
    export function getAllItems(){
        return itemsArray;
    }
    export function getItemSize(){
    return itemsArray.length;
}    
    