
import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState('Login');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const onlineStatus = useOnlineStatus();
  const { loggedInuser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)
  const svgContent = `
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill='pink' />
  </svg>
`;


  return (
    <div className="flex flex-col md:flex-row justify-between bg-pink-100 shadow-2xl m-2 h-auto md:h-32">
      <div className="flex justify-between items-center w-full md:w-auto p-4 md:p-0">
      <img
                className="h-24 rounded-e-full md:h-32"
                src="https://miro.medium.com/v2/resize:fit:640/1*Lw9xVsdNuEGqr3PaEI436Q.jpeg"
                alt="company_Logo"
            />
        <button
          className="md:hidden text-pink-700"
          onClick={() => setDropdownVisible(!dropdownVisible)}
        >
          ☰ Menu
        </button>
      </div>

      <div className={`flex-col md:flex md:flex-row items-center w-full md:w-auto ${dropdownVisible ? 'flex' : 'hidden'} md:flex`}>
        <ul className="flex flex-col md:flex-row p-4 md:p-0 m-4 md:m-0 w-full md:w-auto">
          {/* <li className="p-2 md:p-4 font-serif">OnlineStatus: {onlineStatus ? "✅" : "🔴"}</li> */}
          <li className="p-2 md:p-4 font-serif font-bold"><Link to="/">Home</Link></li>
          <li className="p-2 md:p-4 font-serif font-bold"><Link to="/about">About Us</Link></li>
          <li className="p-2 md:p-4 font-serif font-bold"><Link to="/contact">Contact Us</Link></li>
          <li className="p-2 md:p-4 font-serif font-bold"><Link to="/grocery">Grocery</Link></li>
          <li className="p-2 md:p-4 font-serif font-bold"><Link to="/cart">🛒-{cartItems.length} items</Link></li>
          <li className="p-2 md:p-4 font-serif font-bold">{loggedInuser}</li>
          <button
            onClick={() => {
              btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
              console.log(btnName);
            }}
            className="px-4 py-2 md:py-0 font-serif bg-pink-300 hover:bg-pink-200 rounded-md w-auto mt-2 md:mt-0"
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;



// import { useContext, useState } from "react";
// import { LOGO_URL } from "../utils/constants";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";
// import { useSelector } from "react-redux";

// const Header = () => {
// const[btnName,setBtnName]=useState('Login')
// const onlineStatus=useOnlineStatus();
// const {loggedInuser}=useContext(UserContext);
// // console.log(loggedInuser)

// //Selector:-We are subscribing to the store using a store
// const cartItems =useSelector((store)=>store.cart.items );
// console.log(cartItems)

//   // let btnName="Login";

//     return (
//       <div className="flex justify-between bg-pink-100 shadow-2xl m-2 h-32">
//         <div className="w-48">
//           <img className="h-32 bg-black"
//             src={LOGO_URL}
//           alt="company_Logo" />
//         </div>

//         <div className="flex items-center">
//           <ul className="flex p-4 m-4">
//             <li className="p-4 font-serif">OnlineStatus:{onlineStatus ? "✅" :"🔴" }</li>
//             <li className="p-4 font-serif"><Link to="/">Home</Link></li>
//             <li className="p-4 font-serif"><Link to="/about">About Us</Link></li>
//             <li className="p-4 font-serif"><Link to="/contact">Contact Us</Link></li>
//             <li className="p-4 font-serif"><Link to="/grocery">Grocery</Link></li>
//             <li className="p-4 font-serif font-bold "><Link to="/cart">🛒-{cartItems.length} items</Link></li>
//             <button  onClick={()=>{
//               btnName ==='Login'?
//               setBtnName('Logout'):
//               setBtnName('Login')
//               console.log(btnName);
//             }} className="px-4 font-serif bg-pink-300 hover:bg-pink-200 rounded-md w-auto ">{btnName}</button>
//             <li className="p-4 font-serif font-bold">{loggedInuser}</li>
//           </ul>
//         </div>
//       </div>
//     );
//   };

//   export default Header;
