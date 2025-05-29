import { useState } from "react"
import { AddCategory } from "./components/addCategory";


export const TotalGifApp = () => {

  const [categories, setCategories] = useState(['Cristiano Ronaldo']);  
  const addCategorie =  () =>{
    let cat = "Valorant";

    console.log(categories.length)
    setCategories([...categories,cat]);
  }
  return (
    <>
    <h1>TotalGifApp</h1>
    <AddCategory setCategories={ setCategories }/>
    <button onClick={addCategorie}>Agregar</button>
    <ol>
        { 
        categories.map( category => {
            return <li key={category}>{category}</li>
            }) 
        }
        
    </ol>
    </>
  )
}
