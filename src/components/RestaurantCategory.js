import React, { useState } from 'react'
import ItemList from './Itemlist'

const RestaurantCategory = ({ data,showItems,setShowIndex,}) => {
    // console.log(data)
    
    
    let handleShow = () => {
        // setShowItems(!showItems)        //this is toggle feature amazing feature of react
        setShowIndex();
    }
    return (
        <>
            {/* Header */}
            <div className='w-6/12 bg-gray-100 shadow-lg p-4 m-auto my-4  '>
                <div className=' flex justify-between cursor-pointer' onClick={()=>{handleShow()}}>
                    <span className='font-bold text-lg'>{data.title}({data.itemCards.length})</span>
                    <span>🔽</span>
                </div>
                {/* Accordian Body */}
                { showItems && <ItemList items={data.itemCards}  />}
            </div>

        </>
    )
}

export default RestaurantCategory