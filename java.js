// This code runs when the page loads
$(function() {

  $(".eventitem").on("click", function(event) {
    event.preventDefault();
    var removeevent = $(this);
    console.log(removeevent);
    removeevent.parent().remove();
  })

})


