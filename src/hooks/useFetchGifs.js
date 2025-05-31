import { useEffect, useState } from "react";
import { getGIfs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
const [images, setImages] = useState([]);
const [isLoading, setisLoading] = useState(true)
const getImages = async() =>{
    const newImages =  await getGIfs(category);
    setImages(newImages)
    setisLoading(false)
}
useEffect(() => {
        
        getImages()        
}, [])
  return {
    images,
    isLoading: isLoading
  }
}
