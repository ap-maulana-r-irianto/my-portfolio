import React from "react";
import PortfolioItem from "../components/PortfolioItem";
import "../styles.css";

function Portfolio() {
  const portfolioData = [
    {
      id: 1,
      title: "Spring Boot",
      description: "I have building REST API service with Spring Boot.",
    },
    {
      id: 2,
      title: "Angular",
      description: "I have developed Frontend using Angular.",
    },
    {
      id: 3,
      title: "React",
      description: "I have developed Frontend using React.",
    },
  ];

  return (
    <div>
      <h2>My Portfolio</h2>
      <div className="portfolio-list">
        {portfolioData.map((item) => (
          <PortfolioItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
