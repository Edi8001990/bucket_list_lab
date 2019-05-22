use bucket_list;
db.dropDatabase();

db.items.insertMany([
  {
    activity: "Backpack through Europe",
    category: "Travel",
    complete: "No"
  },
  {
    activity: "Learn Piano",
    category: "Skill",
    complete: "No"
  }
])
