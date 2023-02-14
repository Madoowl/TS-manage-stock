console.log('this is index JS');

import { Header } from './app/header';
import { Footer } from './app/footer';
import '../src/style.css';
import './styles/scss/main.scss';
import { Stock } from './app/core/models/classes/stock';
import { Article } from './app/core/models/classes/article';

let header = new Header();

let firstHeading = header.getFirstHeading();

console.log(firstHeading);

let footer = new Footer();

let footerText = footer.getFooterText();

//Create list of articles
let articles: Article[] = [];
for (let index = 1; index <= 5; index++) {
    articles.push(new Article(index, `Article ${index}`, `Content ${index}`));
};

export const myStock: Stock = new Stock(articles);

let title: HTMLElement | any = document.getElementById('title');
title.textContent = "Hello World";

let stock: HTMLElement | any = document.getElementById('stock');

myStock.articles.forEach((article) =>
{
    const trArticle = document.createElement('tr');
    trArticle.innerHTML = `<th hidden>${article.id}</th><th>${article.title}</th><th>${article.content}</th><th>Actions à venir</th>`;
    stock.appendChild(trArticle);
    });

// myStock.articles.map((article: Article) =>
// {
// });

