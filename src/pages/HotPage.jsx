import { Mem } from "../components/Mem";

export function HotPage ({memesList, setMemesList}) {

    return (
        <div>
            <h2>Hot Memes</h2>
            { memesList.filter(mem => (mem.upvotes + mem.downvotes > 5)).map( (meme) => <Mem key={meme.id} mem={meme} setMemesList={setMemesList} memesList={memesList}/>) }
        </div>
    );
}