import { NavigationBar } from "../components/NavigationBar";
import { NewMemForm } from "../components/NewMemForm";

export function AddNewPage({ memesList, setMemesList }) {
  return (
    <div>
      <NavigationBar />
      <NewMemForm memesList={memesList} setMemesList={setMemesList} />
    </div>
  );
}
