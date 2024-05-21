import { NewMemForm } from "../components/NewMemForm";

export function AddNewPage ({memesList, setMemesList}) {

    return (
        <div>
            <h2>New Mem Form</h2>
            <NewMemForm memesList={memesList} setMemesList={setMemesList}/>
        </div>
    );
}