var Todo = Backbone.Model.extend();

var TodoView = Backbone.View.extend({

  className: 'newbox',

  renderTemplate: _.template($('.todo-template').text()),

  events: {

    "click .done-button": "toggleDone",
    "click .js-remove-button": "remove",
    "click .add-button": "addNew",
    "click .edit-button": "editIt"
  },

  initialize: function() {
    console.log('hey buddy');
    $('.js-todo-items').prepend( this.el )
    this.render()

    this.listenTo(this.model, "change"s, this.render)  // this line makes it possible to update the view automatically
    this.listenTo(this.model, "change", this.render)
  },

  render: function() {
    this.$el.html(this.renderTemplate(this.model.attributes))
  },

  toggleDone: function() {
    this.model.set('completed', !this.model.get('completed'))

    this.$el.toggleClass('done');  
  },

  addNew: function() {
    this.model.set(".done")

    this.$el.prepend('.js-todo-items');
  },

  editIt: function () {
        this.$el.addClass('editing');
        this.$input.focus();
  },


  // toggleCompleted: function () {
  //       this.model.toggle();
  //     },




})

var fakeModel = {
  description: 'Learn Backbone',
  completed: false,
  id: _.uniqueId('id')
}

var modelInstance = new Todo(fakeModel)
var view = new TodoView( { model: modelInstance } )



















// var fakeModel = {
//   description: 'Feed the Dog',
//   completed: false,
//   id: _.uniqueId('id')
// }
 
// var Todo = Backbone.Model.extend();
 
// var TodoView = Backbone.View.extend({
 
//   className: 'todo-item',
//   renderTemplate: _.template($('.todo-template').text()),
 
//   events: {
//     "click .js-done": "toggleDone"
//   },
 
//   initialize: function(){
//     console.log('hey buddy');
//     $('.todo-items').prepend( this.el )
//     this.render()
 
//     this.listenTo(this.model, 'change', this.render)
//   },
 
//   render: function(){
//     this.$el.html(this.renderTemplate(this.model.attributes))
//   },
 
//   toggleDone: function(){
//     this.model.set('completed', !this.model.get('completed'))
//   }
 
// })
// var modelInstance = new Todo(fakeModel)
// var view = new TodoView( { model: modelInstance } )


