import { useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch()

  const handleClearCart = ()=>
  {
              dispatch(clearCart())
              console.log(items)
  }

  return (
   <>{items.length>0?<div className="flex flex-col items-center py-10">
      <div className="bg-gray-900 text-white w-4/12 p-4 flex justify-between">
        {" "}
        <h1 className="font-bold text-4xl">Cart</h1>
        <button onClick={handleClearCart} className="transition-transform duration-100 ease-in-out active:scale-105 cursor-pointer text-white bg-gradient-to-r from-yellow-20 to-orange-200 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Clear Cart
        </button>
      </div>

      <div className="w-4/12  bg-orange-200 p-5 rounded-b-4xl">
        <ItemsList itemCards={items} showAdd={false} />
      </div>
    </div>:<img src={user} alt="Empty Cart" />}
    </>
  );
};

export default Cart;
