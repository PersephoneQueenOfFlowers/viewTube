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

v1 = Video.create({})
v2 = Video.create({})
v3 = Video.create({})
v4 = Video.create({})

v1.video.attach(io: File.open("/Users/sethschoenfeld/Desktop/uploads/movie-mile-22.mov"), filename: "movie-mile-22.mov")
v2.video.attach(io: File.open("/Users/sethschoenfeld/Desktop/uploads/sumo.mp4"), filename: "sumo.mp4")
v3.video.attach(io: File.open("/Users/sethschoenfeld/Desktop/uploads/trail_walkers.mp4"), filename: "trail_walkers.mp4")
v4.video.attach(io: File.open("/Users/sethschoenfeld/Desktop/uploads/fuel_truck.mp4"), filename: "fuel_truck.mp4")






