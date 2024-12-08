import { useEffect, useState } from "react";
import techImg from "../../assets/images/tech.jpg";
import wordlImg from "../../assets/images/world.jpg";
import sportsImg from "../../assets/images/sports.jpg";
import scienceImg from "../../assets/images/science.jpg";
import healthImg from "../../assets/images/health.jpg";
import entertainmentImg from "../../assets/images/entertainment.jpg";
import nationImg from "../../assets/images/nation.jpg";
import noImg from "../../assets/images/no-img.png";
import "./news.style.css";
import axios from "axios";

const categories = [
  "general",
  "world",
  "business",
  "technology",
  "entertainment",
  "sports",
  "science",
  "health",
  "nation",
];

const News = () => {
  const [headline, setHeadline] = useState(null);
  const [news, setNews] = useState([]);

  return (
    <div className="news-app">
      <div className="news-header">
        <h1 className="logo">News App</h1>
      </div>
      <div className="news-content">
        <nav className="navbar">
          <h1 className="nav-heading">Categories</h1>
          <div className="categories">
            {categories.map((category) => (
              <a href="#" className="nav-link" key={category}>
                {category}
              </a>
            ))}
          </div>
        </nav>
        <div className="news-section">
          {headline && (
            <div className="headline">
              <img src={headline.image || noImg} alt={headline.title} />
              <h2 className="headline-title">{headline.title}</h2>
            </div>
          )}

          <div className="news-grid">
            {news.map((article, index) => (
              <div className="news-grid-item" key={index}>
                <img src={article.image || noImg} alt={article.title} />
                <h3>{article.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer>
        <p className="copyright">
          <span>News App</span>
        </p>
        <p>&copy; All Rights Reserved. By Code And Create</p>
      </footer>
    </div>
  );
};

export default News;
