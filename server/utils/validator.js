const Token = require("./token");

const validateBody = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const err = new Error(error.details[0].message);
      err.status = 400;
      return next(err);
    }
    next();
  };
};

const validateToken = () => {
  return async (req, res, next) => {
    const authHeader = await req.headers.authorization;
    if (!authHeader?.startsWith("Bearer ")) {
      const error = new Error("Need Authorization!");
      error.status = 401;
      return next(error);
    }
    const token = authHeader.split(" ")[1];
    const decoded = Token.verifyAccessToken(token);
    req.userId = decoded.id;
    next();
  };
};

// const validateCookie = () => {
//   return async (req, res, next) => {
//     const refreshToken = req.cookies.refreshToken;
//     if (!refreshToken) {
//       const error = new Error("Need Refresh Token Cookie!");
//       error.status = 401;
//       return next(error);
//     }
//     const decoded = Token.verifyRefreshToken(refreshToken);
//     if (decoded) {
//       req.decodedId = decoded.id;
//     }
//     next();
//   };
// };

// const validateParam = (schema, param) => {
//   return (req, res, next) => {
//     let obj = {};
//     obj[`${param}`] = req.params[`${param}`];
//     let result = schema.validate(obj);
//     if (result.error) {
//       const error = new Error(result.error.message);
//       error.status = 400;
//       return next(error);
//     }
//     next();
//   };
// };

module.exports = { validateBody, validateToken };
