// DS.RESTAdapter.configure("plurals", { category: "categories" });

Pos.Store = DS.Store.extend({
  adapter: '_ams'
});


// DS.RESTAdapter.map('Pos.Category', {
//   products: { embedded: 'always'}
// });

// DS.RESTAdapter.map('Pos.Order', {
//   lineItems: { embedded: 'always'}
// });
