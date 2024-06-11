import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { exampleRoute } from './routes/routes';
const server = express();
let serverport = 4700;
server.use(bodyParser.json());
server.use(cors());
server.use(exampleRoute);
function serverStart(){
    try{
        server.listen(serverport,()=>{
            console.log(`servidor iniciado na porta ${serverport}`);
        });
    }catch(error){
        console.log(`não foi possivel iniciar o servidor devido ao erro: ${error}`);
    };
};
serverStart();