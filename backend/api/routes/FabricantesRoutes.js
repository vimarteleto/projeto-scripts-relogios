const controllers = require('../controllers/FabricantesControllers.js');

server.get('/fabricante', controllers.getAllFabricantes);

server.get('/fabricante/:id', controllers.getFabricantesById)

server.post('/fabricante', controllers.createFabricante)

server.put('/fabricante/:id', controllers.editFabricante)
