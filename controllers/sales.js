const Sales = require('../models/sales');

// const getAllSales = async (req, res, next) => {
//     try {
//         const [allSales] = await Sales.getAllSales();
//         res.status(200).json(allSales[0]);
//     } catch (err) {
//         if (!err.statusCode) {
//             err.statusCode = 500;
//         }
//         next(err);
//     }
// };

const getAllSalesForDate = async (req, res, next) => {
    try {
        const [allSalesForDate] = await Sales.getAllSalesForDate(
            req.params.inicial,
            req.params.final
        );
        res.status(200).json(allSalesForDate[0]);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

const getOnesaleForId = async (req, res, next) => {
    try {
      const [getsale] = await Sales.getOnesaleForId(req.params.id);
      res.status(200).json(getsale[0]);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

const addNewSale = async (req, res, next) => {
    try {
        const addSale = await Sales.addNewSale(
            req.body.sa_boleta,
            req.body.sa_cus_ID,
            req.body.sa_emp_ID,
            req.body.sa_fecha,
            req.body.sa_total_importe,
            req.body.sa_adelanto,
            req.body.sa_total,
            req.body.sa_created_at,
            req.body.sa_updated_at
        );
        res.status(201).json(addSale)
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

// const editOneSale = async (req, res, next) => {
//     try {
//         const editSale = await Sales.editOneSale(
//             req.body.sa_ID,
//             req.body.sa_boleta,
//             req.body.sa_emp_ID,
//             req.body.sa_fecha,
//             req.body.sa_total,
//             //   req.body.sa_created_at,
//             req.body.sa_updated_at
//         );
//         res.status(200).json(editSale)
//     } catch (err) {
//         if (!err.statusCode) {
//             err.statusCode = 500;
//         }
//         next(err);
//     }

// }

const deleteOneSale = async (req, res, next) => {
    try {
        const deleteSale = await Sales.deleteOneSale(req.params.id);
        res.status(200).json(deleteSale);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

module.exports = {
    getAllSalesForDate,
    getOnesaleForId,
    addNewSale,
    deleteOneSale
}