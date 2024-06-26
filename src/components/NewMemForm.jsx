import { useEffect, useState } from "react";
import styles from "../styles/NewMemForm.module.css";
import isUrlHttp from "is-url-http";

export function NewMemForm({ memesList, setMemesList }) {
  const [newMemTitle, setNewMemTitle] = useState("");
  const [newMemLink, setNewMemLink] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [hoverText, setHoverText] = useState("");

  const titleHandler = (e) => {
    setNewMemTitle(e.target.value);
  };

  const linkHandler = (e) => {
    setNewMemLink(e.target.value);
  };

  const checkboxHandler = (e) => {
    setIsChecked(e.target.checked);
  };

  useEffect(() => {
    if (newMemTitle.length > 0 && newMemLink.length > 0 && isChecked === true) {
      if (isUrlHttp(newMemLink)) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
        setHoverText("Provided link is not an URL!");
      }
    } else {
      setIsDisabled(true);
      setHoverText("Fill the form!");
    }
  }, [newMemTitle, newMemLink, isChecked]);

  const sendForm = (e) => {
    const newMem = {
      id: memesList.length + 1,
      title: newMemTitle,
      upvotes: 0,
      downvotes: 0,
      img: newMemLink,
      favourite: false,
    };

    if (window.confirm("Do you want to create new Mem with this data?")) {
      setMemesList([...memesList, newMem]);
      setNewMemTitle("");
      setNewMemLink("");
      setIsChecked(false);
    }
  };

  const resetForm = (e) => {
    e.preventDefault();

    if (window.confirm("Are you sure you want to reset form?")) {
      setNewMemTitle("");
      setNewMemLink("");
      setIsChecked(false);
    }
  };

  return (
    <form className={styles.formContainer}>
      <label className={styles.labelForm}>
        Mem Title:
        <input
          onChange={titleHandler}
          type="text"
          value={newMemTitle}
          name="title"
          required
          className={styles.inputForm}
        />
      </label>
      <label className={styles.labelForm}>
        Provide a link to the image:
        <input
          onChange={linkHandler}
          value={newMemLink}
          type="url"
          name="link"
          required
          className={styles.inputForm}
        />
      </label>
      <label className={styles.labelForm}>
        <input
          onChange={checkboxHandler}
          checked={isChecked}
          type="checkbox"
          required
        />
        I confirm that the meme created is in line with the terms and conditions
        of Mem Serwis.
      </label>
      <div className={styles.buttonsContainer}>
        <button
          onClick={sendForm}
          type="submit"
          className={styles.formButton}
          disabled={isDisabled}
          title={hoverText}
        >
          Create new Mem
        </button>
        <button onClick={resetForm} className={styles.formButton}>
          Reset form
        </button>
      </div>
    </form>
  );
}
