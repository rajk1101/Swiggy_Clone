import React from 'react';

const Grocery = () => {
  return (
    
    <div className="grocery-container p-4 md:p-8 lg:p-12">
      
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome to Our Online Grocery Store</h1>
      
      <p className="text-lg mb-8 text-center">
        Explore a wide variety of fresh products, daily essentials, and more. Enjoy the convenience of shopping from home and have your groceries delivered to your doorstep.
      </p>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample product items */}
          <div className="product-item p-4 border rounded-lg bg-white shadow-lg">
            <img src="https://5.imimg.com/data5/SELLER/Default/2022/11/DW/PX/WD/48023543/whatsapp-image-2022-11-05-at-5-03-05-pm-15--500x500.jpeg" alt="Product 1" className="w-full h-48 object-cover mb-4 rounded-2xl" />
            <h3 className="text-xl font-semibold">Product 1</h3>
            <p className="text-gray-700">$10.00</p>
          </div>
          <div className="product-item p-4 border rounded-lg bg-white shadow-lg">
            <img src="https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdyb2NlcnklMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D" alt="Product 2" className="w-full h-48 object-cover mb-4 rounded-2xl" />
            <h3 className="text-xl font-semibold">Product 2</h3>
            <p className="text-gray-700">$15.00</p>
          </div>
          <div className="product-item p-4 border rounded-lg bg-white shadow-lg">
            <img src="https://img.freepik.com/free-photo/shopping-cart-full-products-inside-supermarket_123827-28166.jpg" alt="Product 3" className="w-full h-48 object-cover mb-4 rounded-2xl" />
            <h3 className="text-xl font-semibold">Product 3</h3>
            <p className="text-gray-700">$20.00</p>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Sample category items */}
          <div className="category-item p-4 border rounded-lg bg-green-100 text-center">
            <h3 className="text-lg font-semibold">Fruits</h3>
          </div>
          <div className="category-item p-4 border rounded-lg bg-green-100 text-center">
            <h3 className="text-lg font-semibold">Vegetables</h3>
          </div>
          <div className="category-item p-4 border rounded-lg bg-green-100 text-center">
            <h3 className="text-lg font-semibold">Dairy</h3>
          </div>
          <div className="category-item p-4 border rounded-lg bg-green-100 text-center">
            <h3 className="text-lg font-semibold">Bakery</h3>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Promotions</h2>
        <div className="p-4 border rounded-lg bg-yellow-100">
          <h3 className="text-xl font-semibold mb-2">Special Offer: 20% off on your first order!</h3>
          <p className="text-lg">Use code FIRST20 at checkout. Offer valid for a limited time.</p>
        </div>
      </section>
      <p>
                This is our online grocery store and we are currently working to
                build this store!! Stay tuned for more updates!!!
            </p>
      
    </div>
  );
}

export default Grocery;
