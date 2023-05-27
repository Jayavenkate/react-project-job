import "./App.css";
import img1 from "../picture/img1.jpg";
import { ImageList  } from "./Images";
export default function App() {
  return (
    <div className="app">
      <div
        className="image-nav"
        style={{
          backgroundImage: `url(${img1})`,
        }}
      >
        <div className="heading">
          <h1 className="heading-1">BE A FORCE </h1>
          <p className="heading-2">FOR GOOD</p>
        </div>
      </div>

      <ImageList />
    </div>
  );
}
