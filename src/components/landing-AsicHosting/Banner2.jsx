import Triangles from "./Triangles";

const Banner2 = ({ title, subtitle, subtitle2 }) => {
  return (
    <div className="banner-container">
      <div className="textosBanner2">
        <div className="tituloBanner">{title}</div>
        <div className="subtituloBanner">{subtitle}</div>
        <div className="subtituloBanner">{subtitle2}</div>
        <div className="container-botones2">
          <input placeholder="Email:" />
          <button className="button-landing-5">GET EARLY ACCESS</button>
        </div>
      </div>
      <Triangles />
    </div>
  );
};

export default Banner2;
