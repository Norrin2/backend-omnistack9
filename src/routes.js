const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const sessionController = require('./controllers/SessionController');
const spotController = require('./controllers/SpotController');
const bookingController = require('./controllers/BookingController');
const dashboardController = require('./controllers/DashboardController');
const approvalController = require('./controllers/ApprovalController');
const rejectionController = require('./controllers/RejectionController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/', (req, res) => {
    return res.json('teste alterado');
});

routes.post('/users', sessionController.store);

routes.get('/spots', spotController.index);
routes.post('/spots', upload.single('thumbnail'), spotController.store);

routes.get('/dashboard', dashboardController.show);

routes.post('/spots/:spot_id/bookings', bookingController.store);

routes.post('/bookings/:booking_id/approvals', approvalController.store);
routes.post('/bookings/:booking_id/rejections', rejectionController.store);

module.exports = routes;