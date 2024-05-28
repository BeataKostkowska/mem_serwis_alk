import { FaveButton } from "./FaveButton";
import { VotingButtons } from "./VotingButtons";
import styles from "../styles/Mem.module.css";

export function Mem ( { mem, setMemesList, memesList }) {
    return (
        <div key={mem.id} className={styles.memContainer} >
            <p>{mem.title}</p>
            <FaveButton key={mem.id} mem={mem} memesList={memesList} setMemesList={setMemesList} favourite={mem.favourite}/>
            <br />
            <img src={mem.img} alt={mem.title} className={styles.memImage} />
            <br />
            <VotingButtons upvotes={mem.upvotes} downvotes={mem.downvotes} key={mem.id} mem={mem} setMemesList={setMemesList} memesList={memesList} />            
        </div>
    )       
};