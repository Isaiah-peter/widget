import React, {useState ,useEffect, useRef} from 'react'




export const DropDown =  ({options, selected, onSelectedChange ,label}) => {
     const [open ,setOpen] = useState(false)
     const ref = useRef()
     const text = 'Color Displayer'

   
   const menu = options.map((option)=>{
       
       if(option.value === selected.value){
           return null
       }

       return(
           <div onClick={()=> onSelectedChange(option)} key={option.value} className='item'>
               {option.label}
           </div>
           
       )
   })
    useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });
 
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);
  



    return (
        <div ref={ref} className='ui form'  >
           <div className='field'>
               <label className='label'>{label}</label>
               <div onClick={()=> setOpen(!open)} 
               className={`ui selection dropdown ${ open ? "visible active": ''}`}>
                   <i className='dropdown icon'></i>
                   <div className='text'>{selected.label}</div>
                   <div className={`menu ${ open ? 'visible transition': ''}`}>
                       {menu}
                   </div>
               </div>
               {selected.value === 'red'  || selected.value === 'blue'  || selected.value === 'green' ?
               <h1 style={{color:`${selected.value}`}}>{text}</h1> : null
               } 
           </div>
        </div>
    )
} 