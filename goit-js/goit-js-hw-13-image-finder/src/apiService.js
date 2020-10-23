import axios from "axios";

const baseUrl = `https://pixabay.com/api/`;
const key = `14481640-517dfb002d93837a6bcd20aaa`;

export default function getData(searchValue, pageNumber) {
  return axios(
    `${baseUrl}?image_type=photo&orientation=horizontal&q=${searchValue}&page=${pageNumber}&per_page=12&key=${key}`
  ).then(({ data }) => data.hits);
}
