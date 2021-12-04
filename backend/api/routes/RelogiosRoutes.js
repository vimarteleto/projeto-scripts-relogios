const controllers = require('../controllers/RelogioControllers.js');

server.get('/relogio', controllers.getAllRelogios);

server.get('/relogio/:id', controllers.getRelogioById)

server.post('/relogio', controllers.createRelogio)

server.put('/relogio/:id', controllers.editRelogio)
