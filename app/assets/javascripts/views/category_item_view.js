Pos.CategoryItemView = Ember.View.extend({
	tagName: 'li',
  classNames: ['category'],
  touchStart: function() {
    this.trigger('itsClicked');
  },
  mouseDown: function() {
    this.trigger('itsClicked');
  },

  itsClicked: function(e) {
  	var contentId = this.content.id
  	this.get('controller').send('changeView', contentId)
  }
});


// eventManager: Ember.Object.create({
//    touchStart: function(event, view){
//     var contentId = view.content.id;
//     view.trigger('itsClicked');
//    },
//    mouseDown: function(){
//      touchStart();
//    }
//  }),
