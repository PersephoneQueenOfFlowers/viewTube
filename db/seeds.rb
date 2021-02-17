# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Gallery.destroy_all
Video.destroy_all


user1 = User.create({ username: 'dave', email: 'dave@dave.com', password: '123456' })
user2 = User.create({ username: 'john', email: 'john@john.com', password: '123456' })
user3 = User.create({ username: 'rhonda', email: 'rhonda@rhonda.com', password: '123456' })
user4 = User.create({ username: 'will', email: 'will@will.com', password: '123456' })

v1 = Video.create({title:"Mile 22",description:"American action thriller film directed by Peter Berg and written by Lea Carpenter, from a story by Carpenter and Graham Roland. The film stars Mark Wahlberg, Iko Uwais, John Malkovich, Lauren Cohan, and Ronda Rousey."})
v2 = Video.create({title:"sumo wrestling David vs Goliath", description:"smaller sumo wrestler defeats larger one in an upset"})
v3 = Video.create({title:"trail walkers", description:"a bit of hiking for some cardio and nature"})
v4 = Video.create({title:"fuel trucks parking", description:"fuel trucks parking, because they have to park"})

v1.video.attach(io: File.open("/Users/sethschoenfeld/Desktop/uploads/movie-mile-22.mov"), filename: "movie-mile-22.mov")
v2.video.attach(io: File.open("/Users/sethschoenfeld/Desktop/uploads/sumo.mp4"), filename: "sumo.mp4")
v3.video.attach(io: File.open("/Users/sethschoenfeld/Desktop/uploads/trail_walkers.mp4"), filename: "trail_walkers.mp4")
v4.video.attach(io: File.open("/Users/sethschoenfeld/Desktop/uploads/fuel_truck.mp4"), filename: "fuel_truck.mp4")






