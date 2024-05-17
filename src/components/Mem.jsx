import { memesDatabase } from "./memesDatabase";
// import { VoteUpButton } from "./VoteUpButton";
// import { VoteDownButton } from "./VoteDownButton";
import { VotingButtons } from "./VotingButtons";
// import { useState } from "react";

export function Mem () {

    const memesList = memesDatabase.map(mem => {

        return (
            <div key={mem.id}>
                <p>{mem.title}</p>
                <img src={mem.img} alt={mem.title}></img>
                <br />
                {/*                 
                <VoteUpButton upvotes={mem.upvotes}/>
                <VoteDownButton downvotes={mem.downvotes}/>
                <p>Wynik głosów: </p>
                <br /> 
                */}
                <VotingButtons upvotes={mem.upvotes} downvotes={mem.downvotes}/>                
                <hr />
            </div>
        )
    });

    return (
        <div>
            {memesList}
        </div>
    )
}