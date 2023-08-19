import React, { useState } from 'react'
import Divide from './Divide'


function MergeTree() {
    const list = [1,2,3,4,5,6,7,8,9,10]
    // console.log(tempList)
  return (
    <div>
      <Divide list={list}/>
    </div>
  )
}

export default MergeTree
