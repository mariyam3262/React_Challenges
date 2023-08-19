import React from 'react'

function Item({index, setIndexOfItem,item, setItem, deleteItem, setIsEdditing}) {
  return (
    <div className='grocery-item'>
      <li> {item} </li> 
      <div className='btn-item'>
        <button onClick={() => {setIsEdditing(true);setIndexOfItem(index);setItem(item)}}>Edit</button>
        <button onClick={() => deleteItem(index)}>delete</button>
      </div>
      
    </div>
  )
}

export default Item
