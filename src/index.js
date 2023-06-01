const choiceBreed = document.querySelector(".breed-select")
const BASE_URL = "https://api.thecatapi.com/v1/breeds";
const API = "live_4A9VG5YVwQUfGIVLusOimDnR9wlOCXz6tiOqpN5KW05nsOO0XdSS0CKna2DVLUJ4";

function fetchEvents(id, page) {
  const params = new URLSearchParams({
    apikey: API,
    id,
    page,
    limit: 3,
  });
  return fetch(`${BASE_URL}?${params}`)
    .then((response) => {
       console.log(response);
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch((error) => console.log(error));
}

function getEvents(query) {
  fetchEvents(query).then((data) => {
    console.log(data)
    const events = data._embedded.events;
    console.log(events);
    renderEvents(events)
  });
}


function renderEvents(events) {
  const markup = events
    .map(({ name, description,url }) => {
      return `<li><h2>${name}</h2><img src='${url}' alt='${name}' width='200'>  <p>${description}</p>
</li>`;
    })
    .join("");
  list.insertAdjacentHTML("beforeend", markup);
}