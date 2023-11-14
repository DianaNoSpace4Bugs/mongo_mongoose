const providerController = require('../controllers/providers.controllers');
const router = require('express').Router();


router.get('/api/providers', providerController.getProvider)
router.post('/api/providers', providerController.createProvider)
router.delete('/api/providers', providerController.deleteProvider)
router.put('/api/providers',providerController.editProvider)


module.exports = router;
