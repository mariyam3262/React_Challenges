import React, { useEffect, useState } from 'react'
import Item from './Item';

function GroceryLIst() {

    const [itemList, setItemList] = useState([]);
    const [item, setItem] = useState('');
    const [isEdditing, setIsEdditing] = useState(false);
    const [indexOfItem , setIndexOfItem] = useState(null)

    const editItem = (item) => {
        setItemList([...itemList.slice(0,indexOfItem), item, ...itemList.slice(indexOfItem+1)])
        setIsEdditing(false);
    }
    const handleChage = (e) => {if (e.target.value == ' ' ){
      alert('enter valid input')
    }else if(itemList.includes( e.target.value.trim())){
      alert('Already included')
    }
    else{
      setItem(e.target.value.trim())
    }
                                 }

    const deleteItem = (index) => setItemList(itemList.filter(item => item !== itemList[index]))
   
  return (
    <div>
      <form onSubmit={(e) => {e.preventDefault(); setItem('')}}>
        <input type="text" autoFocus placeholder='Enter item name' value={item}
                onChange={handleChage} className='input'/>

        <button type="submit" onClick={() => isEdditing ? editItem(item) : item && setItemList([item, ...itemList])}>
            {isEdditing ? 'Edit': 'Add' }
        </button>
      </form>
      {
        itemList.map((item, index) => <Item key ={index} index= {index} 
                                            setIndexOfItem = {setIndexOfItem}  
                                            setItem={setItem}  
                                            item ={item} 
                                            setIsEdditing={setIsEdditing}
                                            deleteItem = {deleteItem}/>)
      }

       {itemList.length > 0 && <button onClick={() => setItemList([])}> Clear </button>}
    </div>
  )
}

export default GroceryLIst
