import { useState } from "react"
import { AddCategory, GifGrid } from "./components";



export const TotalGifApp = () => {

  const [categories, setCategories] = useState(['']);  
  const addCategorie =  (value) =>{

    if(categories.includes(value)) return;
    setCategories([...categories,value]);
  }
  return (
    <>
    <h1>TotalGifApp</h1>
    <AddCategory 
      //setCategories={ setCategories }
      onNewCategory = { (value) => addCategorie(value) }
    />
    

        { 
        categories.map( ( category ) => (
              <GifGrid key={category} category={category} />
         )) 
        }
        

    </>
  )
}
