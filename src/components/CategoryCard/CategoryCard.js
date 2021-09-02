import React from "react";
import "./CategoryCard.css";
import { categoryPath } from "../../const/urls";

export default function CategoryCard({
  classNames = "",
  imagePath,
  icon = "",
  text,
}) {
  return (
    <div className={`card ${classNames}`}>
      {
        <img
          src={
            !imagePath ? categoryPath + "vip-1.svg" : categoryPath + imagePath
          }
          alt="category-img"
          className="top-img"
        />
      }
      <div className="text-wrapper">
        <img
          src={!icon ? categoryPath + "Rectangle.svg" : categoryPath + icon}
          alt="icon"
          className="icon"
        />
        <p>{!text ? "Category" : text}</p>
      </div>
    </div>
  );
}
