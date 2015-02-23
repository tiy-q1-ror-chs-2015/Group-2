task :create_images => :environment do
    x = 0
    links = [
      "http://i.imgur.com/kCRvprM.gif",
      "http://i.imgur.com/MngS2eq.gif",
      "http://i.imgur.com/vVWvcke.gif",
      "http://i.imgur.com/h5zHq9X.gif",
      "http://i.imgur.com/i68mkml.gif",
      "http://i.imgur.com/2Mk41Z1.gif",
      "http://i.imgur.com/3jvRlZ3.gif",
      "http://i.imgur.com/K8HhHYn.gif"
    ]
    8.times do
      link = links[x]
     Image.create!(
      text: link
      )
     x += 1
    end
  puts "8 images have been created in the database."
end