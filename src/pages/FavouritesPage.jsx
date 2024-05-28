import { Mem } from "../components/Mem";
import { NavigationBar } from "../components/NavigationBar";

export function FavouritePage ({memesList, mem, favourite, setMemesList}) {

    return (
        <div>
            <NavigationBar />
            {/* <h2>Favourites</h2> */}
            <div className="page">
            { memesList
                .filter( (mem) => mem.favourite === 1 )
                .map( (meme) => <Mem key={meme.id} mem={meme} memesList={memesList} favourite={favourite} setMemesList={setMemesList}/>) 
            }
            </div>
        </div>
    );
}