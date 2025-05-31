 export const getGIfs = async(category) =>{
    const url =  ``

    const resp = await fetch (url);
    const {data} = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    console.log(gifs)
    return gifs;
}