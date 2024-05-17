// import { useState } from "react";

export function VoteUpButton (/*{upvotes}*/ {votesUp, setVotesUp}) {

    

    const upVotesCounter = () => {
        setVotesUp(votesUp + 1);
    }

    return (
    <button onClick={upVotesCounter}>{votesUp}</button>
    );
};