/**
 * JSON Web Key Set.
 *
 * @return {Array}
 * @api public
 */
exports = module.exports = function() {
  // Load modules.
  var jwks = require('connect-jwks');
  
  
  function logIt(req, res, next) {
    console.log(req.headers);
    next();
  }

  /**
   * GET /
   */
  return [
    logIt,
    jwks({ root: 'keys', ext: '.crt' })
  ];
}

exports['@require'] = [];
