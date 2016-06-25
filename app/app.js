exports = module.exports = function(IoC, service) {
  
  service.use(require('morgan')('combined'));
  
  service.get('/', IoC.create('handlers/jwks'));
  
  
  return function run() {};
};

exports['@require'] = [ '!container', 'http/service' ];
