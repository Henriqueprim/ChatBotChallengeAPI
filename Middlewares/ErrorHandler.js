const ErrorHandler = (error, _req, res, _next) => {
    const { message, code } = error;
    return res.status(code || 500).json({ message });
};
  
module.exports = ErrorHandler;
