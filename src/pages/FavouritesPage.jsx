import { Mem } from "../components/Mem";
import { NavigationBar } from "../components/NavigationBar";

export function FavouritePage ({memesList, mem, favourite,}) {

    return (
        <div>
            <NavigationBar />
            <h2>Favourites</h2>
            { memesList
                .filter( (mem) => mem.favourite === 1 )
                .map( (meme) => <Mem key={meme.id} mem={meme} memesList={memesList} favourite={favourite} />) 
            }
        </div>
    );
}