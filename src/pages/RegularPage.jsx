import { Mem } from "../components/Mem";
import { NavigationBar } from "../components/NavigationBar";

export function RegularPage({ memesList, setMemesList }) {
  return (
    <div>
      <NavigationBar />
      <div className="page">
        {memesList
          .filter((mem) => mem.upvotes + mem.downvotes <= 5)
          .map((meme) => (
            <Mem
              key={meme.id}
              mem={meme}
              setMemesList={setMemesList}
              memesList={memesList}
            />
          ))}
      </div>
    </div>
  );
}
