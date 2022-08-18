const TicketSale = require('../models/ticket-sale');

const getAllTicketSale = async (req, res, next) => {
  try {
    const [allTicketSale] = await TicketSale.getAllTicketSale();
    res.status(200).json(allTicketSale);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const addNewTicketSale = async (req, res, next) => {
  try {
    const addTicketSale = await TicketSale.addNewTicketSale(
      req.body.tick_sal_ruc,
      req.body.tick_sal_serie,
      req.body.tick_sal_serie_numero,
      req.body.tick_sal_numero,
      req.body.tick_sal_boleta,
      req.body.tick_sal_boleta_final
    );
    res.status(201).json(addTicketSale)
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }

}

module.exports = {
  getAllTicketSale,
  addNewTicketSale

}