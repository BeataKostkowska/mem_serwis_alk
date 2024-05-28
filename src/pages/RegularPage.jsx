import { Mem } from "../components/Mem";
import { NavigationBar } from "../components/NavigationBar";

export function RegularPage ({memesList, setMemesList}) {

    return (
        <div>
            <NavigationBar />
            <h2>Regular Memes</h2>
            { memesList
                .filter(mem => (mem.upvotes + mem.downvotes <= 5))
                .map( (meme) => <Mem key={meme.id} mem={meme} setMemesList={setMemesList} memesList={memesList} />) 
            }
        </div>
    );
}