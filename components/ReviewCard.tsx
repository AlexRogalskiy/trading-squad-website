import React from "react";

type Props = {
  name: string;
  image: string;
  review: string;
};

export default function ReviewCard({ name, image, review }: Props) {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center p-2 shadow-lg rounded-md m-3"
        style={{ width: "18rem" }}
      >
        <img src={image} alt={review} className="rounded-full shadow-md mb-2" style={{ height: "7rem" }} />
        <h3 className="font-bold text-lg">
          <em>{name}</em>
        </h3>
        <p>
          <em>{review}</em>
        </p>
      </div>
    </>
  );
}
