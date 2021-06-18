import { useState } from 'react'
import { DropDown } from './DropDown'
import { Convert } from './Convert'


const langKey = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'

const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  }
]

export const Translate = () => {
    const [ lang , setLang] = useState(options[0])
    const [ text , setText ] = useState('')
    const label = 'select Language'
    return(
        <div>
           <div className='ui form'>
               <div className='field'>
                   <div className='label'>Input</div>
                   <input value = {text} onChange={(e)=>setText(e.target.value)} />
               </div>
           </div>
            <DropDown 
              options = {options}
              selected={lang}
              onSelectedChange = {setLang}
              label = {label}
            />
            <hr />
            <h3 className='ui header'>Output</h3>
            <Convert 
             lang={lang}
             text={text}
             langKey={langKey}
            />
        </div>
    )
}