export const notFound = (req, res, next) => {
	const error = new Error(`Not Found - ${req.originalUrl}`);
	error.status = 404;
	next(error);
};

export const errorHandler = (err, req, res, next) => {
	res.status(res.statusCode === 200 ? 500 : res.statusCode).json({
		message: err.message,
		stack: process.env.NODE_ENV === 'production' ? null : err.stack,
	});
};
