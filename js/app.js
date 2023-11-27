const API_KEY = "ENTER YOUR API KEY HERE";

$(document).ready(function () {
  $(".search-form").on("submit", function (e) {
    e.preventDefault();
    //console.log($("#search-form-input").val());
    let query = $("#search-form-input").val();
    searchMovies(query);
  });
});

function searchMovies(query) {
  console.log("Alive");
  axios
    .get(`https://omdbapi.com/?apikey=${API_KEY}&s=${query}`)
    .then((response) => {
      console.log(response);
      let movies = response.data.Search;
      console.log(movies);
      //================Display movies=================
      renderMovieMain(movies);
    })
    .catch((err) => {
      console.log(err);
    });
}

function renderMovieMain(movies) {
  let output = "";
  $.each(movies, function (index, movie) {
    output += `<div class="col-lg-3 m-3">
                <img src="${movie.Poster}" alt="" />
                <h4 class='p-2'>${movie.Title}</h4>
    <a onclick="movieSelect('${movie.imdbID}')" class="btn btn-secondary">Детальна інформація </a>
  </div>`;
  });
  //console.log("OUTPUT", output);
  $("#movies").html(output);
}

//------------- Store Film ID between pages --------------
function movieSelect(id) {
  sessionStorage.setItem("movieID", id);
  //console.log(window);
  window.location = "details.html";
}

//------------  Film DETAILS -----------------------------

function getMovieDetails() {
  let movieID = sessionStorage.getItem("movieID");
  axios
    .get(`https://omdbapi.com/?apikey=${API_KEY}&i=${movieID}`)
    .then((response) => {
      console.log(response);
      let movie = response.data;
      console.log(movie);
      renderDetails(movie);
    })
    .catch((err) => {
      console.log(err);
    });
}

function renderDetails(movie) {
  let output = "";

  output += `<div class="row py-4">
        <div class="col-md-5 col-sm-12">
            <img src="${movie.Poster}" alt="" />
        </div>
        <div class="col-md-7 col-sm-12 p-4">
            <h2 class='p-2'>${movie.Title}</h2>
            <ul class="list-group">
                <li class="list-group-item">
                <strong>Жанр: </strong>${movie.Genre}</li>
                <li class="list-group-item">
                <strong>Актори: </strong>${movie.Actors}</li>
                <li class="list-group-item">
                <strong>Тривалість: </strong>${movie.Runtime}</li>
            </ul>
        </div>

  </div>
    <div class="row py-3">
        <div class="well">
            <h2>Сюжет фільму:</h2>
            <p>${movie.Plot}</p>
        </div>
    </div>
    <hr>
    <a href="https://www.imdb.com/title/${movie.imdbID}" 
    target="_blank">Подивитись стрічку на IMBD</a>
  
                  
                 
      <a href="index.html" class="btn btn-primary">Повернутися до пошуку </a>
    `;

  $("#movies").html(output);
}
