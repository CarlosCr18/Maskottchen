const galleryData = [
  {
    url: "img/docho.jpg",
  },
  {
    url: "img/berlin.jpg",
  },
  {
    url: "img/humberto.jpg",
  },
];

const Gallery = () => {
  const [index, setIndex] = React.useState(0);
  const [show, setShow] = React.useState(false);

  function showImage(number) {
    setIndex(number);
    setShow("true");
  }

  React.useEffect(() => {
    setTimeout(() => {
      document
        .getElementById("imgGaleria0")
        .addEventListener("click", () => showImage(0));
      document
        .getElementById("imgGaleria1")
        .addEventListener("click", () => showImage(1));
      document
        .getElementById("imgGaleria2")
        .addEventListener("click", () => showImage(2));
    }, 10);
    return function cleanup() {
      document
        .getElementById("imgGaleria0")
        .removeEventListener("click", showImage);
      document
        .getElementById("imgGaleria1")
        .removeEventListener("click", showImage);
      document
        .getElementById("imgGaleria2")
        .removeEventListener("click", showImage);
    };
  }, [show]);

  if (show) {
    return (
      <div className="gallery-js-container">
        <button
          className="gallery-js-btn-anterior"
          key="gallery-js-btn-anterior"
          id="btn-gallery-anterior"
          onClick={() => {
            setIndex(index <= 0 ? galleryData.length - 1 : index - 1);
          }}
        >
          ˂
        </button>
        <div className="gallery-js-text-img">
          <img
            className="gallery-js-img"
            src={galleryData[index % galleryData.length].url}
          />
          {(index % galleryData.length) + 1} / {galleryData.length}
        </div>
        <button
          className="gallery-js-btn-siguiente"
          onClick={() => {
            setIndex(index + 1);
          }}
        >
          ˃
        </button>
        <button
          className="gallery-js-btn-salir"
          onClick={() => {
            setShow(false);
          }}
        >
          X
        </button>
      </div>
    );
  } else {
    return <div></div>;
  }
};
const GallerySection = () => {
  return (
    <div className="galeria-container">
      <img
        id="imgGaleria0"
        className="hover-translatey galeria-img"
        src={galleryData[0].url}
        alt="imagen de muestra"
      />
      <img
        id="imgGaleria1"
        className="hover-translatey galeria-img"
        src={galleryData[1].url}
        alt="imagen de muestra"
      />
      <img
        id="imgGaleria2"
        className="hover-translatey galeria-img"
        src={galleryData[2].url}
        alt="imagen de muestra"
      />
    </div>
  );
};

ReactDOM.render(<Gallery />, document.getElementById("gallery"));
ReactDOM.render(<GallerySection />, document.getElementById("gallery-section"));
