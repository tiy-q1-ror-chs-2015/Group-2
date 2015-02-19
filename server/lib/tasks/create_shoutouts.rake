task :create_shoutouts => :environment do
    10.times do
     Shoutout.create!(
      text: Faker::Lorem.sentence,
      mood: "type_one" 
      )
    end
    10.times do
     Shoutout.create!(
      text: Faker::Lorem.sentence,
      mood: "type_two" 
      )
    end
    10.times do
     Shoutout.create!(
      text: Faker::Lorem.sentence,
      mood: "type_three" 
      )
    end
    10.times do
     Shoutout.create!(
      text: Faker::Lorem.sentence,
      mood: "type_four"   
      )
    end
  puts "40 shoutouts have been created in the database."
end

