Pos.LineItemView = Ember.View.extend({
  tagName: 'li',
  classNames: ['line-item'],
  eventManager: Ember.Object.create({
    mouseUp: function(event, view){
      var contentId = view.content.id;
      view.trigger('itsClicked');
    },
    touchEnd: function(){
      mouseUp();
    }
  }),
  // touchStart: function() {
  //   this.trigger('itsClicked');
  // },
  // mouseDown: function() {
  //   debugger;
  //   this.trigger('itsClicked');
  // },
  itsClicked: function(e) {
    var contentProductId = this.content.get('productId');
    this.get('controller').send('removeListItem', contentProductId)
  }
});
