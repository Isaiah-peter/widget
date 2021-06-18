
import './App.css';
import { Accordion } from './component/Accordion'
import { Search } from './component/Search'
import { DropDown } from './component/DropDown'
import { useState} from 'react'
import { Translate } from './component/Tranlate'
import { Route } from './component/Route'
import { Header } from './component/Header'

const items = [
  
  { title : 'What is React',
  content: 'react is a javascript framework'
  },
  { title : 'why use React',
  content: 'React is a favorite javascript framework'
  },{ title : 'Why do  you use React',
  content: 'React is a easy to use javascript framework'
  }
]

const options = [
  {
    label: 'Red',
    value: 'red'
  },
  {
    label: 'Green',
    value: 'green'
  },
  {
    label: 'Blue',
    value: 'blue'
  }
]


function App() {

  const [selected , setSelected] = useState(options[0])
  const [showDropdown, setShowDropdown ] = useState(true)

  const label = 'selected color'


  return (
    <div className='ui container'>
      {/* <Accordion  items={items}/> */}
      {/* <Search />
      <button onClick={() => {setShowDropdown(!showDropdown)}}>Toggle Dropdown</button>
      {
        showDropdown ?
         <DropDown 
      selected={selected}
      onSelectedChange={setSelected}
      options={options}/>: null
      label={label}
      } */}
      
     

     <Header />

      <Route path='/'>
        <Accordion items={items}/>
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <DropDown selected={selected}
         label={label}
         onSelectedChange={setSelected}
         options={options}/>
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
      
    </div>
  );
}

export default App;
