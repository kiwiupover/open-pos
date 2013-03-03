# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Category.create name: "Hard Drives"
Category.create name: "Memory"
Category.create name: "Optical Drives"
Product.create name: "500GB Hard Drive", description: "Great western digital hard drive", price_cents: 7995, upc_code: SecureRandom.hex, category_id: 1
Product.create name: "750GB Hard Drive", description: "Great western digital hard drive", price_cents: 9995, upc_code: SecureRandom.hex, category_id: 1
Product.create name: "100GB Hard Drive", description: "Great western digital hard drive", price_cents: 4995, upc_code: SecureRandom.hex, category_id: 1
Product.create name: "8GB Memory", description: "Great mac compatible Ram", price_cents: 7995, upc_code: SecureRandom.hex, category_id: 2
Product.create name: "4GB Memory", description: "Great mac compatible Ram", price_cents: 4995, upc_code: SecureRandom.hex, category_id: 2
Product.create name: "16GB Memory", description: "Great mac compatible Ram", price_cents: 12995, upc_code: SecureRandom.hex, category_id: 2
Product.create name: "32GB Memory", description: "Great mac compatible Ram", price_cents: 499995, upc_code: SecureRandom.hex, category_id: 2
Product.create name: "48x DVD Drive", description: "3.5 Drive", price_cents: 16999, upc_code: SecureRandom.uuid, category_id: 3

Order.create customer_email: "desiree@desiree.com", paid: true, subtotal_cents: 39900, tax_cents: 39900*0.095, total_cents: 39900*1.095
LineItem.create order_id: 1, product_id: 1, quantity: 2, price_cents: 39900, extended_cents: 39900*2
Order.create customer_email: "dave@dave.com", paid: true, subtotal_cents: 29900, tax_cents: 29900*0.095, total_cents: 29900*1.095
LineItem.create order_id: 2, product_id: 2, quantity: 1, price_cents: 29900, extended_cents: 29900*1
Order.create customer_email: "troy@troy.com", paid: true, subtotal_cents: 19900, tax_cents: 19900*0.095, total_cents: 19900*1.095
LineItem.create order_id: 3, product_id: 3, quantity: 5, price_cents: 19900, extended_cents: 19900*5
Order.create customer_email: "jonah@jonah.com", hold: true, subtotal_cents: 9900, tax_cents: 9900*0.095, total_cents: 9900*1.095
LineItem.create order_id: 4, product_id: 4, quantity: 3, price_cents: 9900, extended_cents: 9900*3
Order.create customer_email: "jayden@jayden.com", hold: true, subtotal_cents: 4900, tax_cents: 4900*0.095, total_cents: 4900*1.095
LineItem.create order_id: 5, product_id: 5, quantity: 1, price_cents: 4900, extended_cents: 4900*1
Order.create customer_email: "cole@cole.com", hold: true, subtotal_cents: 14900, tax_cents: 14900*0.095, total_cents: 14900*1.095
LineItem.create order_id: 6, product_id: 6, quantity: 10, price_cents: 14900, extended_cents: 14900*10
Order.create customer_email: "britt@britt.com", subtotal_cents: 3900, tax_cents: 3900*0.095, total_cents: 3900*1.095
LineItem.create order_id: 7, product_id: 7, quantity: 1, price_cents: 3900, extended_cents: 3900*1
