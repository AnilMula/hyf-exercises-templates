/* Using chaining

Fetch the astronauts http://api.open-notify.org/astros.json
After the astronauts has been fetched, fetch movies using this api
https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json
Log out the movies */

//fetch astronauts data if we get a success message then fetch movies and display them
fetch("http://api.open-notify.org/astros.json").then((response) => {
  response.json().then((astronauts) => {
    console.log(astronauts);
    if (astronauts.message == "success") {
      // astronauts data has been fetched successfully
      //next fetch movies data
      fetch(
        "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
      )
        .then((response) => response.json())
        .then((movies) => {
          console.log(movies);
        });
    }
  });
});

//using async
async function logMoviesOnAustronautsSuccess() {
  const astronautsPromise = await fetch(
    "http://api.open-notify.org/astros.json"
  );
  const astronauts = await astronautsPromise.json();
  if ((astronauts.message = "success")) {
    const moviesPromise = fetch(
      "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
    );
    const movies = await (await moviesPromise).json();
    console.log(movies);
  }
}
logMoviesOnAustronautsSuccess();
