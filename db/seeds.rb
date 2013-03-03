# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Category.create name: "Hard Drives"
Category.create name: "Memory"
Product.create(name: "500GB Hard Drive", description: "Great western digital hard drive", price_cents: 7995, upc_code: SecureRandom.hex, category_id: 1)
Product.create(name: "750GB Hard Drive", description: "Great western digital hard drive", price_cents: 9995, upc_code: SecureRandom.hex, category_id: 1)
Product.create(name: "100GB Hard Drive", description: "Great western digital hard drive", price_cents: 4995, upc_code: SecureRandom.hex, category_id: 1)
Product.create(name: "8GB Memory", description: "Great mac compatible Ram", price_cents: 7995, upc_code: SecureRandom.hex, category_id: 2)
Product.create(name: "4GB Memory", description: "Great mac compatible Ram", price_cents: 4995, upc_code: SecureRandom.hex, category_id: 2)
Product.create(name: "16GB Memory", description: "Great mac compatible Ram", price_cents: 12995, upc_code: SecureRandom.hex, category_id: 2)
Product.create(name: "32GB Memory", description: "Great mac compatible Ram", price_cents: 499995, upc_code: SecureRandom.hex, category_id: 2)
