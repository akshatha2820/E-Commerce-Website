const products = [
    { id: 1, name: "Celine Wallet", price: 8000, image: "p9.jpg" },
    { id: 2, name: "Louis Vuitton Bagpack", price: 108000, image: "p11.jpg" },
    { id: 3, name: "Michael Kors Wallet", price: 13000, image: "p10.jpg" },
    { id: 4, name: "Coach Sling bag", price: 16000, image: "p8.jpg" },
    { id: 5, name: "Louis Vuitton Wallet", price: 50000, image: "p7.jpg" },
    { id: 6, name: "Gucci SlingBag", price: 315000, image: "p15.jpg" },
    { id: 7, name: "Hermes Kelly Handbag", price: 1200000, image: "p19.jpg" },
    { id: 8, name: "YSL Sling Bag", price: 40000, image: "p20.jpg" },
    { id: 9, name: "Versace Bagpack", price: 130000, image: "p18.jpg" },
    { id: 10, name: "Dior Handbag", price: 200000, image: "p17.jpg" },
  ];
  
  let cart = [];
  
  // Add to Cart
  document.querySelectorAll(".add-to-cart").forEach((button, index) => {
    button.addEventListener("click", () => {
      const product = products[index];
      const existingItem = cart.find(item => item.id === product.id);
  
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
  
      updateCart();
    });
  });
  
  // Update Cart
  function updateCart() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cart.reduce((total, item) => total + item.quantity * item.price, 0);
  
    document.getElementById("cartCount").textContent = cartCount;
    document.getElementById("cartTotal").textContent = cartTotal.toFixed(2);
  
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";
  
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent =`${item.name} (x${item.quantity}) - INR ${(item.quantity * item.price).toFixed(2)}`;
      cartItems.appendChild(li);
    });
  }
  
  // Show Cart
  document.getElementById("cartBtn").addEventListener("click", () => {
    document.getElementById("cartModal").style.display = "block";
  });
  
  // Close Cart
  document.getElementById("closeCart").addEventListener("click", () => {
    document.getElementById("cartModal").style.display = "none";
  });
  