const log4js = require('log4js')

log4js.configure({
  appenders: {
    cheese: { type: 'dateFile', filename: 'log/cheese.log' },
    userLog: { type: 'dateFile', filename: 'log/user.log' },
    errLog: { type: 'dateFile', filename: 'log/error.log' },
  },
  categories: {
    user: { appenders: ['userLog'], level: 'debug' },
    error: { appenders: ['errLog'], level: 'debug' },
    default: { appenders: ['cheese'], level: 'debug' },
  },
});

// const getLogger = (type) => {
//     return log4js.getLogger(type);
// }

module.exports = log4js.getLogger();