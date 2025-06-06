document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM ready...FAMILY");

  const root = document.querySelector("#root");
  const movieForm = document.querySelector("#movieLookup");

  movieForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const movieTitle = formData.get("movieTitle");

    const errorText = document.createElement("div");
    errorText.classList.add("error");

    if (!!movieTitle) {
      const hasError = document.querySelector(".error");
      if (!!hasError) {
        hasError.remove();
      }
      lookupMovie(movieTitle);
    } else {
      errorText.innerText = "Please enter a movie title.";
      movieForm.appendChild(errorText);
    }
  });

  async function lookupMovie(title) {
    const url = `https://www.omdbapi.com/?apikey=66f230e4&t=${title}&plot=full`;
    // fetch(url)
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (data) {
    //     // do something with data here
    //     console.log("INSIDE MOVIE2 CALLBACK: ", data);
    //     if (data) {
    //       return generateMovie(data);
    //     }
    //     return null;
    //   });

    const movie = await fetch(url).then((response) => response.json());

    if (movie) {
      return generateMovie(movie);
    }
    return null;
  }

  function generateMovie(movie) {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movieCard");

    const movieDetails = `
        <h1>${movie.Title}</h1>
        <p>${movie.Plot}</p>
        <p>Directed By ${movie.Director}</p>
        <p>Box Office: ${movie.BoxOffice}</p>
        <figure>
          <img src="${movie.Poster}" alt="${movie.Title} Poster"/>
          <figcaption>
            ${movie.Title} - ${movie.Year}
          </figcaption>
        </figure>
      `;

    movieCard.innerHTML = movieDetails;

    root.appendChild(movieCard);
  }
});
