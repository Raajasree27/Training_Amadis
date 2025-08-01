// app.js
const sequelize = require('./index');
const User = require('./models/user');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connected to PostgreSQL successfully!');

    await sequelize.sync({ force: false });
    console.log('✅ Models synced to the database (table created)');

    // Uncomment to test user creation:
    const newUser = await User.create({
      name: 'Alice',
      age: 25,
      email: 'alice@example.com'
    });
    console.log('👤 User created:', newUser.toJSON());

    const users = await User.findAll();
    console.log('📋 All Users:', users.map(u => u.toJSON()));

  } catch (error) {
    console.error('❌ Unable to connect:', error);
  }
})();
