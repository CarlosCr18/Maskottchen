const reviewsData = [
  [
    {
      review:
        "Gran servicio! lleve a mi chaparrito a un servicio de baño completo y esta super limpio y huele muy bien!.",
      author: "Carlos Crespo y Docho",
    },
    {
      review:
        "Vine con mi perrita pastor australiana a servicio completo con corte de pelo y me sorprendi bastante del cambio. Excelente trato, muy amable y profesional.",
      author: "Zayra Rodarte y Berlin",
    },
    {
      review:
        "Le compre una camisita a mi Humberto, le quedo perfecta se ve super fresco y coqueto! excelente calidad y precio!.",
      author: "Miranda Lopez y Humberto",
    },
  ],
  [
    {
      review:
        "Great service! I brought my doggie to get the full bath service, He is so clean and smells so good!",
      author: "Carlos Crespo y Docho",
    },
    {
      review:
        "I came with my australian shepherd for a full service with haircut, I was astonished with her looks. Excelent service, very kind and profesional.",
      author: "Zayra Rodarte y Berlin",
    },
    {
      review:
        "I bought a shirt for my Humberto, It fits him perfectly, he looks so fresh and handsome! It's made with an excellent quality and price.",
      author: "Miranda Lopez y Humberto",
    },
  ],
];

const Review = () => {
  const [currentReview, setCurrentReview] = React.useState(0);
  let language = 0;

  //sets language
  if (
    document.querySelector(".english-link").getAttribute("data-lang") === "es"
  ) {
    language = 0;
  } else {
    language = 1;
  }

  //loads previous review
  function btnAnterior() {
    if (currentReview > 0) {
      setCurrentReview(currentReview - 1);
    } else {
      setCurrentReview(reviewsData[language].length - 1);
    }
  }

  //loads next review
  function btnSiguiente() {
    if (currentReview < reviewsData[language].length - 1) {
      setCurrentReview(currentReview + 1);
    } else {
      setCurrentReview(0);
    }
  }

  //Function to add listeners to the buttons to change the review
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
