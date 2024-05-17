// import { useState } from "react";

export function VoteDownButton (/*{downvotes}*/ {votesDown, setVotesDown}) {

    

    const downVotesCounter = () => {
        setVotesDown(votesDown - 1);
    }

    return (
    <button onClick={downVotesCounter}>{votesDown}</button>
    );
};