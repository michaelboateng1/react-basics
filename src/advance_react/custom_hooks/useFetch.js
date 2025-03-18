import { useState, useEffect } from "react";

export function useFetch(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(url);
      const parseData = await response.json();
      setData(parseData);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { isLoading, data };
}
