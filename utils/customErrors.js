class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 409;
    this.error = "Conflict";
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
    this.error = "Not Found";
  }
}

export default { ConflictError, NotFoundError }