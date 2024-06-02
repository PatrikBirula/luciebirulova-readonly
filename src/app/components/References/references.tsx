"use client";

import { useState } from "react";
import Image from "next/image";
import "./references.scss";
import Card from "../Cards/serviceCard";
import reviews from "./data";

interface Prop {
  wrapperClass?: string;
}

const References = ({ wrapperClass }: Prop) => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState<number>(0);

  const goToNextReview = () => {
    setCurrentReviewIndex(prevIndex =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousReview = () => {
    setCurrentReviewIndex(prevIndex =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <button onClick={goToPreviousReview} className="remove-styles">
        <Image
          src="/assets/images/icons/arrow-left.svg"
          alt="Předchozí recenze"
          className="height-auto"
          width={50}
          height={50}
        />
      </button>

      <Card
        header={reviews[currentReviewIndex].name}
        paragraphText={reviews[currentReviewIndex].review}
        wrapperClass={wrapperClass}
      />
      <button onClick={goToNextReview} className="remove-styles">
        <Image
          src="/assets/images/icons/arrow-right.svg"
          alt="Následující recenze"
          className="height-auto"
          width={50}
          height={50}
        />
      </button>
    </>
  );
};

export default References;
