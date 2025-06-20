import { useEffect, useState } from "react";
import { getGIfs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

   const {images, isLoading} = useFetchGifs(category);

   console.log(isLoading)
    return (
    <>
        <h3>{category}</h3>
        {
            isLoading && (<h2>Cargando...</h2>)
        }
        <div className="card-grid">
        {
            images.map( gif => (
                <GifItem key={gif.id}
                    {...gif}
                />
            ))
        }
        </div>
    </>
  )
}
