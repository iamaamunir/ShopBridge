const errorHandler = (err, req, res, next) => {
      if (err.statusCode) {
      res.status(err.statusCode).json({
        error: err.error,
        message: err.message,
        statusCode: err.statusCode
        
      });
    } else {
      res.status(500).json({
        error: "Internal Server Error",
        message: "Something went wrong",
      });
    }
}



export default errorHandler
