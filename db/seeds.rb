# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri"

User.destroy_all
Gallery.destroy_all
Video.destroy_all
Comment.destroy_all


user1 = User.create({ username: 'dave', email: 'dave@dave.com', password: '123456' })
user2 = User.create({ username: 'john', email: 'john@john.com', password: '123456' })
user3 = User.create({ username: 'rhonda', email: 'rhonda@rhonda.com', password: '123456' })
user4 = User.create({ username: 'will', email: 'will@will.com', password: '123456' })

v1 = Video.create({title:"fuel trucks parking", description:"fuel trucks parking, because they have to park"})
v2 = Video.create({title:"trail walkers", description:"a bit of hiking for some cardio and nature"})
v3 = Video.create({title:"Mile 22",description:"American action thriller film directed by Peter Berg and written by Lea Carpenter, from a story by Carpenter and Graham Roland. The film stars Mark Wahlberg, Iko Uwais, John Malkovich, Lauren Cohan, and Ronda Rousey."})
v4 = Video.create({title:"sumo wrestling David vs Goliath", description:"smaller sumo wrestler defeats larger one in an upset"})

v1.video.attach(io: open("https://viootube-dev.s3-us-west-1.amazonaws.com/GZ1TLtH61dmowAMefT67g3EY"), filename: "movie-mile-22.mov")
v2.video.attach(io: open("https://viootube-dev.s3-us-west-1.amazonaws.com/y3DaHzreQd5XLqbfrjZxLgk7"), filename: "sumo.mp4")
v3.video.attach(io: open("https://viootube-dev.s3-us-west-1.amazonaws.com/mNWv6EEeBbmZHbGTwoSfKEfA"), filename: "trail_walkers.mp4")
v4.video.attach(io: open("https://viootube-dev.s3-us-west-1.amazonaws.com/hpthw2C2tRvjTL82Yby9b9oS"), filename: "fuel_truck.mp4")

comment1 = Comment.create({author_id: user1.id, video_id: v4.id, body: "Wow, it's really exciting watching sumo wrestling."})
comment2 = Comment.create({author_id: user2.id, video_id: v4.id, body: "I wonder if it's easy to go see live."})
comment3 = Comment.create({author_id: user3.id, video_id: v4.id, body: "I can't imagine how much these people must train all their lives long. I guess part of their practice is that they smack a wooden pole repeatedly, all. day. long."})
comment4 = Comment.create({author_id: user4.id, video_id: v4.id, body: "Hmmmm. that doesn't sound very pleasant"})




