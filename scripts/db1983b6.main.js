console.log("WELCOME TO THE APP!!!");var thingsToDo=[{description:"Pick up dinner",done:!1,id:_.uniqueId("todo")},{description:"Study JavaScript",done:!1,id:_.uniqueId("todo")},{description:"Learn Everything",done:!1,id:_.uniqueId("todo")}],superAwesomeTemplate=_.template($(".todo-template").text());_.each(thingsToDo,function(a){$(".js-todo-items").prepend(superAwesomeTemplate(a))}),$(".js-add-button").on("click",function(){var a=$(".js-new-todo-input").val(),b={description:a,done:!1,id:_.uniqueId("todo")},c=superAwesomeTemplate(b);$(".js-todo-items").prepend(c),thingsToDo.push(b)}),$(".js-todo-items").on("click",".remove-button",function(){$(this).parent(".newbox").remove()});