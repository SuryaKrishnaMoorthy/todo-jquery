function newItem() {
  //javascript
  //1. Adding a new item to the list of items:

  let inputValue = $("#input").val();

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    $("#list").append(
      `<li class="list-item">${inputValue} <crossOutButton>X</crossOutButton></li>`
    );
    $("#input").val("");
  }

  //2. Crossing out an item from the list of items:

  $("#list").on("dblclick", ".list-item", function () {
    $(this).toggleClass("strike");
  });

  //3(i). Adding the delete button "X":
  // Added in step 1

  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  $("crossOutButton").on("click", function () {
    $(this).parent().addClass("delete");
  });

  // 4. Reordering the items:
  $("#list").sortable();
}
