import { FilledStar } from "./FilledStar";
import { EmptyStar } from "./EmptyStar";

export function FaveButton({ mem, memesList, setMemesList, favourite }) {
  const addToFavourites = (mem) => {
    setMemesList(
      memesList.map((m) => {
        if (m.id === mem.id && !favourite ) {
          return { ...m, favourite: true };
        }
        if (m.id === mem.id && favourite ) {
          return { ...m, favourite: false };
        } else {
          return m;
        }
      })
    );
  };

  return (
    <>
      <button onClick={() => addToFavourites(mem)} className="faveButton">
        {!mem.favourite ? <EmptyStar /> : <FilledStar />}
      </button>
    </>
  );
}
