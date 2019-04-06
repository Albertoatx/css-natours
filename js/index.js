

// Make the navigation functional: After clicking on a navigation link the menu should close
var navlinks = document.querySelectorAll('.navigation__link');

Array.from(navlinks).forEach(function (link) {
  link.addEventListener('click', function () {
    document.getElementById("navi-toggle").checked = false; // uncheck the checkbox
  });
});
