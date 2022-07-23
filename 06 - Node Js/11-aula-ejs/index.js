import express from "express";
import * as ArticleService from './ArticleService.js';

const app = express();
const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/',(Request,Response) => {
    const articles = ArticleService.getArticle();
    Response.render('pages/home', {articles});
});

