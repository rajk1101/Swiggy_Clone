import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    // console.log(items)
    const dispatch=useDispatch();
    let handleaddItem=(item)=>{
        dispatch(addItem(item))
    }
    return (<>
        <div>
            {items.map((item) => <div className="m-2 p-2  border-gray-200 border b-2 shadow-md text-left flex gap-2 justify-between" key={item.card.info.id}>
                
                <div className="w-9/12">
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span>  - ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                </div>

                <div className='w-3/12'>
                    <div className="absolute ">
                        <button className="p-2 mx-16 my-auto bg-gray-100 shadow-lg   rounded-lg w-16 h-8 text-xs font-semibold
                        " onClick={()=>handleaddItem(item)}>Add +</button>
                    </div>
                    <img className="w-24  rounded-md flex  " src={CDN_URL + item.card.info.imageId}></img>
                </div>
            </div>)}
        </div>

    </>)
}
export default ItemList;



