const controllers = require('../controllers/elencoControllers.js');

server.get('/elenco', controllers.elencoGetAll);

server.get('/elenco/:id', controllers.elencoGetById)

server.post('/elenco', controllers.elencoNew)

server.put('/elenco/:id', controllers.elencoEdit)