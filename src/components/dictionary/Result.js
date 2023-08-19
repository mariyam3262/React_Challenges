import React from 'react'
import Meaning from './Meaning'
import Synonyms from './Synonyms'

function Result({meanings}) {

  return (
    < >
        {
            meanings.map(meaning => <div className='result-container'> <Meaning partOfSpeech = {meaning.partOfSpeech} definitions = {meaning.definitions}/>
                                            <Synonyms synonyms = {meaning.synonyms}/>
                                        </div>)
        }
        
    </>
  )
}

export default Result
