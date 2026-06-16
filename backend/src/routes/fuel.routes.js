const express = require('express');
const router = express.Router();

// GET /fuel
router.get('/', (req, res) => {
    res.json({ message: 'Rota de abastecimentos funcionando' });
});

module.exports = router;