namespace :db do
  desc "fill second_word info in the db"
  task :populate_second_words => :environment do
    N = 10
    require 'faker'
    N.times do
      u = SecondWord.new(

        data: Faker::Lorem.word,
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
  puts "10 Fake second_word records have been created and stored in db"
end