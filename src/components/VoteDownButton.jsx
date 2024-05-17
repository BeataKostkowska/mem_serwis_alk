import { useState } from "react";

export function VoteDownButton ({downvotes}) {

    const [votesDown, setVotesDown] = useState(downvotes);

    const downVotesCounter = () => {
        setVotesDown(votesDown - 1);
    }

    return (
    <button onClick={downVotesCounter}>{votesDown}</button>
    );
};