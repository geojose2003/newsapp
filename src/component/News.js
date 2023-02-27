import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
 static defaultProps ={
        country: "us",
       // pageSize: 8,
        category: "general"
 }


	static PropType = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

   //articles =[
    /*{
    "source": {
        "id": null,
        "name": "9to5Mac"
    },
    "author": "Filipe Espósito",
    "title": "Poll: Would you prefer an iPhone 15 Pro with a stainless steel or titanium frame?",
    "description": "9to5Mac last week revealed the first CAD renders for the iPhone 15 Pro, which corroborated many of the rumors about the next generation of Apple’s smartphone. Following our report, a photo showing the allegedly iPhone 15 Pro with a titanium frame has surfaced…",
    "url": "https://9to5mac.com/2023/02/20/poll-iphone-15-pro-stainless-steel-titanium/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/02/iphone-15-pro-hero-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-02-21T01:03:28Z",
    "content": "9to5Mac last week revealed the first CAD renders for the iPhone 15 Pro, which corroborated many of the rumors about the next generation of Apple’s smartphone. Following our report, a photo showing th… [+2768 chars]"
},
{
    "source": {
        "id": null,
        "name": "9to5Mac"
    },
    "author": "Chance Miller",
    "title": "Apple launches new ‘Car Key Tests’ app for iPhone as adoption lags",
    "description": "Apple’s Car Key feature was originally announced in July 2020 as a way to unlock your car using the Wallet app on your iPhone. The feature, however, has been limited in availability and only recently expanded beyond certain BMW cars. \nIn what could be a sign …",
    "url": "https://9to5mac.com/2023/02/20/apple-launches-new-car-key-tests-app-for-iphone-as-adoption-lags/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/02/car-key-hero@0.5x.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-02-21T00:29:13Z",
    "content": "Apple’s Car Key feature was originally announced in July 2020 as a way to unlock your car using the Wallet app on your iPhone. The feature, however, has been limited in availability and only recently… [+2311 chars]"
},
{
    "source": {
        "id": null,
        "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Wesley Hilliard)",
    "title": "'Car Keys Tests' app surfaces on App Store",
    "description": "\"Car Keys Tests\" appeared on the App Store, and it is a testing app for licensed MFi developers working on vehicles with Apple Car Key.'Car Keys Tests' is a development toolApple's Car Key was announced in 2020, but very few vehicles have adopted the feature.…",
    "url": "https://appleinsider.com/articles/23/02/21/car-keys-tests-app-surfaces-on-app-store",
    "urlToImage": "https://photos5.appleinsider.com/gallery/53112-106399-Car-Key-test-xl.jpg",
    "publishedAt": "2023-02-21T01:14:34Z",
    "content": "'Car Keys Tests' is a development tool\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\n\"Car Keys Tests\" appeared on the App Store, and it is a testing app… [+1137 chars]"
},

{
    "source": {
        "id": null,
        "name": "AppleInsider"
    },
   
    "author": "news@appleinsider.com (Wesley Hilliard)",
    "title": "After global big tech tax fails, France looks to EU for help",
    "description": "The French Prime Minister is bringing the battle for a digital tax to the EU, since countries like India and the US have blocked the global deal.Apple Store Opera in ParisThe Organization for Economic Cooperation and Development (OECD) represents a global pus…",
    "url": "https://appleinsider.com/articles/23/02/21/after-global-big-tech-tax-fails-france-looks-to-eu-for-help",
    "urlToImage": "https://photos5.appleinsider.com/gallery/53114-106401-France-xl.jpg",
    "publishedAt": "2023-02-21T03:23:21Z",
    "content": "Apple Store Opera in Paris\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nThe French Prime Minister is bringing the battle for a digital tax to the EU, s… [+1454 chars]"
},



{
    "source": {
        "id": null,
        "name": "Daily Mail"
    },
    "author": "Trevin Lund",
    "title": "Kate Hudson and fiance Danny Fujikawa step out for a walk in Manhattan with their daughter Rani Rose",
    "description": "Kate Hudson was seen enjoying an afternoon walk through New York City with her family on Monday. The 43-year-old daughter of Goldie Hawn was with her fiancé Danny Fujikawa and their daughter, Rani Rose.",
    "url": "https://www.dailymail.co.uk/tvshowbiz/article-11773743/Kate-Hudson-fiance-Danny-Fujikawa-step-walk-Manhattan-daughter-Rani-Rose.html",
    "urlToImage": "https://i.dailymail.co.uk/1s/2023/02/20/23/67898895-0-image-a-57_1676934972717.jpg",
    "publishedAt": "2023-02-21T02:17:01Z",
    "content": "Kate Hudson enjoyed a Monday afternoon walk through New York City with her family.\r\nThe 43-year-old daughter of Overboard actress Goldie Hawn, 77, was with her fiancé Danny Fujikawa, 36, and their fo… [+4620 chars]"
},
{
    "source": {
        "id": null,
        "name": "Picturecorrect.com"
    },
    "author": "PictureCorrect Contributor",
    "title": "How to Take Long Exposures on iPhone",
    "description": "In this video, photographer Emil Pakarklis from iPhone Photo Academy demonstrates some advanced long exposure techniques to capture stunning photos using an iPhone. He starts the video by introducing long exposure photography as one of the most exciting thing…",
    "url": "https://www.picturecorrect.com/how-to-take-long-exposures-on-iphone/",
    "urlToImage": "https://www.picturecorrect.com/wp-content/uploads/2023/02/iphone-long-exposure.jpg",
    "publishedAt": "2023-02-21T00:54:49Z",
    "content": "In this video, photographer Emil Pakarklis from iPhone Photo Academy demonstrates some advanced long exposure techniques to capture stunning photos using an iPhone. He starts the video by introducing… [+1695 chars]"
},
{
    "source": {
        "id": null,
        "name": "MSPoweruser"
    },
    "author": "Surur",
    "title": "How to Backup iPhone to External Hard Drive in Windows 10/11",
    "description": "Sponsored Which method do you prefer for backing up your iPhone: iCloud, your computer, or an external hard drive? iCloud is a great way to back up an iPhone, but it offers only 5GB of free storage, which is not adequate for some users. Therefore, backing up …",
    "url": "https://mspoweruser.com/how-to-backup-iphone-to-external-hard-drive-in-windows-10-11/",
    "urlToImage": "https://mspoweruser.com/wp-content/uploads/2023/02/iPhone.png",
    "publishedAt": "2023-02-21T02:53:01Z",
    "content": "Sponsored\r\nWhich method do you prefer for backing up your iPhone: iCloud, your computer, or an external hard drive? iCloud is a great way to back up an iPhone, but it offers only 5GB of free storage,… [+5638 chars]"
},
{
    "source": {
        "id": null,
        "name": "The Mercury News"
    },
    "author": "Cnn Com Wire Service",
    "title": "Someone just paid HOW MUCH for an original iPhone?",
    "description": "Bidding on this phone began online earlier this month at $2,500. All told, there were 27 bids on it, according to LCG's website, which did not identify the winning bidder nor disclose how many collectors, or companies, vied for the item.",
    "url": "https://www.mercurynews.com/2023/02/20/someone-just-paid-how-much-for-an-original-iphone/",
    "urlToImage": "https://www.mercurynews.com/wp-content/uploads/2023/02/GettyImages-175852206.jpg?w=1024&h=673",
    "publishedAt": "2023-02-21T01:10:58Z",
    "content": "By Jennifer Korn | CNN\r\nA first-generation 2007 iPhone sold for more than $63,000 in an online auction Sunday, more than 100 times its original cost. Dubbed a “first-edition” device by auctioneer LCG… [+1685 chars]"
}*/
//]   
    constructor(props){
        super(props);
        this.state ={
            articles: [],
            loading: true,
            page:1   
        }
    }

    async componentDidMount(){
        //let url = "https://newsapi.org/v2/top-headlines/sources?country=${this.props.country}&category=${this.props.category}&apiKey=0e74060b1a884b58abaf1d9b750093cf&page=1&pageSize=${this.props.pageSize}";
        //let url = "https://newsapi.org/v2/top-headlines/sources?country=us&apiKey=0e74060b1a884b58abaf1d9b750093cf";
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0e74060b1a884b58abaf1d9b750093cf
            &page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        
        let parseData = await data.json();
        this.setState({
            page: this.state.page +1,
            articles: parseData.articles,
            totalArticles: parseData.totalResults,
			loading: false
        })
    }
    handlePrevClick = async()=>{
        console.log("previous");

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0e74060b1a884b58abaf1d9b750093cf
        &page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            page: this.state.page -1,
            articles: parseData.articles,
            loading: false
        })
    }
    handleOnNextClick = async()=>{
        console.log("next");
        if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

        }else{
            //let url = "https://newsapi.org/v2/top-headlines/sources?country=${this.props.country}&category=${this.props.category}&apiKey=0e74060b1a884b58abaf1d9b750093cf&page=1&pageSize=${this.props.pageSize}";
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0e74060b1a884b58abaf1d9b750093cf
            &page=1&pageSize=${this.props.pageSize}`;
            //let url = "https://newsapi.org/v2/top-headlines/sources?country=us&apiKey=0e74060b1a884b58abaf1d9b750093cf";
            let data = await fetch(url);
            let parseData = await data.json();
            this.setState({
                page: this.state.page +1,
                articles: parseData.articles,
				loading: false
            })
        }
    }
    render() {
        return (
            <div className='container my-3'>               
                <h2 className='text-center'>News App - Headlines</h2>
				{this.state.loading && <Spinner/>}
				
               <InfiniteScroll
                 dataLength={this.state.articles.length}
                    next={this.featchMoreData}
                    hashMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}>
                        
                <div className="container ">

                <div className='row'>
                {this.state.articles.map((element) => {
                        return <div key = {element.url} className='col-md-3'>
                        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""}
                            imgUrl = {element.urlToImage} newsurl = {element.url}/>
                        </div>
                } )}                                      
                </div>
                </div>
                </InfiniteScroll>
            </div>
           
        )
    }
}
