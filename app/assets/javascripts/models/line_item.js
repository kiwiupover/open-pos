Pos.LineItem = DS.Model.extend({
  productId: DS.attr('number'),
  orderId: DS.attr('number'),
  quantity: DS.attr('number'),
  priceCents: DS.attr('number'),
  extendedCents: DS.attr('number'),
  name: DS.attr('string'),

  order: DS.belongsTo('Pos.Order'),

  lineItemTotalCents: function() {
    return parseInt(this.get('priceCents') * this.get('quantity'));
  }.property('priceCents', 'quantity')
});
