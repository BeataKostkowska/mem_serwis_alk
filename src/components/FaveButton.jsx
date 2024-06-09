import { FilledStar } from "./FilledStar";
import { EmptyStar } from "./EmptyStar";

export function FaveButton({ mem, memesList, setMemesList, favourite }) {
  const addToFavourites = (mem) => {
    setMemesList(
      memesList.map((m) => {
        if (m.id === mem.id && favourite === 0) {
          return { ...m, favourite: 1 };
        }
        if (m.id === mem.id && favourite !== 0) {
          return { ...m, favourite: 0 };
        } else {
          return m;
        }
      })
    );
  };

  return (
    <>
      <button onClick={() => addToFavourites(mem)} className="faveButton">
        {mem.favourite === 0 ? <EmptyStar /> : <FilledStar />}
      </button>
    </>
  );
}
