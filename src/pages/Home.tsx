
import image1 from "../assets/image1.jpg";
import image2 from "../assets/Levante-Alore-Ocean-Blue-1-1000x1000.webp";
import image3 from "../assets/image3.jpg";

export default function Home() {
  return (
    <div>
      <div className="HomePagestyling ">
        <div className="HomebackgroundImage">
          <h1>A Flourishing tribute</h1>
          <p>feel the taste of creativity and nature</p>
          <button className="bg-success">wish you goodluck</button>
        </div>
        <div className="HomebackgroundImage2">
          <h1>A Flourishing tribute</h1>
          <p>feel the taste of creativity and nature</p>
          <button className="bg-success">wish you goodluck</button>
        </div>
      </div>
      <div>
        <h3>popular right now</h3>
        <div className="ImageStyles">
          <img
            src={image1}
            alt="flowers"
            style={{ width: "200px", borderRadius: "50%" }}
          />
          <img
            src={image2}
            alt="flowers"
            style={{ width: "200px", borderRadius: "50%" }}
          />
          <img
            src={image3}
            alt="flowers"
            style={{ width: "200px", borderRadius: "50%" }}
          />
          <img
            src={image1}
            alt="flowers"
            style={{ width: "200px", borderRadius: "50%" }}
          />
        </div>
      </div>
    </div>
  );
}
