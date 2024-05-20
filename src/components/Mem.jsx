import { VotingButtons } from "./VotingButtons";

export function Mem ( {mem, setMemesList, memesList}) {
    return (
        <div key={mem.id}>
            <p>{mem.title}</p>
            <img src={mem.img} alt={mem.title}></img>
            <br />
            <VotingButtons upvotes={mem.upvotes} downvotes={mem.downvotes} key={mem.id} mem={mem} setMemesList={setMemesList} memesList={memesList} />
            <hr />
        </div>
    )       
};