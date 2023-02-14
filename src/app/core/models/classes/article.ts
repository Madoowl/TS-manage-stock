export class Article
{
    id!: number;
    title!: string;
    content!: string;
    /**
     *
     */
    constructor(id: number, title: string, content: string) {
        this.id = id;
        this.title = title;
        this.content = content;
    }

    public toString(): string
    { 
        return `Article: ${this.id} - ${this.title} - ${this.content}`;
    }
}