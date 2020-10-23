import "./main.css";
import refs from "./refs.js";
import PNotify from "pnotify/dist/es/PNotify.js";
import "pnotify/dist/PNotifyBrightTheme.css";
import icons from "material-design-icons/";
import getData from "./apiService.js";
import image from "./elements.hbs";

const state = {
  searchValue: "",
  pageNumber: 1
};

function getGlobalData(searchValue, pageNumber) {
  return getData(searchValue, pageNumber).then(data => {
    let string = image(data);
    return string;
  });
}

refs.input.addEventListener("submit", e => {
  e.preventDefault();
  state.searchValue = e.target.query.value;
  state.pageNumber = 1;
  getGlobalData(state.searchValue, state.pageNumber).then(
    string => (refs.gallery.innerHTML = string)
  );
});

refs.button.addEventListener("click", e => {
  e.preventDefault();
  state.pageNumber += 1;
  getGlobalData(state.searchValue, state.pageNumber)
    .then(string => refs.gallery.insertAdjacentHTML("beforeend", string))
    .then(() => {
      const position = refs.button.offsetTop;
      window.scrollTo({
        top: position,
        behavior: "smooth"
      });
    });
});
