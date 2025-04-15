import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

const data = [
  {
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
    title: "Nature 1",
  },
  {
    image: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg",
    title: "Nature 2",
  },
  {
    image: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg",
    title: "Nature 3",
  },
  {
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
    title: "Nature 4",
  },
  {
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
    title: "Nature 1",
  },
  {
    image: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg",
    title: "Nature 2",
  },
  {
    image: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg",
    title: "Nature 3",
  },
  {
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
    title: "Nature 4",
  },
  {
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
    title: "Nature 1",
  },
  {
    image: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg",
    title: "Nature 2",
  },
  {
    image: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg",
    title: "Nature 3",
  },
  {
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
    title: "Nature 4",
  },
  {
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
    title: "Nature 1",
  },
  {
    image: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg",
    title: "Nature 2",
  },
  {
    image: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg",
    title: "Nature 3",
  },
  {
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
    title: "Nature 4",
  },
  {
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
    title: "Nature 1",
  },
  {
    image: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg",
    title: "Nature 2",
  },
  {
    image: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg",
    title: "Nature 3",
  },
  {
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
    title: "Nature 4",
  },
  {
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
    title: "Nature 1",
  },
  {
    image: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg",
    title: "Nature 2",
  },
  {
    image: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg",
    title: "Nature 3",
  },
  {
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
    title: "Nature 4",
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <div className="masonary">
        {data.map((item, index) => {
          return <Card image={item.image} title={item.title} key={index} />;
        })}
      </div>
    </>
  );
}

export default App;
