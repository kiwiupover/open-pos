DS.RESTAdapter.configure("plurals", { category: "categories" });

Pos.Store = DS.Store.extend({
  revision: 11
});

DS.RESTAdapter.map('Pos.Category', {
  products: { embedded: 'always'}
});
