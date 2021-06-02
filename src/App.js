
import './App.css';
import { Accordion } from './component/Accordion'

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

function App() {
  return (
    <div className='ui container'>
      <Accordion  items={items}/>
    </div>
  );
}

export default App;
