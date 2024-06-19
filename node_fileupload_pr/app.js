const express = require('express');
const multer = require('multer'); // multer 모듈 불러오기
const path = require('path');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './views'); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/uploads', express.static(__dirname + '/uploads'));

const uploadDetail = multer ({
    storage: multer.diskStorage({
        destination(req,file,done){
            done(null, 'uploads/') // 저장할 경로
        },
        filename(req,file,done){
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext); // 저장할 파일명 
        }
    }),
    limits: {fileSize: 5 * 1024 * 1024} // 업로드 크기 제한 
})


app.post("/upload", uploadDetail.single('userfile'), (req, res) => {
    console.log(req.body); // { title: '바탕화면 사진임' }
    console.log(req.file); // 업로드된 파일 정보

    res.send('Success upload!');

    // 파일 탐색기 > uploads 폴더가 생성!
    // 확장자 없이 파일명이 자동으로 저장됨 (multer 객체를 생성할 때 dest 옵션 외에 설정을 한 게 없어서)
    // 파일 탐색기에서 png, jpg 등의 확장자를 붙여보면 우리가 업로드한 파일임이 확인 됨!
});

app.get('/', function (req, res) {
    res.render('index', { title: '파일 업로드를 배워보자!!!' });
});

app.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`);
});