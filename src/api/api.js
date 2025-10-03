//import api info
const API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

//logic for full list view
export async function fetchAllBooks() {
  try {
    const response = await fetch(API + "/books");
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

//logic for single book view
export async function fetchSingleBook(id) {
  try {
    const response = await fetch(API + "/books/" + id);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
