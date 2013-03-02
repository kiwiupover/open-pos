Pos.LineItem = DS.Model.extend({
  productId: DS.attr('number'),
  orderId: DS.attr('number'),
  quantity: DS.attr('number'),
  priceCents: DS.attr('number'),
  extendedCents: DS.attr('number')
});