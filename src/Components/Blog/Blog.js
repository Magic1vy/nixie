import React from "react";
import { useState } from "react";
import dataArticles from "./dataArticles";
import Footer from "../Footer";
import guideImage from '../../assets/blog/guide.png'
import ScrollToTopButton from "../ ScrollToTopButton";

function Blog() {
    const [name] = useState(dataArticles);

    return (
    <>
        <section className="blog-component">
            <h1 className="heading">Blog</h1>
            <ScrollToTopButton />
            <section className="guides-section">
                <h2 className="blog-section-header">Guides</h2>
                <div className="guid-wrapper">
                    <img className="guid-img" src={guideImage} alt="HOW TO PREPARE FOR A PHOTOSHOOT Guide" width='auto' height='auto'/>
                    <div className="guid-container">
                        <h3 className="text">Price: Free</h3>
                        <button onClick={() => window.location.href = 'https://drive.google.com/file/d/1y3EqHHfu1w-71rMODCXs-MruuqySfIwt/view?pli=1'} className="btn-request">Download</button>

                    </div>
                </div>
            </section>

            <hr/>

            <h2 className="blog-section-header">Articles</h2>
            {name.map((item) => {
                const { id, image, imageMobile, title, content, published } = item;

                return (
                    <section key={id} className="article-container">
                        <div className="container">
                            <img className="article-image desktop" src={image} alt="article" loading="lazy"  width="auto" height="auto"/>
                            <img className="article-image mobile" src={imageMobile} alt="article" loading="lazy"  width="auto" height="auto"/>
                            
                        </div>

                        <section className="blog-container">
                            <h3 className="article-title">{title}</h3>
                            <div className="text"> {content} </div>
                            <h4 className="text-published-date">Publication Date: {published}</h4>
                        </section>
                    </section>
                );
            })}
        </section>
        <Footer />
        </>
    );
}

export default Blog;
