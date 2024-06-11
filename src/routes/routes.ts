import {Router,Request,Response} from 'express';
import { exampleController } from '../controllers/example';


export const exampleRoute = Router();

exampleRoute.get('/',(req:Request,res:Response)=>{
    const responseMessage = new exampleController();
    return res.status(200).json(responseMessage.sendMessage("ola mundo"));
});

exampleRoute.get('/mymessage',(req:Request,res:Response)=>{
    const {message} = req.body as {message:string};
    const responseMessage = new exampleController();
    return res.status(200).json(responseMessage.sendMessage(message));
});