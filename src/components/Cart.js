import { useDispatch, useSelector } from "react-redux";
import ItemList from "./Itemlist";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="cart-container p-4 md:p-8 lg:p-12">
            <h1 className="text-3xl font-bold mb-6 text-center text-pink-500">Your Shopping Cart</h1>

            <div className="max-w-xl mx-auto">
                <button onClick={handleClearCart} className="bg-black text-white px-4 py-2 rounded-lg mb-4 block mx-auto">
                    Clear Cart
                </button>

                {cartItems.length === 0 && (
                    <div className="text-center">
                        <h2 className="text-xl font-semibold mb-2">Your cart is empty!</h2>
                        <p className="text-lg">Start adding items to your cart from our store.</p>
                    </div>
                )}

                {cartItems.length > 0 && (
                    <div className="border border-gray-300 rounded-lg shadow-lg">
                        <ItemList items={cartItems} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
