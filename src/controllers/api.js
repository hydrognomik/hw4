const getEvents = (req, res) => {
  res.set('Content-Type', 'application/json');
  res.status(200).send(req.eventsData);
};

const getEventsByType = (req, res) => {
  const { events } = JSON.parse(req.eventsData);

  const types = req.body.type && req.body.type.split(':');
  const availableTypes = events.reduce((acc, { type }) => {
    if (!acc.includes(type)) {
      acc.push(type);
    }
    return acc;
  }, []);
  const isTypeCorrect = types
    && types.every(type => availableTypes.includes(type));

  if (!isTypeCorrect) {
    res.status(400).send('Incorrect type');
  }

  filteredEvents = events.filter(({ type }) => types.includes(type));

  res.status(200).json({ events: filteredEvents });
}

module.exports.getEvents = getEvents;
module.exports.getEventsByType = getEventsByType;
