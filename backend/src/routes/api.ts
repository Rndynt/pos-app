// src/routes/api.ts
import { Router } from 'express';
import { TestController } from '../controllers/testController';

const router = Router();
// router.post('/login', AuthController.login);
router.get('/test1', (req, res) => {
    res.json({
        message: "Welcome to the backend! This is a api test route."
    });
});


router.get('/test', TestController.getDummyData);

router.get('/test/data', (req, res) => {
    const dummyData = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ];
    res.json(dummyData);
});

export default router;