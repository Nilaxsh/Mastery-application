import express from 'express';
import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import stripe from 'stripe';
import {authLoginUser} from '../middleware/authMiddleware.js'; 
const router = Router();
export default router;

// Your stripe secret key
const stripeSecretKey = "sk_test_51OmC71JJhMGJrvn8hklb18vcHLq2kcYjIHiOIfqG9qZ3tEBlQINoQuAOuHdCVLYj2iOgsAnAAasSZxjZr7KC19lc00XeV4wGSl";

router.post("/payment", authLoginUser, async (req, res) => {
    const { product, token } = req.body;
    const user = req.user;
    const transactionKey = uuidv4();

    try {
        const customer = await stripe(stripeSecretKey).customers.create({
            email: token.email,
            source: token.id
        });

        const result = await stripe(stripeSecretKey).charges.create({
            amount: product.price||1000,
            currency: "inr",
            customer: customer.id,
            receipt_email: token.email,
            description: product.name
        });

        // Update user's paid status to true
        user.ispaid = true;
        await user.save();

        res.json(customer);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
