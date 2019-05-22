use bucket_list;
db.dropDatabase();

db.items.insertMany([
  {
    activity: "Backpack through Europe",
    category: "Travel"
  },
  {
    activity: "Learn Piano",
    category: "Skill"
  }
])
