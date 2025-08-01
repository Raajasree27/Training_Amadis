const { prototype } = require("pg/lib/type-overrides")
const { Sequelize } = require("sequelize")

const sequelize=new Sequelize('blog_dev','postgres','raajasree',
    {
        host: "127.0.0.1",
        prot: 5432,
        dialect:'postgres',
})

module.exports=sequelize;