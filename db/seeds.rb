# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#Category.create name: "Hard Drives"
#Category.create name: "Memory"
#Category.create name: "Optical Drives"
#Product.create name: "500GB Hard Drive", description: "Great western digital hard drive", price_cents: 7995, upc_code: SecureRandom.hex, category_id: 1
#Product.create name: "750GB Hard Drive", description: "Great western digital hard drive", price_cents: 9995, upc_code: SecureRandom.hex, category_id: 1
#Product.create name: "100GB Hard Drive", description: "Great western digital hard drive", price_cents: 4995, upc_code: SecureRandom.hex, category_id: 1
#Product.create name: "8GB Memory", description: "Great mac compatible Ram", price_cents: 7995, upc_code: SecureRandom.hex, category_id: 2
#Product.create name: "4GB Memory", description: "Great mac compatible Ram", price_cents: 4995, upc_code: SecureRandom.hex, category_id: 2
#Product.create name: "16GB Memory", description: "Great mac compatible Ram", price_cents: 12995, upc_code: SecureRandom.hex, category_id: 2
#Product.create name: "32GB Memory", description: "Great mac compatible Ram", price_cents: 499995, upc_code: SecureRandom.hex, category_id: 2
#Product.create name: "48x DVD Drive", description: "3.5 Drive", price_cents: 16999, upc_code: SecureRandom.uuid, category_id: 3

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


Category.create name: "Smokables"
Category.create name: "Edibles"
Category.create name: "Accessories"
Category.create name: "Seeds"

Product.create name: "White widow", description: "The white widow is particularly known for its high THC content. White Widow is also popular with growers because of its high yield. The female White Widow grows fast and thick buds. The taste and smell of White widow can be described as: sweet and sharp. The effect can best be described as heavily stoned.",  price_cents: "8999",  upc_code: SecureRandom.hex, category_id: 1
Product.create name: "Power Plan", description: "Power Plant is very fast to flower and produces reliable, heavy harvests large compact buds. This Indica-dominant ganja has a recessive Sativa influence which genetic effect, adding a nice high to an incredibly strong stoned feeling.",  price_cents: "7499",  upc_code: SecureRandom.hex, category_id: 1
Product.create name: "Northern Light", description: "Northern Lights is one of the strongest types of weed. Northern Light  is really a success, the good yield, taste and high combined together form a great new product. Many have loved him for his strong effects, others to the distinctive scent. Northern Light X has a mild spicy flavor.",  price_cents: "10999",  upc_code: SecureRandom.hex, category_id: 1
Product.create name: "super skunk", description: "Easy to grow and clone. Super Skunk is easier to cut than the white species. Yields can be lucrative. Still famous for its potent flavor and strong high.",  price_cents: "7999",  upc_code: SecureRandom.hex, category_id: 1
Product.create name: "K2", description: "K2 is kind of older and well known by the commercial marijuana growers. Easy to grow and yield a lot of THC. It is a relatively compact plant forming tight buds. Not the best weed.",  price_cents: "8799",  upc_code: SecureRandom.hex, category_id: 1
Product.create name: "Bubblelicious", description: "Bubble gum has strong growth and high THC content. A plant with many round rock-hard tops. If you smoke it has a sweet odor and taste. Sometimes they leave the taste of chewing gum when you smoke it",  price_cents: "7599",  upc_code: SecureRandom.hex, category_id: 1
Product.create name: "Orange Bud", description: "Orange Bud is at all times easy to clone and grow. Under ideal conditions, large crop of good quality are obtained. Gives you a mild high.",  price_cents: "3499",  upc_code: SecureRandom.hex, category_id: 1
Product.create name: "B52", description: "B-52 has a nice sweet taste and gives you a  long stoned in which it almost knocks you out. B-52 is a truly superior Skunk hybrid. Not for the novice user.",  price_cents: "5699",  upc_code: SecureRandom.hex, category_id: 1
Product.create name: "Ice", description: "Ice peaks are covered with thousands of crystals and have rock hard buds. Ice has a strong effect and the smell is strong.",  price_cents: "4599",  upc_code: SecureRandom.hex, category_id: 1
Product.create name: "Super Silver Haze", description: "Super Silver Haze is one of the strongest weed species. The genetics of this plant consists of Skunk, Northern Light and Haze. The aroma of the marijuana plant is difficult to describe, let's say: a strange pine scent with a gasoline odor.",  price_cents: "5699",  upc_code: SecureRandom.hex, category_id: 1
Product.create name: "Amnesia Haze", description: "Amnesia Haze has a sharp and sour taste. The effect of this haze strikes quickly and is especially pretty strong mentally and even experienced smokers recognize this. The color is light green and all along the bud it has orange brown hairs with a lot of THC.",  price_cents: "6799",  upc_code: SecureRandom.hex, category_id: 1
Product.create name: "Diesel", description: "Sour Diesel taste combined with its effects may be considered an exptreme sport version of cannabis. The stone pulls smokers into the sky fast with a viscerally uplifting pleasure and lots of consciousness expansion in the direction of spirituality. This good-vibe variety may help alleviate chronic depression, as well as the ordinary blahs by encouraging a change in perspective.",  price_cents: "3499",  upc_code: SecureRandom.hex, category_id: 1

Product.create name: "Fudge", description: "Box of 3",  price_cents: "1599",  upc_code: SecureRandom.hex, category_id: 2
Product.create name: "Salsa Verde", description: "jar",  price_cents: "1299",  upc_code: SecureRandom.hex, category_id: 2
Product.create name: "Brownies", description: "box of 6",  price_cents: "499",  upc_code: SecureRandom.hex, category_id: 2
Product.create name: "Beer", description: "case of 6",  price_cents: "6999",  upc_code: SecureRandom.hex, category_id: 2
Product.create name: "Banana Bread", description: "loaf",  price_cents: "999",  upc_code: SecureRandom.hex, category_id: 2
Product.create name: "Carrot cake", description: "3 pieces",  price_cents: "499",  upc_code: SecureRandom.hex, category_id: 2
Product.create name: "Macaroni and trees", description: "24oz",  price_cents: "1299",  upc_code: SecureRandom.hex, category_id: 2
Product.create name: "Jolly Ranchers", description: "24pieces",  price_cents: "999",  upc_code: SecureRandom.hex, category_id: 2
Product.create name: "Pancakes", description: "2 pack",  price_cents: "699",  upc_code: SecureRandom.hex, category_id: 2
Product.create name: "Lazy Lasagna", description: "2 pack",  price_cents: "1499",  upc_code: SecureRandom.hex, category_id: 2
Product.create name: "Cheesebburger Pie", description: "frozen",  price_cents: "1599",  upc_code: SecureRandom.hex, category_id: 2
Product.create name: "Rice Cryspi Treats", description: "4 pack",  price_cents: "11.99",  upc_code: SecureRandom.hex, category_id: 2

Product.create name: "Water Bongs", description: "all colors",  price_cents: "2799",  upc_code: SecureRandom.hex, category_id: 3
Product.create name: "Smoking Pipes", description: "small",  price_cents: "1699",  upc_code: SecureRandom.hex, category_id: 3
Product.create name: "Herb Grinders", description: "brown",  price_cents: "1499",  upc_code: SecureRandom.hex, category_id: 3
Product.create name: "Vaporizer", description: "blue",  price_cents: "2499",  upc_code: SecureRandom.hex, category_id: 3
Product.create name: "Candles", description: "3 colors",  price_cents: "1499",  upc_code: SecureRandom.hex, category_id: 3
Product.create name: "rolling papers", description: "rice/white",  price_cents: "1299",  upc_code: SecureRandom.hex, category_id: 3
Product.create name: "smoking code roller", description: "wood color",  price_cents: "1899",  upc_code: SecureRandom.hex, category_id: 3
Product.create name: "Wooden Rollin Station", description: "wood color",  price_cents: "1499",  upc_code: SecureRandom.hex, category_id: 3
Product.create name: "Air Fresheners", description: "package of 3",  price_cents: "1799",  upc_code: SecureRandom.hex, category_id: 3
Product.create name: "Lighters", description: "gold",  price_cents: "2299",  upc_code: SecureRandom.hex, category_id: 3
Product.create name: "Glass Jars", description: "blue",  price_cents: "1999",  upc_code: SecureRandom.hex, category_id: 3
Product.create name: "Stage Storage", description: "brown",  price_cents: "1999",  upc_code: SecureRandom.hex, category_id: 3

Product.create name: "White Widow",  price_cents: "2999",  upc_code: SecureRandom.hex, category_id: 4
Product.create name: "Big Bud",  price_cents: "3499",  upc_code: SecureRandom.hex, category_id: 4
Product.create name: "Northern Lights",  price_cents: "4399",  upc_code: SecureRandom.hex, category_id: 4
Product.create name: "Crystal",  price_cents: "2299",  upc_code: SecureRandom.hex, category_id: 4
Product.create name: "Ice",  price_cents: "4499",  upc_code: SecureRandom.hex, category_id: 4
Product.create name: "White Rhino",  price_cents: "8899",  upc_code: SecureRandom.hex, category_id: 4
Product.create name: "purple power",  price_cents: "9999",  upc_code: SecureRandom.hex, category_id: 4
Product.create name: "THC Bomb",  price_cents: "4599",  upc_code: SecureRandom.hex, category_id: 4
Product.create name: "Blubblegum",  price_cents: "6699",  upc_code: SecureRandom.hex, category_id: 4
Product.create name: "Hollands hope",  price_cents: "7899",  upc_code: SecureRandom.hex, category_id: 4
Product.create name: "AK48",  price_cents: "5599",  upc_code: SecureRandom.hex, category_id: 4
Product.create name: "Afghan",  price_cents: "5599",  upc_code: SecureRandom.hex, category_id: 4
