import React from 'react'

function Job({job, setKeywords, keywords}) {
const {
    id,
    company, 
    contract, 
    featured, 
    languages, 
    level, 
    location, 
    isNew, 
    position, 
    postedAt, 
    role, 
    tools} = job;

    const handleClick = (e) => setKeywords([...new Set([...keywords,e.target.textContent.trim()])])
  return (
    <div key = {id} style={ {border:' 2px solid gray',
                            borderRadius: '3%',
                            margin: '5px'}}>

      <h2>{company}</h2>
      {isNew && <small>New !!</small>}
      {featured && <small> Featured !!</small>}
      <h3>{position}</h3>
      <h3 className='sortable-element' onClick={handleClick}>{role}</h3>
      <h3 className='sortable-element'   onClick={handleClick}>{level}</h3>
      <h3>{postedAt}</h3>
      <h3>{contract}</h3>
      <h3>{location}</h3>
      <ul>
        <h4>Languages :</h4> 
        {languages.map((lang, ind) => <li key={ind} 
                    onClick={handleClick}
                    className='sortable-element' >
                         {lang} </li>)}
      </ul>
      <ul>
        <h4> Tools : </h4> 
        {tools.map((tool, ind) => <li key={ind} 
                onClick={handleClick}
                className='sortable-element' > 
                    {tool} </li>)}
      </ul>
    </div>
  )
}

export default Job
