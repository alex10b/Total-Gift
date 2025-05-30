import { getGIfs } from "../helpers/getGifs"

export const GifGrid = ({category}) => {
   
    getGIfs(category)
    return (
    <>
        <h3>{category}</h3>
        
    </>
  )
}
