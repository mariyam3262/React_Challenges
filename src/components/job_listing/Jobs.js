import React, { useEffect, useState } from 'react'
import data from './data.json'
import Job from './Job' 
import Header from './Header';

function Jobs() {

    const [keywords, setKeywords] = useState([]);
    const [jobs, setJobs] = useState([...data])
    console.log(keywords)

  
  useEffect(()=>{
   setJobs(keywords.length > 0 ? 
            data.filter(job => [...job.languages, job.role, job.level, ...job.tools]
                                .some(key => keywords.includes(key))):
              [...data])
  },[keywords])

  return (
    <div>
        {keywords.length > 0 && <Header keywords= {keywords} setKeywords = {setKeywords}/>}
      {
        jobs.map(job => <Job key = {job.id} job={job} keywords={keywords} setKeywords={setKeywords}/>)
      }
    </div>
  )
}

export default Jobs
