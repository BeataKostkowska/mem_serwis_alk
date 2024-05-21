import { useState } from "react";
import styles from "../styles/NewMemForm.module.css";

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

        if(window.confirm("Do you want to create new Mem with those data?")){
            console.log(newMem);
            setMemesList([...memesList, newMem]);
            setNewMemTitle("");
            setNewMemLink("");
        }
    };

    const resetForm = (e) => {
        e.preventDefault();

        if(window.confirm("Are you sure you want to reset form?")) {
            setNewMemTitle("");
            setNewMemLink("");
        }
    };

    return (
        <form className={styles.formContainer}>
            <label className={styles.label}>Mem Title: 
                <input onChange={titleHandler} type="text" value={newMemTitle} name="title"/>
            </label>
            <label>Provide a link to the image: 
                <input onChange={linkHandler} type="url" value={newMemLink} name="link"/>
            </label>
            <button onClick={sendForm} type="submit">Create new Mem</button>
            <button onClick={resetForm}>Reset form</button>            
        </form>
    )
}