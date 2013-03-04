Pos.Order = DS.Model.extend({
  createdAt: DS.attr('date'),
  customerEmail: DS.attr('string'),
  paid: DS.attr('boolean'),
  hold: DS.attr('boolean'),
  subtotalCents: DS.attr('number'),
  taxCents: DS.attr('number'),
  totalCents: DS.attr('number'),

  lineItems: DS.hasMany('Pos.LineItem'),

  cents: function() {
    return this.get('lineItems').getEach('priceCents').reduce(function(accum, item) {
      return accum + item;
    }, 0);
  }.property('lineItems.@each.cents')

});