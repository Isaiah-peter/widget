import { useEffect, useState } from "react"


export const Route = ({path, children}) =>{

    const [currentPath, setCurrentPath] = useState(window.location.pathname)
   
    useEffect(()=>{
        const locationChange = () => {
            setCurrentPath(window.location.pathname)
        }

      window.addEventListener('popstate', locationChange)

      return ()=>{
          window.removeEventListener('popstate',locationChange)
      }
    },[])

 return currentPath === path ? children: null
}