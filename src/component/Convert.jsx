 import React, { useState, useEffect} from 'react'
 import axios from 'axios'

export const Convert = ({lang, text, langKey}) => {

    const [tranlated, setTranslated] = useState('')
   
    useEffect(()=>{
      const doTranslation = async() =>{
        const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
            params:{
                  q:text,
                  target:lang.value,
                  key:langKey
            }
          })

          setTranslated(data.data.translations[0].translatedText)
      }

      const timeoutId = setTimeout(()=>{
        if(text){
            doTranslation()
        }
      },500)
      
      return () =>{
        clearTimeout(timeoutId)
      }

    },[lang, text])
    return(
        <div>
            <h1 className='ui header'>{tranlated}</h1>
        </div>
    )
}