import Article from "./Article";
function ArticleList(props) {
  return (
    <div>
      <h2>Vores artikler</h2>
      <div className="grid">
        {props.articles.map((article, index) => (
          <Article header={article.header} content={article.content} />
        ))}
      </div>
    </div>
  );
}

export default ArticleList;
