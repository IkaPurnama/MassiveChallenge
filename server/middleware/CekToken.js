import jwt from 'jsonwebtoken'

const CekToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if(token){
    jwt.verify(token, '899TOKEN889', (err, decoded) => {
      if (err) {
        return res.status(400).json({
          message: err.message,
          loggedIn: false
        });
      } else {
        res.locals.jwt = decoded;
        next();
      }
    });
  }
}

export default CekToken
