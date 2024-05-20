import { FaveButton } from "./FaveButton";
import { VotingButtons } from "./VotingButtons";

export function Mem ( { mem, setMemesList, memesList }) {
    return (
        <div key={mem.id}>
            <p>{mem.title}</p>
            <FaveButton key={mem.id} mem={mem} memesList={memesList} setMemesList={setMemesList} />
            <br />
            <img src={mem.img} alt={mem.title}></img>
            <br />
            <VotingButtons upvotes={mem.upvotes} downvotes={mem.downvotes} key={mem.id} mem={mem} setMemesList={setMemesList} memesList={memesList} />            
        </div>
    )       
};