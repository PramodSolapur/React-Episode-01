import React, { useEffect, useState } from "react";
import { CDN_URL, MENU_API, MENU_CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const res = await fetch(`${MENU_API}${resId}`);
      const data = await res.json();
      setMenuData(data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  };

  if (menuData === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } = menuData[0]?.card?.card?.info;
  const data = menuData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(2);
  return (
    <div>
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}{" "}
      </h3>
      <h2 className="menu-title">Menu items</h2>
      {data?.map((item) => {
        const { title } = item.card?.card;
        const { itemCards } = item.card?.card;

        if (!title || !itemCards) {
          return null;
        }

        return (
          <div className="category" key={title}>
            <h3>{title}</h3>
            <ul>
              {itemCards?.length > 0 &&
                itemCards.map((menu) => {
                  const {
                    id,
                    name,
                    price,
                    defaultPrice,
                    imageId,
                    ratings,
                    isVeg,
                  } = menu.card.info;
                  return (
                    <li className="menu-item" key={id}>
                      {name} - Rs. {price / 100 || defaultPrice / 100}-{" "}
                      <img className="menu-img" src={MENU_CDN_URL + imageId} />
                      <p>
                        {!ratings.aggregatedRating.rating
                          ? ""
                          : ratings.aggregatedRating.rating + "⭐"}
                      </p>
                      <p>
                        {isVeg === 1 ? (
                          <img
                            className="veg-icon"
                            src="https://www.clipartmax.com/png/middle/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png"
                          />
                        ) : (
                          <img
                            className="veg-icon"
                            src="https://www.vhv.rs/dpng/d/437-4370761_non-veg-icon-non-veg-logo-png-transparent.png"
                          />
                        )}
                      </p>
                    </li>
                  );
                })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
