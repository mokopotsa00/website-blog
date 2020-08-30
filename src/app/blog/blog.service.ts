import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { Post } from './post.model'

@Injectable({
    providedIn: 'root'
})
export class BlogService{
    posts: Post[] = [
        new Post( 1, 
            "How to Measure the Quality of Software",
            "how-to-measure-the-quality-of-software",
            "<p>If you are reading this, you probably plan to want to know the metrix to measure software quality ...</p>",
            "<p>If you are reading this, you probably plan to start a small business or a side hustle very soon. And you probably have a couple of questions running through your mind like: Do I really need that logo? Or Yep, I really need one. But how can I get it on a budget? This post was created to help you bring system out of confusion so you can get the best out of your business and enter the market full force. First of all, yes, you do need a logo, and it does not really matter how big or small your business is. Even if you  making a craft soap and sell it to your relatives and friends, you still need a logo. If you plan to monetize an idea, you need a logo for it. Otherwise your work, your efforts, your image and your future brand belong to everyone, like grapes at a grocery store. But most importantly, the final design you come up with should be effective enough to promote your business and get you that place in the sun. Here are a few tips that will make the whole process easier and more fun. The first step to a killer logo is an idea. So start feeding your brain with new impressions and experiences. Use anything that works for you. Try hiking and gain inspiration from nature. Or visit an art gallery. Meditation, photography, action sports In a nutshell, any kind of activity that fills you up with energy and joy may help you get that revolutionary idea. It is always useful to browse the websites (or social media profiles) of your potential rivals to not only judge their logos but to practice analysis. Do you find your competitor logo effective or attractive? Try to think of the ways it helps the rival company to be profitable. Is there something you would change? Why? All of these questions can really help you to improve your own perception of your brand as well as the future marketing strategy. Find out what the strengths and weaknesses of your rivals are and benefit from that knowledge. When it comes to logo design, there are and always will be several safe choices like bold and elegant black and white logos or serif font wordmarks. But if you are striving to get that killer logo, do not be afraid to cross the line and try something rebellious. Go out there and get to know the latest design trends. For example, you may experiment with the bold colors like Ultra Violet, which is the Pantone color of the year, by the way. Or play with the typography and color gradients.</p>",
            "design",
            "../../assets/img/blog/1.jpg",
            "January 22, 2020"
        ),
        new Post( 2, 
            "How to Autumn Clean Your Design Career?",
            "how-to-autumn-clean-your-design-career",
            "<p>Spring cleaning is not just about washing windows and clearing away cobwebs. Your design career also needs a thorough ...</p>",
            "<p>Whether you are a freelancer or an in-house designer, or at a studio or agency, you will probably have to rebrand at the and Whether you are a freelancer or an in-house designer, or at a studio or agency, you will probably have to rebrand at the and Whether yo are a freelancer or an in-house designer, or at a studio or agency, you'll probably have to rebrand at the andWhether you are a freelancer or an in-house designer, or at a studio or agency, you will probably have to rebrand at the andWhether yo are a freelancer or an in-house designer, or at a studio or agency, you will probably have to rebrand at the and.Whether you are a freelancer or an in-house designer, or at a studio or agency, you will probably have to rebrand at the and Whether you are a freelancer or an in-house designer, or at a studio or agency, you will probably have to rebrand at the andWhether youa are a freelancer or an in-house designer, or at a studio or agency.</p>",
            "Illustrator",
            "../../assets/img/blog/2.jpg",
            "February 07, 2020"
        ),
        new Post( 3, 
            "Innovative Ways to Increase Brand",
            "innovative-ways-to-increase-brand",
            "<p>Having a solid, trusted brand is important for your company to thrive. If your target audience does not know or trust ...</p>",
            "<p>Having a solid, trusted brand is important for your company to thrive. If your target audience does not know or trust your brand, how will you ever increase your customer base and sales? Here are six innovative strategies you can use to increase brand awareness and help your business thrive. Inviting influencers into your niche is a great way to increase brand awareness and hopefully drive sales. When influencers have an established audience that knows and trusts them, once they mention your product(s) and discuss your brand in their content, those mentions will expand your reach and increase peoples awareness of your product. Ikonick is a perfect example of a company that works directly with influencers: It sells canvas art for your home and office. The way Ikonick uses influencers involves providing them with art and having those influencers pose with the art, then share the photos on social media. &ldquo;Our relationships are an important part of our business,&rdquo;  co-founder Mark Mastrandrea told me. &ldquo;Our relationships make up our community, and the community is how our brand grows.&rdquo; Ikonick uses all types of influencers, from Instagram photographers to celebrities. The companys social strategy has enabled it to scale and grow exponentially because its influencers become part of its sales team -- even ambassadors. The relationship is mutually rewarding, Mastrandrea said. Companies can also offer to sponsor influencers at an event (if they do that sort of thing) and even use them as spokespersons for their brand and product(s). A lot of CrossFit-related companies do this, including Rogue Fitness, which sponsors certain athletes with clothing. The athlete then becomes a walking billboard for the company. Have you ever received an order that came in branded packaging? Rather than see it as just another shipment, perhaps you felt that that that special branding made the package seem like a gift. The team knows that the product experience doesn't commence at first use, but rather at the unboxing stage. How companies present their brand, and the story they tell through their design and graphics, can create an emotional connection with the customer that may last even longer than the product itself.</p>",
            "Branding",
            "../../assets/img/portfolio/3.jpg",
            "April 12, 2020"
        ),
    ];

    constructor( private router: Router){}

    setPost( posts:Post[]){
        this.posts = posts
    }

    getPosts(){
        return this.posts.slice();
    }

    getPost( slug: string){
        slug = slug.toLowerCase();
        for(let i=0; i <this.posts.length; i++){
            if( this.posts[i].slug === slug ){
                return{project:  this.posts[i], slug: ''};
            }
        }
        let slugSplited = slug.split('-');
        //Get first three letters from url param: slug
        slugSplited[0] = slugSplited[0] === ''? undefined : slugSplited[0];
        slugSplited[1] = slugSplited[1] === ''? undefined : slugSplited[1];
        slugSplited[2] = slugSplited[2] === ''? undefined : slugSplited[2];
        //Get last three letters from url param: slug
        slugSplited[slugSplited.length-3] = slugSplited[slugSplited.length-3] === '' ? undefined : slugSplited[slugSplited.length-3];
        slugSplited[slugSplited.length-2] = slugSplited[slugSplited.length-2] === '' ? undefined : slugSplited[slugSplited.length-2];
        slugSplited[slugSplited.length-1] = slugSplited[slugSplited.length-1] === '' ? undefined : slugSplited[slugSplited.length-1];

        let firstSplit = slugSplited[0] +'-'+ slugSplited[1] +'-'+slugSplited[2];
        let secondSplit = slugSplited[slugSplited.length - 3] +'-'+ slugSplited[slugSplited.length - 2] +'-'+slugSplited[slugSplited.length - 1];
       
        for(let i=0; i <this.posts.length; i++){
            if(this.posts[i].slug.includes(firstSplit) || this.posts[i].slug.includes(secondSplit) ){
                return  {project: this.posts[i], slug: this.posts[i].slug};
            }
        }
        this.router.navigate(['/'+slug]);
    }

}