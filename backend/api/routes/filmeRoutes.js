const controllers = require('../controllers/filmeControllers.js');

server.get('/filme', controllers.filmeGetAll);

server.get('/filme/:id', controllers.filmeGetById)

server.post('/filme', controllers.filmeNew)

server.put('/filme/:id', controllers.filmeEdit)