

function myerror(err, req, res, next) {
    
    const { status = 500, message = 'Something went wrong' } = err;
    console.error(err); 
    res.status(status).render('error', { message }); 
  }
  
  export { myerror };
  