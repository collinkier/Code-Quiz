<script src="https://code.jquery.com/jquery.js" type = "text/javascript"></script>
        
count = 0;

//First button group

$("#correct1").on("click", function(){
  count ++;
  alert("You are correct! Your new score is " + count);
  $("#ButtonG1").hide();
  $("#correctBtn1").show();
  });

$("#false1").on("click", function(){
  count --;
  alert("Oops! That's incorrect! Your score is now " + count);
  $("#ButtonG1").hide();
  $("#falseBtn1").show();
});

$("#falseA1").on("click", function(){
  count --;
  alert("Oops! That's incorrect! Your score is now " + count);
  $("#ButtonG1").hide();
  $("#falseBtn1").show();
});

//Second button group

$("#correct2").on("click", function(){
  count ++;
  alert("You are correct! Your new score is " + count);
  $("#ButtonG2").hide();
  $("#correctBtn2").show();
  });

$("#false2").on("click", function(){
  count --;
  alert("Oops! That's incorrect! Your score is now " + count);
  $("#ButtonG2").hide();
  $("#falseBtn2").show();
});

$("#falseA2").on("click", function(){
  count --;
  alert("Oops! That's incorrect! Your score is now " + count);
  $("#ButtonG2").hide();
  $("#falseBtn2").show();
});

//Third button group

$("#correct3").on("click", function(){
  count ++;
  alert("You are correct! Your new score is " + count);
  $("#ButtonG3").hide();
  $("#correctBtn3").show();
  });

$("#false3").on("click", function(){
  count --;
  alert("Oops! That's incorrect! Your score is now " + count);
  $("#ButtonG3").hide();
  $("#falseBtn3").show();
});

$("#falseA3").on("click", function(){
  count --;
  alert("Oops! That's incorrect! Your score is now " + count);
  $("#ButtonG3").hide();
  $("#falseBtn3").show();
});

//Fourth button group

$("#correct4").on("click", function(){
  count ++;
  alert("You are correct! Your new score is " + count);
  $("#ButtonG4").hide();
  $("#correctBtn4").show();
  });

$("#false4").on("click", function(){
  count --;
  alert("Oops! That's incorrect! Your score is now " + count);
  $("#ButtonG4").hide();
  $("#falseBtn4").show();
});

$("#falseA4").on("click", function(){
  count --;
  alert("Oops! That's incorrect! Your score is now " + count);
  $("#ButtonG4").hide();
  $("#falseBtn4").show();
});

//Fifth button group

$("#correct5").on("click", function(){
  count ++;
  alert("You are correct! Your new score is " + count);
  $("#ButtonG5").hide();
  $("#correctBtn5").show();
  });

$("#false5").on("click", function(){
  count --;
  alert("Oops! That's incorrect! Your score is now " + count);
  $("#ButtonG5").hide();
  $("falseBtn5").show();
});

$("#falseA5").on("click", function(){
  count --;
  alert("Oops! That's incorrect! Your score is now " + count);
  $("#ButtonG5").hide();
  $("#falseBtn5").show();
});
