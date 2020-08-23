export class Project{
    public id: number;
    public title: string;
    public slug: string;
    public excerpt: string;
    public content: string;
    public category: string;
    public featuredImage: string;
    
    constructor( id:number, title: string, slug: string,excerpt:string, category:string, content: string, featuredImage: string){
        this.id = id;
        this.title = title;
        this.slug = slug;
        this.excerpt = excerpt;
        this.category = category;
        this.content = content;
        this.featuredImage = featuredImage;
    }
}