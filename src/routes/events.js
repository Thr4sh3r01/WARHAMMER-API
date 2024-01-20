const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/eventsController');

// Rutas para los eventos
router.get('/events', eventsController.getAllEvents);
router.get('/events/:id', eventsController.getEventById);
router.post('/events', eventsController.createEvent);
router.put('/events/:id', eventsController.updateEvent);
router.delete('/events/:id', eventsController.deleteEvent);

module.exports = router;
