var countries = [
  "manger",
  "boire",
  "faire",
  "vivre",
  "marcher",
  "aimer",
  "etre",
  "savoir",
  "chanter",
];
var textfield = document.querySelector(".autocomplete");
var suggestions = document.querySelector(".suggestions");
var autocomplete = function () {
  var items = countries.filter((value) => value.includes(textfield.value));
  suggestions.innerHTML = items.join(", ");
};
textfield.addEventListener("keyup", autocomplete);

var sections = document.querySelectorAll(".card-option-times");
sections.forEach((section) => {
  var checkAllTrigger = section.querySelector(".check-all");
  var uncheckAllTrigger = section.querySelector(".un-check-all");
  var checkboxes = section.querySelectorAll(".checkbox");
  var checkAll = function () {
    console.log("check-all", checkboxes);
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
  };
  var uncheckAll = function () {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };
  checkAllTrigger.addEventListener("click", checkAll);
  uncheckAllTrigger.addEventListener("click", uncheckAll);
});
