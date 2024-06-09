export function VotingButtons({
  upvotes,
  downvotes,
  mem,
  setMemesList,
  memesList,
}) {
  const upVotesCounter = (mem) => {
    setMemesList(
      memesList.map((m) =>
        m.id === mem.id ? { ...m, upvotes: m.upvotes + 1 } : m
      )
    );
  };

  const downVotesCounter = (mem) => {
    setMemesList(
      memesList.map((m) =>
        m.id === mem.id ? { ...m, downvotes: m.downvotes - 1 } : m
      )
    );
  };

  return (
    <div>
      <button onClick={() => upVotesCounter(mem)} className="upButton">
        Upvotes: {upvotes}
      </button>
      <button onClick={() => downVotesCounter(mem)} className="downButton">
        Downvotes: {downvotes}
      </button>
    </div>
  );
}
