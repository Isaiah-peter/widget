import React, {  useState } from 'react'

export const Accordion = ({items}) =>{
  const [activeIndex, setActiveIndex] = useState(null)

    const onTitleClick = (index) => {
       setActiveIndex(index)
    }

    const renderItems = items.map(({title,content},index)=>{
      const active = index === activeIndex ? 'active' : ''
      return(
       <React.Fragment key={title}>
         <div className={`title ${active}`}
          onClick={()=>{onTitleClick(index)}}
         >
           <i className='dropdown icon'></i>
           {title}
       </div>
       <div className={`content ${active}`}>
         <div>{content}</div>
        
       </div>

       
       </React.Fragment>
      )
    })
    return(
        <div className='ui styled accordion'>
            {renderItems}
        </div>
    )
}