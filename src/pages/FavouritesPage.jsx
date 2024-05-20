import { Mem } from "../components/Mem";

export function FavouritePage ({memesList, mem, isFavourite, isFavouriteList, favouritesList}) {

    return (
        <div>
            <h2>Favourites</h2>
            { memesList
                .filter( (mem) => mem.isFavourite === 1 )
                .map( (meme) => <Mem key={meme.id} mem={meme} memesList={memesList} isFavourite={isFavourite} />) 
            }
            {
                favouritesList
            }
        </div>
    );
}