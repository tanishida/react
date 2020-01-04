const express = require('express'); // expressモジュールを読み込む
const multer = require('multer'); // multerモジュールを読み込む
const app = express(); // expressアプリを生成する

app.use(multer().none()); // multerでブラウザから送信されたデータを解釈する
app.use(express.static('dist')); // distフォルダの中身を公開する
// ポート3000でサーバを立てる
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
