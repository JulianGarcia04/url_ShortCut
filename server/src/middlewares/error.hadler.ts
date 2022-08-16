import { ErrorRequestHandler } from 'express'

const errorHandler:ErrorRequestHandler = (err, req, res, next)=>{
    console.error(err);
    next(err);
}

const formatError:ErrorRequestHandler = (err, req, res, next)=>{
    return res.json({
        message: err.message,
        stack : err.stack
    })
}

const boomErrorHandler:ErrorRequestHandler = (err, req, res, next)=>{
    if(err.isBoom){
        const { output } = err;
        return res.status(output.statusCode).json(output.payload);
    }else{
        next(err);
    }
}

export default {errorHandler, formatError, boomErrorHandler};
