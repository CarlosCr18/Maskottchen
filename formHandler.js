//form handler
//when submitted uses axios and formsubmit.co to handle the data then depending on the result there is user feedback
const form = document.getElementById("ContactForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  document.getElementById("submitLoading").style.display = "block";
  document.getElementById("submitButton").style.display = "none";

  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios
    .post(
      "https://formsubmit.co/ajax/2c0c126429e0fac45748e5e8c8ef1194",
      {
        name: form.elements["name"].value,
        email: form.elements["email"].value,
        number: form.elements["number"].value,
        message: form.elements["message"].value,
      },
      { timeout: 3000 }
    )
    .then((response) => {
      console.log(response, "success");
      form.style.display = "none";
      document.getElementById("ContactForm").style.display = "none";
      document.getElementById("formSent").style.display = "block";
    })
    .catch((error) => {
      console.log(error, "Error");
      alert("Error");
      document.getElementById("submitLoading").style.display = "block";
      document.getElementById("submitButton").style.display = "none";
    });
});
