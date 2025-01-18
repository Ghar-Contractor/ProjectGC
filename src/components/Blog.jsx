import React, { useEffect } from 'react';
import './blog.css';  
import blogscript from './blogscript.jsx';

export default function Blog() {
  return (
    
      <div>
       <header>
        <h1>Blog Page</h1>
      </header>
      


   
    <section className="blog-category">
        <h2>Design Ideas</h2>
        <div className="container">
            <div className="blog-post" >
                
                <img src="https://images.pexels.com/photos/10202865/pexels-photo-10202865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image"/>
                <h3>Blog Post Title 1</h3>
                <small>Published on January 16, 2025</small>
                <p>When you complete the job sim, you open up a whole world of opportunities. You can add the experience to your resume to show Tata Group recruiters you've got the passion and skills they're looking for. You can also speak about your job sim when you meet recruiters at events and in interviews to make the perfect first impression
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae urna in nisi venenatis eleifend.</p>
                <button className="read-more-btn">Read More</button>
            </div>
            <div className="blog-post">
                
                <img src="https://image.cnbcfm.com/api/v1/image/106811484-1608045351058-gettyimages-1126750618-dsc_1540.jpeg?v=1608045431" alt="Image"/>
                <h3>Blog Post Title 2</h3>
                <small>Published on January 15, 2025</small>
                <p>Curabitur cursus felis ut nisi interdum, nec commodo lorem tristique. Praesent at feugiat ligula.</p>
                <button className="read-more-btn">Read More</button>
            </div>
            <div className="blog-post">
                <img src="https://d3cl79h6n1fe0x.cloudfront.net/wp-content/uploads/2020/01/15085115/11.jpeg" alt="Image"/>
                <h3>Blog Post Title 3</h3>
                <small>Published on January 14, 2025</small>
                <p>Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                <button className="read-more-btn">Read More</button>
            </div>
        </div>
      
    </section>

    
    <section className="blog-category">
        <h2>Construction Tips</h2>
        <div className="container">
            <div className="blog-post">
                <img src="https://wallpaperaccess.com/full/937110.jpg" alt="Image"/>
                <h3>Blog Post Title 4</h3>
                <small>Published on January 10, 2025</small>
                <p>Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                <button className="read-more-btn">Read More</button>
            </div>
            <div className="blog-post">
                <img src="https://www.countycouncilsnetwork.org.uk/wp-content/uploads/Construction-site-1.jpeg" alt="Image"/>
                <h3>Blog Post Title 5</h3>
                <small>Published on January 6, 2025</small>
                <p>Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                <button className="read-more-btn">Read More</button>
            </div>
            <div className="blog-post">
                <img src="https://www.countycouncilsnetwork.org.uk/wp-content/uploads/Construction-site-1.jpeg" alt="Image"/>
                <h3>Blog Post Title 6</h3>
                <small>Published on January 6, 2025</small>
                <p>Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                <button className="read-more-btn">Read More</button>
            </div>
        </div>
        
    </section>

    <section className="blog-category">
        <h2>Budget-Friendly Renovation</h2>
        <div className="container">
            <div className="blog-post">
                <img src="https://image.cnbcfm.com/api/v1/image/106811484-1608045351058-gettyimages-1126750618-dsc_1540.jpeg?v=1608045431" alt="Image"/>
                <h3>Blog Post Title 7</h3>
                <small>Published on January 15, 2025</small>
                <p>Curabitur cursus felis ut nisi interdum, nec commodo lorem tristique. Praesent at feugiat ligula.</p>
                <button className="read-more-btn">Read More</button>
            </div>
            <div className="blog-post">
                <img src="https://image.cnbcfm.com/api/v1/image/106811484-1608045351058-gettyimages-1126750618-dsc_1540.jpeg?v=1608045431" alt="Image"/>
                <h3>Blog Post Title 8</h3>
                <small>Published on January 15, 2025</small>
                <p>Curabitur cursus felis ut nisi interdum, nec commodo lorem tristique. Praesent at feugiat ligula.</p>
                <button className="read-more-btn">Read More</button>
            </div>
            <div className="blog-post">
                <img src="https://image.cnbcfm.com/api/v1/image/106811484-1608045351058-gettyimages-1126750618-dsc_1540.jpeg?v=1608045431" alt="Image"/>
                <h3>Blog Post Title 9</h3>
                <small>Published on January 15, 2025</small>
                <p>Curabitur cursus felis ut nisi interdum, nec commodo lorem tristique. Praesent at feugiat ligula.</p>
                <button className="read-more-btn">Read More</button>
            </div>
        </div>
    </section>
    </div>
   
  )
}
