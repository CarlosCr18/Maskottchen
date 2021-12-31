const galleryData = [
  {
    url: "img/docho.webp",
  },
  {
    url: "img/berlin.webp",
  },
  {
    url: "img/humberto.webp",
  },
  {
    url: "img/blackdog.webp",
  },
  {
    url: "img/browndog.webp",
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
      let galleryImage = document.querySelectorAll(".galeria-img");
      galleryImage.forEach((element, index) => {
        element.addEventListener("click", () => showImage(index));
      });
    }, 10);
    return function cleanup() {
      let galleryImage = document.querySelectorAll(".galeria-img");
      galleryImage.forEach((element, index) => {
        element.removeEventListener("click", () => showImage(index));
      });
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
            alt="Imagen de muestra tamano real"
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
  let sliceLimit =
    document.getElementsByTagName("Body")[0].clientWidth < 815 ? 3 : 5;

  return (
    <div className="galeria-container">
      {galleryData.slice(0, sliceLimit).map((galleryData, index) => (
        <img
          id={"imgGaleria" + index}
          key={galleryData.url}
          className="hover-translatey galeria-img"
          src={galleryData.url}
          alt={"imagen de muestra" + index}
          loading="lazyLoading"
        />
      ))}
    </div>
  );
};

ReactDOM.render(<Gallery />, document.getElementById("gallery"));
ReactDOM.render(<GallerySection />, document.getElementById("gallery-section"));
