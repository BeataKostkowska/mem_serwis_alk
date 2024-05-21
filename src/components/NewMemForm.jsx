import { useState } from "react"

export function NewMemForm ({memesList, setMemesList}) {

    const [newMemTitle, setNewMemTitle] = useState("");
    const [newMemLink, setNewMemLink] = useState("");

    const titleHandler = (e) => {
        console.log(newMemTitle);
        setNewMemTitle(e.target.value);
    }

    const linkHandler = (e) => {
        console.log(newMemLink);
        setNewMemLink(e.target.value);
    }

    const sendForm = (e) => {
        e.preventDefault();

        const newMem = {
            id: memesList.length + 1,
            title: newMemTitle,
            upvotes: 0,
            downvotes: 0,
            img: newMemLink
        };

        console.log(newMem);
        setMemesList([...memesList, newMem]);
        setNewMemTitle("");
        setNewMemLink("");
    }

    const resetForm = () => {
        setNewMemTitle("");
        setNewMemLink("");
    };


    return (
        <form>
            <label>Mem Title
                <input onChange={titleHandler} type="text" value={newMemTitle}/>
            </label>
            <label>Provide a link to the image
                <input onChange={linkHandler} type="url" value={newMemLink}/>
                {/* or upload Mem
                <input type="file"/> */}
            </label>
            <button onClick={sendForm} type="submit">Create new Mem</button>
            <button onClick={resetForm}>Reset form</button>            
        </form>
    )
}