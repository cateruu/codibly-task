export const getHttpErrorMessage = (error: string) => {
  switch (error) {
    case 'Error: 404':
      return '404: Product not found.';
    case 'Error: 403':
      return '403: Forbidden request.';
    case 'Error: 401':
      return '401: You are unathorized.';
    case 'Error: 400':
      return '400: Bad request.';
    case 'Error: 408':
      return '408: Request Time-Out.';
    case 'Error: 500':
      return '500: Internal Server Error. Try again later.';
    case 'Error: 501':
      return '501: Not Implemented.';
    case 'Error: 502':
      return '502: Server Overload. Try again later.';
    case 'Error: 503':
      return '503: Server is down. Try again later.';
    default:
      return error;
  }
};
