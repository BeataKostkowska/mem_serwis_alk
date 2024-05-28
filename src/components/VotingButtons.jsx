// import Button from 'react-bootstrap/Button';

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
            {/* <Button onClick={() => upVotesCounter(mem)} variant="outline-success">Upvotes: {upvotes}</Button>
            <Button onClick={() => downVotesCounter(mem)} variant="outline-danger">Downvotes: {downvotes}</Button> */}
            <button onClick={() => upVotesCounter(mem)} className="upButton" >Upvotes: {upvotes}</button>
            <button onClick={() => downVotesCounter(mem)} className="downButton" >Downvotes: {downvotes}</button>
            {/* <p>Różnica głosów {upvotes+downvotes}</p> */}
        </div>
    );
};
