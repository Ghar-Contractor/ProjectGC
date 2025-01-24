import React, { useState } from 'react';
import './blog.css'; 
 

export default function Blog() {
    const [expandedPosts, setExpandedPosts] = useState({});
  
    const toggleExpand = (postId) => {
      setExpandedPosts((prevState) => ({
        ...prevState,
        [postId]: !prevState[postId], 
      }));
    };

  return (
    <div>
      <header>
        <h1>Blogs</h1>
      </header>

      <section className="blog-category">
        <h2>Design Ideas</h2>
        <div className="container">
          <div className="blog-post">
            <img
              src="https://images.pexels.com/photos/10202865/pexels-photo-10202865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Image"
            />
            <h3>Blog Post Title 1</h3>
            <small>Published on January 16, 2025</small>
            <p
              className={expandedPosts[1] ? 'expanded' : ''}
            >
              When you complete the job sim, you open up a whole world of
              opportunities. You can add the experience to your resume to show
              Tata Group recruiters you've got the passion and skills they're
              looking for. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
            <button
              className="read-more-btn"
              onClick={() => toggleExpand(1)}
            >
              {expandedPosts[1] ? 'Show Less' : 'Read More'}
            </button>
          </div>
            <div className="blog-post">
                <img src="https://image.cnbcfm.com/api/v1/image/106811484-1608045351058-gettyimages-1126750618-dsc_1540.jpeg?v=1608045431" alt="Image"/>
                <h3>Blog Post Title 2</h3>
                <small>Published on January 15, 2025</small>
                <p
              className={expandedPosts[2] ? 'expanded' : ''}
            >
              Curabitur cursus felis ut nisi interdum, nec commodo lorem
              tristique. Praesent at feugiat ligula.
            </p>
            <button
              className="read-more-btn"
              onClick={() => toggleExpand(2)}
            >
              {expandedPosts[2] ? 'Show Less' : 'Read More'}
            </button>
            </div>
            <div className="blog-post">
                <img src="https://d3cl79h6n1fe0x.cloudfront.net/wp-content/uploads/2020/01/15085115/11.jpeg" alt="Image"/>
                <h3>Blog Post Title 3</h3>
                <small>Published on January 14, 2025</small>
                <p
              className={expandedPosts[3] ? 'expanded' : ''}
            >
              Proin eget tortor risus. Mauris blandit aliquet elit, eget
              tincidunt nibh pulvinar a.
            </p>
            <button
              className="read-more-btn"
              onClick={() => toggleExpand(3)}
            >
              {expandedPosts[3] ? 'Show Less' : 'Read More'}
            </button>
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
                <p
              className={expandedPosts[4] ? 'expanded' : ''}
            >
              Proin eget tortor risus. Mauris blandit aliquet elit, eget
              tincidunt nibh pulvinar a.
            </p>
            <button
              className="read-more-btn"
              onClick={() => toggleExpand(4)}
            >
              {expandedPosts[4] ? 'Show Less' : 'Read More'}
            </button>
            </div>
            <div className="blog-post">
                <img src="https://www.countycouncilsnetwork.org.uk/wp-content/uploads/Construction-site-1.jpeg" alt="Image"/>
                <h3>Blog Post Title 5</h3>
                <small>Published on January 6, 2025</small>
                <p
              className={expandedPosts[5] ? 'expanded' : ''}
            >
              Proin eget tortor risus. Mauris blandit aliquet elit, eget
              tincidunt nibh pulvinar a.
            </p>
            <button
              className="read-more-btn"
              onClick={() => toggleExpand(5)}
            >
              {expandedPosts[5] ? 'Show Less' : 'Read More'}
            </button>
            </div>
            <div className="blog-post">
                <img src="https://www.countycouncilsnetwork.org.uk/wp-content/uploads/Construction-site-1.jpeg" alt="Image"/>
                <h3>Blog Post Title 6</h3>
                <small>Published on January 6, 2025</small>
                <p
              className={expandedPosts[6] ? 'expanded' : ''}
            >
              Proin eget tortor risus. Mauris blandit aliquet elit, eget
              tincidunt nibh pulvinar a.
            </p>
            <button
              className="read-more-btn"
              onClick={() => toggleExpand(6)}
            >
              {expandedPosts[6] ? 'Show Less' : 'Read More'}
            </button>
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
                <p
              className={expandedPosts[7] ? 'expanded' : ''}
            >
              Proin eget tortor risus. Mauris blandit aliquet elit, eget
              tincidunt nibh pulvinar a.
            </p>
            <button
              className="read-more-btn"
              onClick={() => toggleExpand(7)}
            >
              {expandedPosts[7] ? 'Show Less' : 'Read More'}
            </button>
            </div>
            <div className="blog-post">
                <img src="https://image.cnbcfm.com/api/v1/image/106811484-1608045351058-gettyimages-1126750618-dsc_1540.jpeg?v=1608045431" alt="Image"/>
                <h3>Blog Post Title 8</h3>
                <small>Published on January 15, 2025</small>
                <p
              className={expandedPosts[8] ? 'expanded' : ''}
            >
              Proin eget tortor risus. Mauris blandit aliquet elit, eget
              tincidunt nibh pulvinar a.
            </p>
            <button
              className="read-more-btn"
              onClick={() => toggleExpand(8)}
            >
              {expandedPosts[8] ? 'Show Less' : 'Read More'}
            </button>
            </div>
            <div className="blog-post">
                <img src="https://image.cnbcfm.com/api/v1/image/106811484-1608045351058-gettyimages-1126750618-dsc_1540.jpeg?v=1608045431" alt="Image"/>
                <h3>Blog Post Title 9</h3>
                <small>Published on January 15, 2025</small>
                <p
              className={expandedPosts[9] ? 'expanded' : ''}
            >
              Proin eget tortor risus. Mauris blandit aliquet elit, eget
              tincidunt nibh pulvinar a.
            </p>
            <button
              className="read-more-btn"
              onClick={() => toggleExpand(9)}
            >
              {expandedPosts[9] ? 'Show Less' : 'Read More'}
            </button>
            </div>
        </div>
      </section>
    </div>
  );
}
