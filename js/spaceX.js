let url = "https://api.spacexdata.com/v4/landpads";
let div = document.querySelector("#launchpads");

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((el) => {
      let image = el.images.large[0];
      console.log(image);
      let html = `
    <div class="col-md-6 col-lg-3">
      <div class="card bg-light">
        <div class="card-body">
          <img src="${image}" alt="" class="rounded-circle" />
        </div>
      </div>
    </div>
  `;
      div.insertAdjacentHTML("beforeend", html);
    });
  });
