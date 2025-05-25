import { useEffect, useState } from "react";

import productApi from "apis/products";
import { Header, PageLoader, PageNotFound } from "components/commons";
import { Typography } from "neetoui";
import { append, isNotNil } from "ramda";
import { useParams } from "react-router-dom";

import Carousel from "./Carousel";

const Product = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const fetchProduct = async () => {
    try {
      const product = await productApi.show(slug);
      setProduct(product);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const { name, description, mrp, offerPrice, imageUrls, imageUrl } = product;
  const totalDiscounts = mrp - offerPrice;
  const discountPercentage = ((totalDiscounts / mrp) * 100).toFixed(1);
  if (isError) return <PageNotFound />;

  if (isLoading) return <PageLoader />;

  return (
    <div className="m-2">
      <Header title={name} />
      <div className="mt-6 flex gap-4">
        <div className="w-2/5">
          <div className="flex justify-center gap-16">
            {isNotNil(imageUrls) ? (
              <Carousel
                imageUrls={append(imageUrl, imageUrls)}
                title="Infinix Inbook"
              />
            ) : (
              <img alt={name} className="w-48" src={imageUrl} />
            )}
          </div>
        </div>
        <div className="w-3/5 space-y-4">
          <Typography>{description}</Typography>
          <Typography>MRP: {mrp}</Typography>
          <Typography>Offer price: {offerPrice}</Typography>
          <Typography>{discountPercentage}% off</Typography>
        </div>
      </div>
    </div>
  );
};

export default Product;
