Pos.LineItem = DS.Model.extend({
  quantity: DS.attr('number'),
  priceCents: DS.attr('number'),
  name: DS.attr('string'),

  order: DS.belongsTo('order', { async: true }),
  product: DS.belongsTo('product', { embeded: 'always'}),

  lineItemTotalCents: function() {
    console.log(this.getProperties('name', 'quantity'));
    return parseInt(this.get('priceCents') * this.get('quantity'), 10);
  }.property('priceCents', 'quantity'),

  taxableTotalCents: function() {
    taxableLineItems = this.get('lineItems').findProperty('product.taxable', true);
  }

});
