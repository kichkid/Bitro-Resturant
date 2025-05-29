// Add item to cart
function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price, image });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart`);
  }
  
  // Display cart items
  function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let container = document.getElementById('cart-items');
    let total = 0;
  
    container.innerHTML = '';
  
    cart.forEach((item, index) => {
      container.innerHTML += `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}">
          <p>${item.name} - $${item.price}</p>
          <button onclick="removeFromCart(${index})">Remove</button>
        </div>
      `;
      total += item.price;
    });
  
    document.getElementById('total-price').innerText = `Total: $${total}`;
    localStorage.setItem('total', total);
  }
  
  // Remove item from cart
  function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
  }
  
  // Display checkout items
  function displayCheckout() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = localStorage.getItem('total') || 0;
    let info = document.getElementById('checkout-info');
  
    info.innerHTML = '';
  
    cart.forEach((item) => {
      info.innerHTML += `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}">
          <p>${item.name} - $${item.price}</p>
        </div>
      `;
    });
  
    info.innerHTML +=`<h3>Total Payment: $${total}</h3>` ;
  }
  
  // Simulate payment and clear cart
  function payNow() {
    alert("Payment successful!");
    localStorage.clear();
    window.location.href = "bookatable.html";
  }


  
    
      document.addEventListener('DOMContentLoaded', function() {
        new Swiper('.menuSwiper', {
          loop: true,
          speed: 800,
          grabCursor: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          slidesPerView: 1,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
          },
          breakpoints: {
            576: {  // Small devices
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {  // Medium devices
              slidesPerView: 2,
              spaceBetween: 25
            },
            992: {  // Large devices
              slidesPerView: 3,
              spaceBetween: 30
            },
            1200: {  // Extra large devices
              slidesPerView: 4,
              spaceBetween: 30
            }
          }
        });
      });

    
    
    










