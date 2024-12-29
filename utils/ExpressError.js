// utils/ExpressError.js
class ExpressError extends Error {
    constructor(status, message) {
      super(message); // Pass message to the parent Error constructor
      this.status = status; // Set the status code
      this.message = message || 'Something went wrong!'; // Default message if not provided
    }
  }
  
  export { ExpressError };
  