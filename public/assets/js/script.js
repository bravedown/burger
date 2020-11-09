$(function() {
    $(".change-burger").on("click", function(event) {
      var id = $(this).data("id");
      var devouredState = {
        devoured: !$(this).data("devoured")
      };
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(() => location.reload());
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      var newBurger = {
        burgerName: $("#new-burger-name").val().trim()
      };
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(() => location.reload());
    });
  });
  