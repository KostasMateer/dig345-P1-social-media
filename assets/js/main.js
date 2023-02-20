// saves the word data in the storage
$("#translateBtn").click(function () {
  let textToTranslate = $("#textToTranslate").val();
  window.sessionStorage.setItem("word", textToTranslate);

  translate();
});

// grabs word from storage, grabs the translation
function translate() {
  let textToTranslate = window.sessionStorage.getItem("word");
  if (window.sessionStorage.getItem("word") == "") {
    $("#notTranslated").html(`no word was given`);
    $("#translated").html(`no word was given`);
    return;
  }
  console.log(textToTranslate);

  // ping our api server, adding the input text to the url
  // fetch("http://localhost:3000/api/" + textToTranslate)
  fetch("https://dig345-p1-social-media.vercel.app/api/" + textToTranslate)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data.translated)
    $("#notTranslated").html(textToTranslate)
    $("#translated").html(data.translated)
    $("#language").html(data.language)
  })
  .catch((err) => console.log(err));
}
