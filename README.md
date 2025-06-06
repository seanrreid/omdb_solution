# JavaScript Movie Lookup
<!-- markdownlint-disable no-inline-html -->

Use the [OMDB API](https://www.omdbapi.com/) find and review movies!

:::tip
Register for an [API Key](https://www.omdbapi.com/apikey.aspx) (There is a free version, limited to 1000 requests/day)
:::

## Goals

- Accept user input via a form that recieves a movie title.
- Search for that movie via the OMDB API: `http://www.omdbapi.com/?t=[some movie title]&apikey=[your api key]`
- Return that movies's information.
  - Movie poster
  - Movie title
  - Release year
  - Plot description
  - Ratings
- Allow a user to list multiple movies
