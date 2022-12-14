import { useEffect, useState } from "react";
import { getGIFs } from "../api/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGIFs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages(category);
  }, []);

  return {
    images,
    isLoading,
  };
};
