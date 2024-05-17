import { useState } from "react";

export function VoteUpButton ({upvotes}) {

    const [votesUp, setVotesUp] = useState(upvotes);

    const upVotesCounter = () => {
        setVotesUp(votesUp + 1);
    }

    return (
    <button onClick={upVotesCounter}>{votesUp}</button>
    );
};