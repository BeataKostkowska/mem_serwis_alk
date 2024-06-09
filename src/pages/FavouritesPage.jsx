import { Mem } from "../components/Mem";
import { NavigationBar } from "../components/NavigationBar";

export function FavouritePage({ memesList, favourite, setMemesList }) {
  return (
    <div>
      <NavigationBar />
      <div className="page">
        {memesList
          .filter((mem) => mem.favourite === true)
          .map((meme) => (
            <Mem
              key={meme.id}
              mem={meme}
              memesList={memesList}
              favourite={favourite}
              setMemesList={setMemesList}
            />
          ))}
      </div>
    </div>
  );
}
