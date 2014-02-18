console.log("WELCOME TO THE TO-DO LIST!!!");

var thingsToDo = [
  {
    description: 'Pick up dinner',
    done: false,  
    id: _.uniqueId('todo')
  },
  {
    description: 'Study JavaScript',
    done: false,  
    id: _.uniqueId('todo')
  },
  {
    description: 'Learn Everything',
    done: false,  
    id: _.uniqueId('todo')
  },
];







// This refers to the template.
var superAwesomeTemplate = _.template($(".todo-template").text());

_.each(thingsToDo, function(everything){
  $('.js-todo-items').prepend(superAwesomeTemplate(everything));
});





//////////////// THIS IS MY ADD BUTTON ///////////////////////




$(".js-add-button").on('click', function(){

// This variable pulls the data from the users input.
  var newDescriptionData = $(".js-new-todo-input").val();

// Push the users data into an object and create a uniqueId.
  var todo = {
    description: newDescriptionData,
    done: false,  
    id: _.uniqueId('todo')
  }

// This variable gets template ready with user data.
var userdataTemplate = superAwesomeTemplate(todo);

$('.js-todo-items').prepend(userdataTemplate);

(thingsToDo).push(todo)
});





//////////////// THIS IS MY REMOVE BUTTON ///////////////////////





$('.js-todo-items').on('click', ".js-remove-button", function(){

    var descriptionData = $(this).parent().attr('id');

    thingsToDo = _.reject(thingsToDo, function(itemsInside){
      return itemsInside.id == descriptionData;
    });


    $(this).parent(".newbox").remove();
});





//////////////// THIS IS MY DONE BUTTON ///////////////////////




$('.js-todo-items').on('click', ".done-button", function(){

    $(this).toggleClass('done');
    console.log("toggleClass is working.");

    var descriptionData = $(this).parent().attr('id');
    console.log('descriptionData is defined');
    var finishedItem = _.findWhere(thingsToDo, function(item){
      return item.id == descriptionData
    });
    console.log('finishedItem is defined.');
    newStatus = !finishedItem.done;
    console.log('Got the done status');
    finishedItem.done = newStatus;
    console.log('Changed the status.')

    $(this).siblings(".newbox-description").toggleClass('done');
    console.log("toggleClass is working.");
});





//////////////// THIS IS MY EDIT BUTTON ///////////////////////






$('.js-todo-items').on('click', '.edit-button', function(){

    $(this).siblings('.newbox-description').children('.edit-input').css("visibility", "visible");

    $(this).siblings('.newbox-description').children('.edit-input').focus();

  });

  $('.js-todo-items').on('blur', '.edit-input', function(){
      var parentId = $(this).parents('.newbox').attr('id');
      var newDescription = $(this).val();
      var item = _.findWhere(thingsToDo, {id: parentId});

      item.description = newDescription

    $(this).siblings('h1').text(newDescription); 

    $(this).css("visibility", "hidden");
      console.log(this);

  });