const fs = require('fs');

const getData = (req, res, next) => {
  fs.readFile('events.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send(err);
    }

    req.eventsData = data;
    next();
  });
}

module.exports = getData;
