import React from "react";
import { Col } from "react-bootstrap";
import tourData from "../../assets/data/tours";
import TourCard from "../../shared/TourCard";

const FeaturedTourList = () => {
  return (
    <>
      {tourData?.map((tour) => (
        <Col lg="3" className="mb-4" key={tour.id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  );
};

export default FeaturedTourList;
