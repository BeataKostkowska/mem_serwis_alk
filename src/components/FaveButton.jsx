import { useState } from "react"

export function FaveButton ({mem, memesList, setMemesList}) {

    const [isFave, setIsFave] = useState(false);

    const addToFavourites = (mem) => {
        setIsFave(
        memesList.map( (m) =>  
            m.id === mem.id ? {mem, isFave: true} : m
        ))
    }

    return (
        <div>
            <button onClick={() => addToFavourites(mem)}>Add to favourites</button>
        </div>

    )
}


/*1)
const [isFavourite, setIsFavourite] = useState([]);
const [clicksNumber, setClicksNumber] = useState(0);

const addToFavourites = (mem) => {
    setClicksNumber(clicksNumber => clicksNumber + 1);
    console.log(clicksNumber);

    if(clicksNumber % 2 !== 0) {
        setIsFavourite(...isFavourite, mem);
        alert("dodano do ulubionych");
    } else{
        setIsFavourite(isFavourite);
        alert("usunięto z ulubionych");
    }
}*/
/*2)
    const [isFavourite, setIsFavourite] = useState(0);

    const addToFavourites = (mem) => {
        if (isFavourite === 0 ){
            setIsFavourite(1);
            alert("dodano do ulubionych");
        } else {
            setIsFavourite(0);
            alert("usunięto z ulubionych");
        }
    } */

    /* 3)
    
        const [isFavourite, setIsFavourite] = useState(0);

    const addToFavourites = (mem) => {
        setMemesList(memesList.map( (m) => {
            if ( (m.id === mem.id) && (isFavourite === 0 )) {
                    setIsFavourite(1);
                    alert("dodano do ulubionych");
                } if ( (m.id === mem.id) && (isFavourite !== 0 )){
                    alert("usunięto z ulubionych");
                    return m;
                }
                else {                
                return m;
                }
                }
            ));
    }*/

    /*4)
        const [isFavourite, setIsFavourite] = useState(0);

        const addToFavourites = (mem) => {
        setIsFavourite(memesList.map( (m) => {
            if ( (m.id === mem.id) && (isFavourite === 0 )) {                    
                    alert("dodano do ulubionych");
                    return {...m, isFavourite: 1};
                } if ( (m.id === mem.id) && (isFavourite !== 0 )){
                    alert("usunięto z ulubionych");
                    return {...m, isFavourite: 0};
                }
                else {                
                return m;
                }
                }
            ));
    } */

    /* 5
    
    const [isFavouriteList, setIsFavouriteList] = useState([]);
    const [isFavourite, setIsFavourite] = useState(0);
    
    const addToFavourites = (mem) => {
        setIsFavouriteList(memesList.map( (m) => {
            if ( (m.id === mem.id) && (isFavourite === 0 )) {                    
                    alert("dodano do ulubionych");
                    setIsFavourite(1);
                    return {...isFavouriteList, m};
                } if ( (m.id === mem.id) && (isFavourite !== 0 )){
                    alert("usunięto z ulubionych");
                    setIsFavourite(0);
                    return isFavouriteList;
                }
                else {                
                return isFavouriteList;
                }
                }
            ));
    }
     */



