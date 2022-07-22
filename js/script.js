//translation
//default locale
var locale = "en";


//onclick function language reload
function load(hashVar){
  window.location.hash = hashVar;
  location.reload();
}

// Replace the inner text of each element that has a
// data-key attribute with the translation corresponding
// to its data-key
function translatePage() {
  document
    .querySelectorAll("[data-key]")
    .forEach(translateElement);
}
// Replace the inner of the given HTML element
// with the translation in the active locale,
// corresponding to the element's data-key
function translateElement(element) {
  const key = element.getAttribute("data-key");
  const translation = translations[locale][key];
  element.innerHTML = translation;
}

if(window.location.hash){
  //if selected language is German
  if(window.location.hash === "#de"){
    //set german locale
    locale = "de";

    //display german flag  (language button in navbar)
    var langBtn = document.getElementById("lang-btn");
    langBtn.src = "img/german-flag.png";
    
    //href logo: redirecting to german home page
    var logo = document.getElementById("logo");
    logo.setAttribute("href","index.html#de");
  }
  translatePage();
}