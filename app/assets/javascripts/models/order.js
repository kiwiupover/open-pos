Pos.Order = DS.Model.extend({
  customerEmail: DS.attr('string'),
  subtotalCents: DS.attr('number'),
  taxCents: DS.attr('number'),
  totalCents: DS.attr('number'),

  lineItems: DS.hasMany('Pos.LineItem'),

  cents: function() {
    return this.get('lineItems').getEach('lineItemTotalCents').reduce(function(accum, item) {
      return accum + item;
    }, 0);
  }.property('lineItems.@each.lineItemTotalCents')

});
