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

v5 = Video.create({title:"Alice in Wonderland", description:"A 1951 American animated musical fantasy film produced by Walt Disney Productions and based on the Alice books by Lewis Carroll."})
v6 = Video.create({title:"Barbarella", description:"A 1968 science fiction film directed by Roger Vadim, based on the French comic series of the same name by Jean-Claude Forest."})
v7 = Video.create({title:"Batman1989",description:"American superhero film directed by Tim Burton and produced by Jon Peters and Peter Guber, based on the DC Comics character of the same name."})
v8 = Video.create({title:"Enter the Dragon", description:"A 1973 martial arts action film directed by Robert Clouse. The film stars Bruce Lee, John Saxon and Jim Kelly. It would be Lee's final completed film appearance before his death on 20 July 1973 at age 32."})
v9 = Video.create({title:"Fourty Year-Old Virgin", description:"A 2005 American sex comedy film directed by Judd Apatow in his directorial debut.[2] The film stars Steve Carell (who co-wrote the film's screenplay with Apatow) as the titular 40-year-old virgin Andy, a clerk at an electronic goods store, whose colleagues resolve to help him lose his virginity. "})
v10 = Video.create({title:"Frankenstein 1932", description:"A 1931 American pre-Code science fiction horror film directed by James Whale, produced by Carl Laemmle Jr., and adapted from a 1927 play by Peggy Webling, which in turn was based on Mary Shelley's 1818 novel Frankenstein; or, The Modern Prometheus."})
v11 = Video.create({title:"Harry Potter & The Sorcerer's Stone",description:"A 2001 fantasy film directed by Chris Columbus and distributed by Warner Bros. Pictures, based on J. K. Rowling's 1997 novel of the same name."})
v12 = Video.create({title:"It's a Wonderful Life", description:"A 1946 American Christmas family fantasy drama film produced and directed by Frank Capra, based on the short story and booklet The Greatest Gift, which Philip Van Doren Stern self-published in 1943 and is in turn loosely based on the 1843 Charles Dickens novella A Christmas Carol."})
v13 = Video.create({title:"Journey to the Center of the Earth", description:"A 1959 American science fiction adventure film in color by De Luxe, distributed by 20th Century Fox. The film, produced by Charles Brackett and directed by Henry Levin, stars James Mason, Pat Boone, and Arlene Dahl. Bernard Herrmann wrote the film score, and the film's storyline was adapted by Charles Brackett from the 1864 novel of the same name by Jules Verne."})
v14 = Video.create({title:"King Kong vs Godzilla", description:"A 1962 Japanese kaiju film directed by Ishirō Honda, with special effects by Eiji Tsuburaya. Produced and distributed by Toho Studios, it is the third film in the Godzilla franchise, and the first of two Toho-produced films featuring King Kong. It is also the first time that both characters appeared on film in color and widescreen."})
v15 = Video.create({title:"O' Brother, Where art Thou",description:"A 2000 crime comedy-drama film written, produced, co-edited and directed by Joel and Ethan Coen, and starring George Clooney, John Turturro, and Tim Blake Nelson, with Chris Thomas King, John Goodman, Holly Hunter, and Charles Durning in supporting roles."})
v16 = Video.create({title:"Omega Man", description:"A 1971 American post-apocalyptic action film[3] directed by Boris Sagal and starring Charlton Heston as a survivor of a global pandemic. "})
v17 = Video.create({title:"Princess Bride", description:"A 1987 American fantasy adventure comedy film directed and co-produced by Rob Reiner, starring Cary Elwes, Robin Wright, Mandy Patinkin, Chris Sarandon, Wallace Shawn, André the Giant, and Christopher Guest. Adapted by William Goldman from his 1973 novel The Princess Bride."})
v18 = Video.create({title:"Revenge of the Creature", description:"first of two Universal-International sequels to Creature from the Black Lagoon. It was the only 3D film released in 1955 and the only 3D sequel to a 3D film released during 'the golden age of 3D'."})
v19 = Video.create({title:"Robinson Crusoe",description:"Also known as Adventures of Robinson Crusoe), a 1954 Mexican adventure film by director Luis Buñuel, based on the 1719 novel Robinson Crusoe by Daniel Defoe."})
v20 = Video.create({title:"The Sound of Music", description:"A 1965 American musical drama film produced and directed by Robert Wise, and starring Julie Andrews and Christopher Plummer, with Richard Haydn, Peggy Wood, Charmian Carr, and Eleanor Parker. "})
v21 = Video.create({title:"Spongebob Squarepants", description:"A 2004 American live-action/animated adventure comedy film based on the animated television series SpongeBob SquarePants. The film was directed, co-written, and produced by series creator Stephen Hillenburg, with live-action sequences directed by Mark Osborne."})
v22 = Video.create({title:"To Catch a Thief", description:"A 1955 American romantic thriller film directed by Alfred Hitchcock, from a screenplay by John Michael Hayes based on the 1952 novel of the same name by David Dodge.[3] The film stars Cary Grant as a retired cat burglar who has to save his reformed reputation by catching an imposter preying on the wealthy tourists of the French Riviera. Grace Kelly stars opposite him as his romantic interest in her final film with Hitchcock."})
v23 = Video.create({title:"War of the Worlds",description:"Also known in promotional material as H. G. Wells' The War of the Worlds) is a 1953 American science fiction film from Paramount Pictures, produced by George Pal, directed by Byron Haskin, and starring Gene Barry and Ann Robinson."})
v24 = Video.create({title:"Willy Wonka and the Chocolate Factory", description:"A 1971 American musical fantasy film directed by Mel Stuart and starring Gene Wilder as Willy Wonka. It is an adaptation of the 1964 novel Charlie and the Chocolate Factory by Roald Dahl. The film tells the story of a poor child named Charlie Bucket who, after finding a Golden Ticket in a chocolate bar, visits Willy Wonka's chocolate factory along with four other children from around the world."})

v1.video.attach(io: open("https://viootube-dev.s3-us-west-1.amazonaws.com/GZ1TLtH61dmowAMefT67g3EY"), filename: "movie-mile-22.mov")
v2.video.attach(io: open("https://viootube-dev.s3-us-west-1.amazonaws.com/y3DaHzreQd5XLqbfrjZxLgk7"), filename: "sumo.mp4")
v3.video.attach(io: open("https://viootube-dev.s3-us-west-1.amazonaws.com/mNWv6EEeBbmZHbGTwoSfKEfA"), filename: "trail_walkers.mp4")
v4.video.attach(io: open("https://viootube-dev.s3-us-west-1.amazonaws.com/hpthw2C2tRvjTL82Yby9b9oS"), filename: "fuel_truck.mp4")

v5.video.attach(io: open("https://viootube-dev.s3-us-west-1.amazonaws.com/Alice_In_Wonderland_1951_theatrical_trailer_512kb.mp4"), filename: "Alice_In_Wonderland_1951_theatrical_trailer_512kb.mp4")
v6.video.attach(io: open("https://viootube-dev.s3-us-west-1.amazonaws.com/Barbarella+-+Movie+Trailer+%5BHD%5D+(818p_24fps_H264-128kbit_AAC).mp4"), filename: "Barbarella - Movie Trailer [HD] (818p_24fps_H264-128kbit_AAC).mp4")
v7.video.attach(io: open("https://viootube-dev.s3-us-west-1.amazonaws.com/BATMAN_1989_trailer.mp4"), filename: "BATMAN_1989_trailer.mp4")
v8.video.attach(io: open("https://viootube-dev.s3-us-west-1.amazonaws.com/Enter_the_Dragon.mp4"), filename: "Enter_the_Dragon.mp4")
v9.video.attach(io: open("https://viootube-dev.s3-us-west-1.amazonaws.com/fourty_y_o_virgin.mp4"), filename: "fourty_y_o_virgin.mp4")
v10.video.attach(io: open("https://viootube-dev.s3-us-west-1.amazonaws.com/Frankenstein1931.mp4"), filename: "Frankenstein1931.mp4")
v11.video.attach(io: open("https://viootube-dev.s3-us-west-1.amazonaws.com/HarryPotterTheSorcerersStoneTrailer.mp4"), filename: "HarryPotterTheSorcerersStoneTrailer.mp4")
v12.video.attach(io: open("https://viootube-dev.s3-us-west-1.amazonaws.com/ItsAWonderfulLifeTrailer.mp4"), filename: "ItsAWonderfulLifeTrailer.mp4")
v13.video.attach(io: open("https://viootube-dev.s3-us-west-1.amazonaws.com/JourneyToTheCenterOfTheEarth.mp4"), filename: "JourneyToTheCenterOfTheEarth.mp4")
v14.video.attach(io: open("https://viootube-dev.s3-us-west-1.amazonaws.com/King_Kong_vs_Godzilla.mp4"), filename: "King_Kong_vs_Godzilla.mp4")
v15.video.attach(io: open("https://viootube-dev.s3-us-west-1.amazonaws.com/OBrotherWhereArtThou.mp4"), filename: "OBrotherWhereArtThou.mp4")
v16.video.attach(io: open("https://viootube-dev.s3-us-west-1.amazonaws.com/omega_man.mp4"), filename: "omega_man.mp4")
v17.video.attach(io: open("https://viootube-dev.s3-us-west-1.amazonaws.com/PrincessBride.mp4"), filename: "PrincessBride.mp4")
v18.video.attach(io: open("https://viootube-dev.s3-us-west-1.amazonaws.com/RevengeOfTheCreature.mp4"), filename: "RevengeOfTheCreature.mp4")
v19.video.attach(io: open("https://viootube-dev.s3-us-west-1.amazonaws.com/RobinsonCrusoe.mp4"), filename: "RobinsonCrusoe.mp4")
v20.video.attach(io: open("https://viootube-dev.s3-us-west-1.amazonaws.com/SoundOfMusic.mp4"), filename: "SoundOfMusic.mp4")
v21.video.attach(io: open("https://viootube-dev.s3-us-west-1.amazonaws.com/spongebob.mp4"), filename: "spongebob.mp4")
v22.video.attach(io: open("https://viootube-dev.s3-us-west-1.amazonaws.com/ToCatchAThiefTrailer.mp4"), filename: "ToCatchAThiefTrailer.mp4")
v23.video.attach(io: open("https://viootube-dev.s3-us-west-1.amazonaws.com/War0fTheWorlds.mp4"), filename: "War0fTheWorlds.mp4")
v24.video.attach(io: open("https://viootube-dev.s3-us-west-1.amazonaws.com/WillyWonka.mp4"), filename: "WillyWonka.mp4")

comment1 = Comment.create({author_id: user1.id, video_id: v4.id, body: "Wow, it's really exciting watching sumo wrestling."})
comment2 = Comment.create({author_id: user2.id, video_id: v4.id, body: "I wonder if it's easy to go see live."})
comment3 = Comment.create({author_id: user3.id, video_id: v4.id, body: "I can't imagine how much these people must train all their lives long. I guess part of their practice is that they smack a wooden pole repeatedly, all. day. long."})
comment4 = Comment.create({author_id: user4.id, video_id: v4.id, body: "Hmmmm. that doesn't sound very pleasant"})




