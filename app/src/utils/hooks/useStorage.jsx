import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

function useStorage() {
  const [recentItems, setRecentItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    refreshItems();
  }, []);

  const refreshItems = () => {
    AsyncStorage.getItem("recentItems").then((result) => {
      setLoading(false);
      if (result !== null) {
        setRecentItems(JSON.parse(result));
      }
    });
  };

  const addItem = (item) => {
    if (!item) return;
    setRecentItems((prevItems) => {
      prevItems = prevItems.filter((prevItem) => prevItem !== item);
      prevItems.unshift(item);
      AsyncStorage.setItem("recentItems", JSON.stringify(prevItems));
      return prevItems;
    });
  };

  const deleteItem = (item) => {
    setRecentItems((prevItems) => {
      prevItems = prevItems.filter((prevItem) => prevItem !== item);
      AsyncStorage.setItem("recentItems", JSON.stringify(prevItems));
      return prevItems;
    });
  };

  return [recentItems, addItem, deleteItem, refreshItems, loading];
}

export default useStorage;
