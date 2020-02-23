const app = require('express')();
const PORT = process.env.PORT || 3000;
const multer = require('multer'); // multerモジュールを読み込む

app.use(multer().none()); // multerでブラウザから送信されたデータを解釈する
app.use(express.static('dist')); // distフォルダの中身を公開する

app.get('/status', (req, res) => {
    res.json({
        status: 'ok',
        statusCode: 200,
    })
});

app.get('*', (req, res) => {
    res.json({
        message: 'Express on Unubo Cloud',
    })
});

app.listen(PORT, () => console.log(`> Ready on http://localhost:${PORT}`));
