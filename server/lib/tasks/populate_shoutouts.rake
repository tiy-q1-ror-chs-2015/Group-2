namespace :db do
  desc "fill shoutouts info in the db"
  task :populate_shoutouts => :environment do
    N = 100
    require 'faker'
    N.times do
      u = FirstWord.new(

        data: [

          "Three's a crowd.",
          "Let's party.",
          "heyyyyyyyy",
          "congrats!",
          "You are special.",
          "Here's to you!",
          "booyah!",
          "haters gonna hate",
          "ice ice baby",
          "fun times",
          "Everybody Footloose!",
          "Don't try this at home.",
          "O.O",
          "let me introduce you to my best friend Google....",
          "You're number zero in my heart.",
          "I totally just called an Uber for you.",
          "Tinder is so last year.",
          "Don't you have a curfew?",
          "You might be the perfect spoon.",
          "Let's make some magic.",
          "RAWR",
          "Have you heard about K-Pop?",
          "Be Yonce Say that again.",
          "that's how I roll",
          "remember that time when.....",
          "We are family.",
          "music to my beers",
          "sharing is caring",
          "You're my treasure.",
          "Third time's a charm.",
          "Let's salsa."

          ].sample
          ,
        mood: [

          "type_one",
          "type_two",
          "type_three",
          "type_four"
          
        ].sample
        
        )

      u.save
    end
  end
  puts "100 Fake shoutout records have been created and stored in db"
end