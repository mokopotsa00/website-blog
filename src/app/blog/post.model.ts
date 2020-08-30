export class Post{
    public id: number;
    public title: string;
    public slug: string;
    public excerpt: string;
    public content: string;
    public category: string;
    public featuredImage: string;
    public date: string;
    
    constructor( id:number, title: string, slug: string,excerpt:string, content: string, category:string, featuredImage: string, date: string){
        this.id = id;
        this.title = title;
        this.slug = slug;
        this.excerpt = excerpt;
        this.category = category;
        this.content = content;
        this.featuredImage = featuredImage;
        this.date = date;
    }
}