import { useState } from "react";
import { VoteDownButton } from "./VoteDownButton";
import { VoteUpButton } from "./VoteUpButton";

export function VotingButtons ({upvotes, downvotes, mem}) {

    const [votesUp, setVotesUp] = useState(upvotes);
    const [votesDown, setVotesDown] = useState(downvotes);

    const votesSum = votesDown + votesUp;

    return (
        <div>
        <VoteUpButton votesUp={votesUp} setVotesUp={setVotesUp} votesSum={votesSum} mem={mem}/>
        <VoteDownButton votesDown={votesDown} setVotesDown={setVotesDown} mem={mem}/>
        <p>Różnica głosów {votesSum}</p>
        </div>
    );
};