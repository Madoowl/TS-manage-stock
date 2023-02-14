import { Article } from "./article";

export class Stock {
    public articles: Article[];
    //Create stock as an array of articles + quantity ?
    /**
     *
     */
    constructor(articles: Article[]) {
        this.articles = articles;
    }
    
    public toString(): string
    { 
        return this.articles.toString();
    }
    getArticleById(id: number): Article
    {
        return this.articles.filter(x => x.id === id)[0];
    }

    getArticleByTitle(title: string): Article[]
    {
        return this.articles.filter(x => x.title === title);
    }

    getAddArticle(article: Article): void
    {
        // check if id already exists if not add it if yes throw error

        if(this.articles.filter(x => x.id === article.id).length > 0){
            throw new Error("Article already exists");
        } else {
            this.articles.push(article);
        }
    }

    removeArticle(article: Article): void
    {
        this.articles = this.articles.filter(x => x.id !== article.id);
    }

}