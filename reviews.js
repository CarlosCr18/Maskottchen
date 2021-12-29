const reviewsData = [
  [
    { review: "primera review en espanol", author: "senora de los gatos 1" },
    { review: "segunda review en espanol", author: "senora de los perros 2" },
    {
      review: "tercera review en espanol",
      author: "senora de los tlacuaches 3",
    },
  ],
  [
    { review: "first review in english", author: "cat lady 1" },
    { review: "second review in english", author: "dog lady 2" },
    { review: "third review in english", author: "opossum lady 3" },
  ],
];

let language = 0;

const Review = () => {
  const [currentReview, setCurrentReview] = React.useState(0);
  let language = 0;

  if (window.location.pathname === "/index.html") {
    language = 0;
  } else {
    language = 1;
  }

  function btnAnterior() {
    if (currentReview > 0) {
      setCurrentReview(currentReview - 1);
    } else {
      setCurrentReview(reviewsData[language].length - 1);
    }
  }

  function btnSiguiente() {
    if (currentReview < reviewsData[language].length - 1) {
      setCurrentReview(currentReview + 1);
    } else {
      setCurrentReview(0);
    }
  }

  React.useEffect(() => {
    document
      .getElementById("review-btn-anterior")
      .addEventListener("click", btnAnterior);

    document
      .getElementById("review-btn-siguiente")
      .addEventListener("click", btnSiguiente);

    return function cleanupListener() {
      document
        .getElementById("review-btn-siguiente")
        .removeEventListener("click", btnSiguiente);
      document
        .getElementById("review-btn-anterior")
        .removeEventListener("click", btnAnterior);
    };
  }, [currentReview]);

  return (
    <div className="review-card">
      <h3 className="review-title">"</h3>
      <p className="review-text">
        {reviewsData[language][currentReview].review}
      </p>
      <p className="review-author">
        -{reviewsData[language][currentReview].author}
      </p>
    </div>
  );
};

ReactDOM.render(<Review />, document.getElementById("review-container"));
