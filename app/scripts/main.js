console.log("WELCOME TO THE APP!!!");

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

_.each(thingsToDo, function(itemsInside){
  $('.js-todo-items').prepend(superAwesomeTemplate(itemsInside));
});





//////////////// THIS IS MY ADD BUTTON ///////////////////////




$(".js-add-button").on('click', function(){

// This variable pulls the data from the users input.
  var descriptionData = $(".js-new-todo-input").val();

// Push the users data into an object and create a uniqueId.
  var todo = {
    description: descriptionData,
    done: false,  
    id: _.uniqueId('todo')
  }

// This variable gets template ready with user data.
var userdataTemplate = superAwesomeTemplate(todo);

$('.js-todo-items').prepend(userdataTemplate);

(thingsToDo).push(todo)
});





//////////////// THIS IS MY REMOVE BUTTON ///////////////////////





$('.js-todo-items').on('click', ".remove-button", function(){

    // var descriptionData = $(this).parent().attr('id');

    // thingsToDo = _reject(thingsToDo, function(itemsInside){
    //   return itemsInside.id = descriptionData;
    // });


    $(this).parent(".newbox").remove();
});
































































// console.log('This is fun!!!');

// var todoList = [
//   {
//     description: 'Get groceries',
//     done: false,
//     id: _.uniqueId()
//   },
//   {
//     description: 'Leap',
//     done: true,
//     id: _.uniqueId()
//   },
//   {
//     description: 'Pet the dog',
//     done: false,
//     id: _.uniqueId()
//   }
// ]


// $(document).ready(function(){

//   var todoTemplate = _.template($('.todo-template').text())

//   // render preloaded data
//   _.each(todoList, function(item){
//     $('.todo-items').prepend( todoTemplate(item) )
//   })

//   $('.todo-items').on('click', '.js-remove-todo', function(){
//     var parentId = $(this).parent().attr('id').split('-')[1];

//     console.log('about to remove todo #',parentId)
//     console.log('before removing, todoList.length is',todoList.length)

//     todoList = _.reject(todoList, function(item){ 
//       return item.id == parentId;
//     })

//     $(this).parent().remove();

//     console.log('after removing, todoList.length is',todoList.length)

//   })

//   // Setup Add Button click event
//   $('.js-add-todo').click(function(){

//     // grab the description from the input
//     var description = $('.js-new-todo-input').val();

//     // create an object literal with the description
//     // and 'done' set to false
//     var todo = {
//       description: description,
//       done: false,
//       id: _.uniqueId()
//     }

//     // store the rendered template string
//     var renderedTemplate = todoTemplate(todo);

//     // now prepend the template into the dom
//     $('.todo-items').prepend(renderedTemplate);
//   })



//   // Check off button click event
//   $('.js-add-todo').click(function(){

//     // grab the description from the input
//     var description = $('.js-new-todo-input').val();

//     // create an object literal with the description
//     // and 'done' set to false
//     var todo = {
//       description: description,
//       done: false,
//       id: _.uniqueId()
//     }

//     // store the rendered template string
//     var renderedTemplate = todoTemplate(todo);

//     // now prepend the template into the dom
//     $('.todo-items').prepend(renderedTemplate);
//   })

// });