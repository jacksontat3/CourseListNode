module.exports = {
    HOST: 'project2.eaglesoftwareteam.com',
    port: 3027,
    USER: 't52022',
    PASSWORD: 'cs@oc2022t5',
    DB: 'tate_courses',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};