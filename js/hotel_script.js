
  var link = document.querySelector(".popup-btn");
  var popup = document.querySelector(".search-hotel");
  var close = document.querySelector(".search-hotel-close");
  var form = popup.querySelector("form");
  var arrivalDate = popup.querySelector("[name='arrival-date']");
  var departureDate = popup.querySelector("[name='departure-date']");
  var adults = popup.querySelector("[name='adults']");
  var kids = popup.querySelector("[name='kids']");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("search-hotel-show");
    arrivalDate.focus();
    return false;
  });

  close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("search-hotel-show");
  popup.classList.remove("search-error");
});

  form.addEventListener("submit", function(event) {
    if (!(arrivalDate.value && departureDate.value)) {
      event.preventDefault();
      popup.classList.remove("search-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("search-error");
    }
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode == 27) {
      if (popup.classList.contains("search-hotel-show")) {
        popup.classList.remove("search-hotel-show");
        popup.classList.remove("search-error");
      }
    }
  });
