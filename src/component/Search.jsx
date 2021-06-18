import React, {useEffect,useState} from 'react'
import axios from 'axios'

export const Search = () => {
    const [term, setTerm] = useState('Programming')
    const [results ,setResults] = useState([])
    
   
    useEffect(()=>{
        const search = async () => {
           const {data }=  await axios.get('https://en.wikipedia.org/w/api.php?', {
             params:{
                action:"query",
                list:"search",
                format:"json",
                origin:"*",
                srsearch:term
             }
            })
            setResults(data.query.search)
          }
           
          if(term && !results.length){
            search()
          }else{
            const timeOutId = setTimeout(()=>{ if(term){
              search()
            }}, 1000)

            return () => {
              clearTimeout(timeOutId)
            }
          }

    },[term])

    const renderResult = results.map(({title, snippet,pageid})=>{
        return(
            <div key={pageid} className='item'>
              <div className='right floated content'>
                <a 
                className='ui button'
                href={`https://en.wikipedia.org?curid=${pageid}`}
                >go
                </a>
              </div>
                <div className='content'>
                  <div className='header'>
                      {title}
                  </div>
                  <span dangerouslySetInnerHTML={{__html:snippet}}></span>
                </div>
            </div>
        )
    })

    return (
       <div>
           <div className='ui form'>
             <div className='field'>
                 <label> Enter  Search terms</label>
                 <input
                  value={term}
                  onChange={(e)=>setTerm( e.target.value)}
                  type="text" />
             </div>
           </div>
           <div className='ui celled list'>
               {renderResult}
           </div>
       </div>
    )
}