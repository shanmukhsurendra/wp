$(document).ready(function(){

  $('form').on('submit', function(){

      var title = $('form input');
      var todo = {title: title.val()};

      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          //do something with the data via f ront-end framework
          location.reload();
        }
      });

      return false;

  });

  $('p').on('click', function(){
      // var item = $(this).attr(name);
      console.log(name);
      console.log("i am heer");
      var item = $(this).text();
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
