export class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 409;
    this.error = "Conflict";
  }
}

export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
    this.error = "Not Found";
  }
}

export class invalidCredentials extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 401;
    this.error = "Unauthorized";
  }
}



// export default { ConflictError, NotFoundError, invalidCredentials };