const { Sequelize } = require("sequelize");
const User = require("./models/user");
const Post = require("./models/post");
const sequelize = require("./db"); // or wherever your Sequelize instance is

const seed = async () => {
  try {
    await sequelize.sync({ force: true }); // ⚠️ DANGER: This clears all data

    // Create users
    const users = await User.bulkCreate([
      { name: "Alice", email: "alice@example.com" },
      { name: "Bob", email: "bob@example.com" },
      { name: "Charlie", email: "charlie@example.com" },
      { name: "Raaja", email: "raja@example.com" },
      { name: "Raksu", email: "suraj@example.com" },
      { name: "sindhu", email: "pon@example.com" }
    ]);

    // Create posts
    await Post.bulkCreate([
      { title: "Post A1", content: "Content A1", userId: users[0].id },
      { title: "Post A2", content: "Content A2", userId: users[0].id },
      { title: "Post B1", content: "Content B1", userId: users[1].id },
      { title: "Post C1", content: "Content C1", userId: users[2].id },
      { title: "Post C2", content: "Content C2", userId: users[2].id },
      { title: "Post D1", content: "Content D1", userId: users[3].id },
      { title: "Post D2", content: "Content D2", userId: users[3].id },
      { title: "Post E1", content: "Content E1", userId: users[4].id },
      { title: "Post E2", content: "Content E2", userId: users[4].id },
      { title: "Post F1", content: "Content F1", userId: users[5].id },
      { title: "Post F2", content: "Content F2", userId: users[5].id },
    ]);

    console.log("✅ Seeding complete");
    process.exit();
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
};

seed();
