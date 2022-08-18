const Ticket = require('../models/ticket');

const getAllTicket = async (req, res, next) => {
  try {
    const [allTicked] = await Ticket.getAllTicket();
    res.status(200).json(allTicked);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const addNewTicket = async (req, res, next) => {
  try {
    const addTicket = await Ticket.addNewTicket(
      req.body.tick_ruc,
      req.body.tick_serie,
      req.body.tick_serie_numero,
      req.body.tick_numero,
      req.body.tick_boleta,
      req.body.tick_boleta_final
    );
    res.status(201).json(addTicket)
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }

}

module.exports = {
  getAllTicket,
  addNewTicket

}