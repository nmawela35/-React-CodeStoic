import React from "react";
import { useParams } from "react-router-dom";

export default function Products() {
  const { id } = useParams();
  return (
    <div>
      <h1>Products Lists</h1>
      <b>Showing Products with {id}</b>
    </div>
  );
}
