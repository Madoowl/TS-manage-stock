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
const articles: Article[] = [
    {
        id: 1,
        title: 'Article 1',
        content: 'Content 1',
    },
    {
        id: 2,
        title: 'Article 2',
        content: 'Content 2',
    },    
    {
        id: 3,
        title: 'Article 3',
        content: 'Content 3',
    },    
   
    {
        id: 4,
        title: 'Article 4',
        content: 'Content 4',
    },    
    {
        id: 5,
        title: 'Article 5',
        content: 'Content 5',
    }, 
]
export const myStock: Stock = new Stock(articles);

let title: HTMLElement | any = document.getElementById('title');
title.textContent = "Hello World";

let stock: HTMLElement | any = document.getElementById('stock');

myStock.articles.forEach((article) =>
{
    debugger;
    const trArticle = document.createElement('tr');
    trArticle.innerHTML = `<th>${article.id}</th><th>${article.title}</th><th>${article.content}</th><th>Actions à venir</th>`;
    stock.appendChild(trArticle);
    });

// myStock.articles.map((article: Article) =>
// {
// });

