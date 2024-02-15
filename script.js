//get the card title and price

let titleCount = 1;
let totalPrice = 0;
const cardTitle = document.querySelectorAll('.card');



for(let card of cardTitle){
    const element = card;
    
   
   element.addEventListener('click', function(){
    //    Select the h3 container and price container
    const cardH3 =  element.querySelector("h3").innerText;
    const price = element.querySelector("span").innerText.split(" ")[1];
    const convertedPrice = parseFloat(price);
    
    
        const titleContainer = document.getElementById('title-container');
        const p = document.createElement('p');
        p.innerText = titleCount + ". " + cardH3;
       
        titleContainer.appendChild(p);
        titleCount++;

        let totalPriceContent = document.getElementById('totalPrice');
        totalPrice += convertedPrice;
        totalPriceContent.innerText =  totalPrice.toFixed(2);



    //get the input 
  
   const btn = document.getElementById('apply-btn');
    btn.addEventListener('click', function(){
        const inputField = document.getElementById('input-field').value;
        const copuneCode = inputField.split(" ").join("").toUpperCase();
        if(totalPrice >= 200){
            if(copuneCode === "SELL200"){
                const discountElement = document.getElementById('discountPrice');
                const discount = totalPrice * 0.2;
                discountElement.innerText = discount.toFixed(2); 
               
                
                const finalTotal = document.getElementById('total');
                const total = totalPrice - discount;
                finalTotal.innerText = total.toFixed(2);

              
                purchase();
            }
            else{
                alert("invalid coupon code");
               
            }
        }
        else{
            alert("Perchase upto 200")
          
        }
        
        
       
    })

    
    
        
        
   })

}

function purchase(){
    const purchase = document.getElementById('purchase');
    purchase.addEventListener('click', function(){
        // alert("You have successfully purchase ")
        
        document.getElementById('input-field').value = '';
       
        

    })
    
}