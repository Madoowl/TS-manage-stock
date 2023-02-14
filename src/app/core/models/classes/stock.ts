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
}