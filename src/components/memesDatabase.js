import morning_people from "../memes_images/morning_people.png";
import work from "../memes_images/work.jpg";
import netflix from "../memes_images/netflix.jpg";
import bugs from "../memes_images/bugs.png";
import programmers from "../memes_images/programmers.png";

export let memesDatabase = [
  {
    id: 1,
    title: "Morning People",
    upvotes: 8,
    downvotes: -1,
    img: morning_people,
    favourite: false,
  },
  {
    id: 2,
    title: "Productive day",
    upvotes: 2,
    downvotes: -2,
    img: work,
    favourite: false,
  },
  {
    id: 3,
    title: "Watching Netflix",
    upvotes: 11,
    downvotes: -3,
    img: netflix,
    favourite: false,
  },
  {
    id: 4,
    title: "Debugging",
    upvotes: 4,
    downvotes: 0,
    img: bugs,
    favourite: false,
  },
  {
    id: 5,
    title: "Programmers",
    upvotes: 3,
    downvotes: -5,
    img: programmers,
    favourite: false,
  },
];
