import { Mem } from "../components/Mem";

export function FavouritePage ({memesList, mem, favourite,}) {

    return (
        <div>
            <h2>Favourites</h2>
            { memesList
                .filter( (mem) => mem.favourite === 1 )
                .map( (meme) => <Mem key={meme.id} mem={meme} memesList={memesList} favourite={favourite} />) 
            }
        </div>
    );
}