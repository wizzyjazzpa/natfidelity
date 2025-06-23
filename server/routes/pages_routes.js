const express  = require('express');
const router = express.Router();
const pages = require('../controller/pages_controller');
const verify_token = require('../middleware/verify_token');

router.get('/',pages.login);
router.get('/logout',pages.logout)
router.get('/userDashboard',verify_token,pages.userDashboard);
router.get('/transaction-details',verify_token,pages.transactionDetails)
router.get('/view-transaction',verify_token,pages.view_transaction)



module.exports=router