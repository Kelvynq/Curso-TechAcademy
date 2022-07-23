const articles = [
  {
    id: 1,
    titulo: 'aaaaaaaaa',
    descrição: 'aaaaaaaaaaa'
  },

  {
    id:2,
    titulo: 'bbbbbbbbbb',
    descrição: 'bbbbbbbb'
  }

];

function getArticle(){
    return articles;
}

function getArticleById(articleId){
    return articles.find(articles => {
        articles.id === Number(articleId)
    });
}

export {getArticle, getArticleById}

