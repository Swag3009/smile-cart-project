// eslint-disable-next-line import/order
import { useState } from "react";
import { Left, Right } from "neetoicons";
import { Button } from "neetoui";

const Carousel = ({ imageUrls, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % imageUrls.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex items-center">
        <Button
          className="shrink-0 focus-within:ring-0"
          icon={Left}
          style="text"
          onClick={handleNext}
        />
        <img
          alt={title}
          className="max-w-56 h-56 max-h-56 w-56"
          src={imageUrls[currentIndex]}
        />
        <Button
          className="shrink-0 focus-within:ring-0 hover:bg-transparent"
          icon={Right}
          style="text"
          onClick={handlePrevious}
        />
      </div>
      <div className="mt-2 flex justify-center space-x-1">
        {imageUrls.map((_, index) => {
          const defaultClasses =
            "neeto-ui-border-black neeto-ui-rounded-full h-3 w-3 cursor-pointer border";

          const dotClassNames =
            index === currentIndex
              ? defaultClasses.concat(" neeto-ui-bg-black")
              : defaultClasses;

          return (
            <span
              className={dotClassNames}
              key={index}
              onClick={() => setCurrentIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
