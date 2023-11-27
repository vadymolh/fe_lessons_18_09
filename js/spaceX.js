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
           <p>Element</p>
          <img src="${image}" alt="" class="rounded-circle img-thumbnail" width=300 height=300 "/>
        </div>
      </div>
    </div>
  `;
      div.firstElementChild.insertAdjacentHTML("afterend", html);
    });
  });
