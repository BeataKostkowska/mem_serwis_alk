import { memesDatabase } from "./memesDatabase";
import { VotingButtons } from "./VotingButtons";
import { useState } from "react";


export function MemList () {
   /* const [hotMemesList, setHotMemesList] = useState([]);
    const [regularMemesList, setRegularMemesList] = useState([]);
    
function handleMemesListChange(mem) {
    if (mem.upvotes + mem.downvotes > 5) {
        setHotMemesList(...hotMemesList, mem);
        setRegularMemesList(...regularMemesList);
    } else {
        setHotMemesList(...hotMemesList);
        setRegularMemesList(...regularMemesList, mem);
    }
}*/

    const [memesList, setMemesList] = useState([memesDatabase][0]);

    return (        
        memesList.filter(mem => (mem.upvotes + mem.downvotes > 5)).map(meme => {
        return (
            <Mem mem={meme} />
        )
    })        
)
};

export function Mem ( {mem }) {
        return (
            <div key={mem.id}>
                <p>{mem.title}</p>
                <img src={mem.img} alt={mem.title}></img>
                <br />
                <VotingButtons upvotes={mem.upvotes} downvotes={mem.downvotes} mem={mem}/>
                <hr />
            </div>
        )       
};

///////////////////////////////////////////////////////////////////////////

// export function Mem () {

//     const memesList = memesDatabase.map(mem => {

//     return (
//         <div key={mem.id}>
//             <p>{mem.title}</p>
//             <img src={mem.img} alt={mem.title}></img>
//             <br />
//             <VotingButtons upvotes={mem.upvotes} downvotes={mem.downvotes}/>                
//             <hr />
//         </div>
//     )
//     });

//     return (
//         <div>
//             {memesList}
//         </div>
//         )
// }

