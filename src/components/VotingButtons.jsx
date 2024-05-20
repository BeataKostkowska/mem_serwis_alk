export function VotingButtons ({upvotes, downvotes, mem, setMemesList, memesList}) {

    const upVotesCounter = (mem) => {
        setMemesList(memesList.map( (m) =>  
                    m.id === mem.id ? {...m, upvotes: m.upvotes + 1} : m
                ));
    }
    
    const downVotesCounter = (mem) =>{
        setMemesList(memesList.map( (m) =>  
                    m.id === mem.id ? {...m, downvotes: m.downvotes - 1} : m
                ));
    }
        
    console.log(mem);

    return (
        <div>
            <button onClick={() => upVotesCounter(mem)}>{upvotes}</button>
            <button onClick={() => downVotesCounter(mem)}>{downvotes}</button>
            <p>Różnica głosów {upvotes+downvotes}</p>
        </div>
    );
};
