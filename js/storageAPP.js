// Country class

class Country {
  constructor(webdata) {
    let [
      {
        capital: [capVar],
        flag: flagVar,
        area: areaVar,
        name: { common: nameVar },
      },
    ] = webdata;

    this.name = nameVar;
    this.flag = flagVar;
    this.area = areaVar;
    this.capital = capVar;
  }
}

// function Country(name, flag, area) {
//   this.name = name;
//   this.flag = flag;
//   this.area = area;
// }

let country = {};

// ------------------- User Interface --------------------
class UI {
  static displayCountries() {
    let container = $("#country-list");
    container.html("");
    let list = Store.readCountries();

    list.forEach((country) => {
      UI.addCountryToList(country);
    });
  }

  static addCountryToList(country) {
    let list = $("#country-list");

    list.append(`
        <tr>
            <td>${country.flag}</td>
            <td>${country.name}</td>
            <td>${country.capital}</td>
            <td>${country.area}</td>
            <td><a href="" class="btn btn-danger btn-sm delete">X</td>
        </tr>
        `);
  }

  static deleteCountry(btn) {
    btn.parentElement.parentElement.remove();
  }

  static showError(message, class_) {
    let div = $("<div></div>");
    div.attr("class", `alert alert-${class_}`);
    div.text(message);
    $("#search-country").before(div);

    setTimeout(() => {
      $(".alert").remove();
    }, 3000);
  }
}

//-------------------- Storing ---------------------------

// Class for storing and retrieving data in localStore
class Store {
  static readCountries() {
    let list = [];
    let storage = localStorage.getItem("list");
    if (storage !== null) {
      list = JSON.parse(storage);
    }
    return list;
  }

  static addCountry(name) {
    $.ajax({
      type: "GET",
      url: `https://restcountries.com/v3.1/name/${name}`,
      dataType: "json",
    })
      .done(function (data) {
        country = new Country(data);
        let arr = Store.readCountries();
        arr.push(country);
        localStorage.setItem("list", JSON.stringify(arr));
        UI.displayCountries();
      })
      .fail(function (xhr, status, err) {
        console.log(err);
        UI.showError("This country have " + err, "danger");
      });
  }

  static removeCountry(name) {
    let arr = Store.readCountries();
    arr.forEach((country, index) => {
      if (country.name === name) {
        console.log(country.name);
        arr.splice(index, 1);
      }
    });
    localStorage.setItem("list", JSON.stringify(arr));
  }
}

//---------------------------- Events ---------------------------
$(document).ready(() => UI.displayCountries());

//  form submitting Event Listener
$(".form-control").click(function (e) {
  e.preventDefault();
  let name = $("#country-name").val();
  console.log("NAme", name);
  Store.addCountry(name);
});

// DELETE event

$("#country-list").click(function (e) {
  console.log("DELETE Attempt");
  if (e.target.classList.contains("delete")) {
    Store.removeCountry(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .previousElementSibling.textContent
    );
    UI.deleteCountry(e.target);
    UI.showError("This country have been deleted", "warning");
    setTimeout(() => {
      $(".alert").remove();
    }, 3000);
  }
});
