// import { useState } from "react";
import { memesDatabase } from "./memesDatabase";

export function VoteDownButton ({ /*downvotes,*/ votesDown, setVotesDown, mem }) {

    function downVotesCounter() {
        setVotesDown(votesDown - 1);
        memesDatabase.find((object, index) => {
            if (object.id === mem.id) {
                memesDatabase[index] = { ...object, downvotes: votesDown - 1}
                return true; // stop searching
            }
        });
    }

    return (
    <button onClick={downVotesCounter}>{votesDown}</button>
    );
};