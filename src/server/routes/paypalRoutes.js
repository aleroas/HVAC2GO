// server/routes/paypalRoutes.js
import express from 'express';
const router = express.Router();

router.get('/paypal-client-id', (req, res) => {
  res.json({ clientId: process.env.PAYPAL_CLIENT_ID });
});

export default router;
