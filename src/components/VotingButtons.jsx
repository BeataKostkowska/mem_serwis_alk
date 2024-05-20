import { useState } from "react";
// import { VoteDownButton } from "./VoteDownButton";
// import { VoteUpButton } from "./VoteUpButton";
//import { memesDatabase } from "./memesDatabase";

export function VotingButtons ({upvotes, downvotes, mem, setMemesList, memesList}) {

    const [votesUp, setVotesUp] = useState(upvotes);
    const [votesDown, setVotesDown] = useState(downvotes);

    const votesSum = votesDown + votesUp;

    const upVotesCounter = (mem) => {
        setVotesUp(votesUp => votesUp + 1);
        setMemesList(memesList.map( (m) =>  
                    m.id === mem.id ? {...m, upvotes: m.votesUp + 1} : m
                )
                );
                console.log("koniec");
    }

    const downVotesCounter = (mem) =>{
        setVotesDown(votesDown => votesDown - 1);
        setMemesList(memesList.map( (m) =>  
                    m.id === mem.id ? {...m, downvotes: m.votesDown - 1} : m
                )
                );
                console.log("koniec");
    }

console.log(mem);

    // function downVotesCounter() {
    //     setVotesDown(votesDown => votesDown - 1);/*
    //     setMemesList(memesList.map( (m) =>  
    //         m.id === mem.id ? {...m, downvotes: .downvotes-1} : m;
    //     )
    //     );*/

    //     memesDatabase.find((object, index) => {
    //         if (object.id === mem.id) {
    //             memesDatabase[index] = { ...object, downvotes: votesDown}
    //             return true; // stop searching
    //             // https://stackoverflow.com/questions/12462318/find-a-value-in-an-array-of-objects-in-javascript
    //         }
    //     });
    // }

    return (
        <div>
            <button onClick={upVotesCounter}>{votesUp}</button>
            <button onClick={downVotesCounter}>{votesDown}</button>
        {/* <VoteUpButton upVotesCounter={upVotesCounter} setVotesUp={setVotesUp} votesUp={votesUp}/>
        <VoteDownButton downVotesCounter={downVotesCounter} votesDown={votesDown} setVotesDown={setVotesDown}/> */}
        <p>Różnica głosów {votesSum}</p>
        </div>
    );
};