import React from "react";
import "./ImageSlot.css";

export default function ImageSlot({ id, src, aspectRatio = "1/1", alt = "" }) {
  return (
    <div
      id={id}
      className={["image-slot", src && "image-slot--filled"].filter(Boolean).join(" ")}
      style={{ aspectRatio }}
    >
      <span className="corner corner--tl" />
      <span className="corner corner--tr" />
      <span className="corner corner--bl" />
      <span className="corner corner--br" />

      {src && <img src={src} alt={alt} className="image-slot__img" />}
    </div>
  );
}
