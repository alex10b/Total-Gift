import { useState } from "react"


export const AddCategory = ( {onNewCategory}) => {
const [inputValue, setInputValue] = useState('Cristiano Ronaldo')
const onImputChange = (e) =>{
    setInputValue(e.target.value)
}
const onSubmit = (e) =>{
    e.preventDefault();
    if(inputValue.trim().length <= 1) return;
    //setCategories(categories=> [inputValue, ...categories]);
   console.log(inputValue)
    onNewCategory(inputValue)
    setInputValue('')
  }

  return (
    <form action="" onSubmit={onSubmit}>
        <input type="text" name="" id=""  placeholder="Search Gifs" value={inputValue} onChange={ onImputChange }/>
    </form>
  )
}
