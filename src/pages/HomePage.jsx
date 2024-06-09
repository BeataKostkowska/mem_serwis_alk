import { NavigationBar } from "../components/NavigationBar";
import hello from "../memes_images/oh-hello-there.jpg";

export function HomePage() {
  return (
    <div>
      <NavigationBar />
      <img src={hello} alt={`"Hello there" cat`} className="homeImage" />
    </div>
  );
}
