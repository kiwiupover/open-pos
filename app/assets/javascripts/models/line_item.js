Pos.LineItem = DS.Model.extend({
  quantity: DS.attr('number'),
  priceCents: DS.attr('number'),
  name: DS.attr('string'),

  order: DS.belongsTo('Pos.Order'),
  product: DS.belongsTo('Pos.Product'),

  lineItemTotalCents: function() {
    return parseInt(this.get('priceCents') * this.get('quantity'));
  }.property('priceCents', 'quantity')

});
