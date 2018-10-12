const { msToTime } = require('../utils.js');

const getStatus = (req, res) => {
  const runningTime = Date.now() - global.serverStart;

  res.status(200).send(msToTime(runningTime));
};

module.exports = getStatus;
