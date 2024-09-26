document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM ready...FAMILY');

    const root = document.querySelector('#root');
    const movieForm = document.querySelector('#movieLookup');

    movieForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const movieTitle = formData.get('movieTitle');
        lookupMovie(movieTitle);
    });

    function lookupMovie(title) {
        const url = `https://www.omdbapi.com/?apikey=66f230e4&t=${title}&plot=full`;
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                // do something with data here
                console.log(data);
                return generateMovie(data);
            });
    }

    function generateMovie(movie) {
        const title = document.createElement('h1');
        title.innerText = movie.Title;
        root.appendChild(title);
    }
});
