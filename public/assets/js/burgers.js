$(document).ready(function() {
    
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();
  console.log("click on devoured");
    var burger_id = $(this).children(".burger_id").val();
    console.log(burger_id);
    $.ajax("/burgers/" + burger_id,{
      method: "PUT",
       data:{devoured:true}
    }).then(function(data) {
      console.log(data);
      // reload page to display devoured burger in proper column
      location.reload();
    });

  });
});