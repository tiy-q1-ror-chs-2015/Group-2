namespace :db do
  desc "fill first_words info in the db"
  task :populate_first_words => :environment do
    N = 100
    require 'faker'
    N.times do
      u = FirstWord.new(

        data: [

          "crazy",
          "Manhattan",
          "Portland",
          "smooth",
          "sturdy",
          "dirty",
          "pickled",
          "careful",
          "funky",
          "sexy",
          "sunlit",
          "fuzzy",
          "cabin",
          "nappy",
          "lone",
          "bashful",
          "banana",
          "perky",
          "weeping",
          "thoughtful",
          "daily",
          "murky",
          "sundance",
          "extreme",
          "restful",
          "stovetop",
          "tiny",
          "juicy",
          "carpe",
          "tricky",
          "elastic",
          "simple",
          "organic",
          "crafty",
          "steady",
          "blue"

          ].sample,

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
  puts "100 Fake first_word records have been created and stored in db"
end