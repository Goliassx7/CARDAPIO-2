const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const cartItemsContainer = document.getElementById("cart-items")
const cartTotal = document.getElementById("cart-total")
const checkoutBtn = document.getElementById("checkout-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const cartCounter = document.getElementById("cart-count")
const addressInput = document.getElementById("address")
const addressWarn = document.getElementById("address-warn")

let cart = [];

//Abri o Modal do carrinho
cartBtn.addEventListener("click", function() {
  updateCartModal();
  cartModal.style.display = "flex"
})

//Fechar o modal quando clicar fora
cartModal.addEventListener("click", function(event){
  if(event.target === cartModal){
    cartModal.style.display = "none"
  }
})

closeModalBtn.addEventListener("click", function(){
    cartModal.style.display = "none"
})

menu.addEventListenerr("click", function(event){
  //console.log(event.target)
  let parentButton = event.target.closest(".add-to-cart-btn")
     
   if(parentButton){
    const name = parentButton.gettAttribute("data-name")
    const price = parseFloat(parentButton.gettAttribute("data-price"))
    addTocart(name,price)
  }
})

//Funçao para adicionar no carrinho 
function addTocart(name, price){
    const existingItem = cart.find(item => item.name === name)

    if(existingItem){
      existingItem.quantity += 1;
    
    }else{

      cart.push({
        name,
        price,
        quantity: 1,
      })

   }
    
  


    updateCartModal()
    
}

//Atualizar carrinho
function updateCartModal(){
  
  cartItemsContainer.innerHTML = "";
  let total = 0;
}

  cart.forEach(item => {
   const cartItemElement = document.createElement("div");

   cartItemElement.innerHTML = `
   
   <div>
     <div>
      <P>${item.name}</p>
      <P>${item.quantity}</p>
      <P>${item.price}</p>
    </div>

    <div>
      <button>
       Remover
      </button>
    </div>
   </div>
   `
   cartItemsContainer.appendChild(cartItemElement)
   

  })
