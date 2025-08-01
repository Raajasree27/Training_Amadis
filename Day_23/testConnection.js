const sequelize = require('./db');
const User = require('./models/user');
const Post = require('./models/post');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully');

    await sequelize.sync({ force: true }); // recreate tables
    console.log('✅ Tables created successfully');
  } catch (err) {
    console.error('❌ Error:', err);
  } finally {
    await sequelize.close();
  }
})();
