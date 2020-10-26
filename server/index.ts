import express, { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './routes/api'
import path from 'path';
import {bumblog} from './config/bumblog.config';
import morgan from 'morgan';

const app = express();
const port = process.env.PORT || 8001;

let buildDir = path.resolve(__dirname, '../build');
let uploadDir = path.resolve(__dirname, '../uploads');

if(process.env.NODE_ENV === 'production'){ // 배포 모드
    buildDir = path.resolve(__dirname, './build');
    uploadDir = path.resolve(__dirname, './uploads');
}

app.use(morgan('dev')); // 로그 기록
app.set('jwt-secret', bumblog.secret);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/', express.static(buildDir));
app.use('/board', express.static(buildDir));
app.use('/board/view', express.static(buildDir));
app.use('/board/write', express.static(buildDir));
app.use('/api', router);
app.use('/uploads', express.static(uploadDir));

app.use((req:Request, res:Response, next:NextFunction)=>{
    res.status(404).send('일치하는 주소가 없습니다.');
});
app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
    res.status(500).send('서버 에러');
});


// Express 서버 완료시
app.listen(port, ()=>{
    console.log(`[express] Express server is running on port ${port}`)
});

// MongoDB
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', ()=>{
    console.log('[mongoose] connected to mongodb server');
});
// if(process.env.NODE_ENV !== 'production'){
//     mongoose.set('debug', true); // 개발 모드
// }
mongoose.connect(bumblog.mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});