exports.get404 = (req, res, next) => {
    const error = new Error('Data Not found');
    error.status = 404;
    next(error);
    // console.log(error);
}

exports.get500 = (error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        }
    })
}