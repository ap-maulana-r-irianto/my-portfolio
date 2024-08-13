import React from "react";
import PortfolioItem from "./PortfolioItem";
import "../styles.css";

function PortfolioList({ items }) {
  return (
    <div className="portfolio-list">
      {items.map((item) => (
        <PortfolioItem
          key={item.id}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
}

export default PortfolioList;
