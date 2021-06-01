const { OK } = require('../helpers/Constants');

function STATUSOK(res, data = [], message = ""){
    return res.status(OK).json({
        status: OK,
        message: message,
        data: data
    })
}

function NOTDATAOK(res, message = ""){
    return res.status(OK).json({
        status: OK,
        message: message
    })
}

module.exports = {
    STATUSOK,
    NOTDATAOK
}