import { useState } from "react"


export const AddCategory = ( {setCategories}) => {
const [inputValue, setInputValue] = useState('Cristiano Ronaldo')
const onImputChange = (e) =>{
    setInputValue(e.target.value)
}
const onSubmit = (e) =>{
    e.preventDefault();
    setCategories(categories=> [inputValue, ...categories]);
}
  return (
    <form action="" onSubmit={onSubmit}>
        <input type="text" name="" id=""  placeholder="Search Gifs" value={inputValue} onChange={ onImputChange }/>
    </form>
  )
}
