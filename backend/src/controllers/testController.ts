// src/controllers/testController.ts
import { Request, Response } from 'express';

export class TestController {
    static getDummyData(req: Request, res: Response) {
        const dummyData = {
            message: "This is a dummy response!",
            data: {
                user: {
                    id: 1,
                    name: "John Doe",
                    email: "john.doe@example.com"
                },
                status: "success"
            }
        };
        res.json(dummyData);
    }
}
