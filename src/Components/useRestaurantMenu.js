import { useEffect, useState } from "react";
import { resDetails, resList } from "../utils/mockData";

export const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    if (!resId) return;

    let menuData = null;

    if (resDetails && typeof resDetails === "object") {
      if (resDetails[resId]) {
        menuData = resDetails[resId];
      } else if (resDetails?.cards) {
        menuData = resDetails;
      }
    }

    if (!menuData) {
      const matchedRestaurant = resList?.restaurants?.find(
        (restaurant) => restaurant?.info?.id === resId
      );
      menuData = matchedRestaurant?.menu || null;
    }

    setResInfo(menuData);
  }, [resId]);

  return resInfo;
};