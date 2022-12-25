import Image from "next/image";
import christmasCard from "../public/imgs/fonte_2022_christmas.png";
import { useState } from "react";

export default function ChristmasPupup() {
  const [show, setShow] = useState(true);
  return (
    show && (
      <div
        style={{
          position: "fixed",
          zIndex: 99999999,
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => setShow(false)}
          style={{
            background: "unset",
            border: "unset",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "80vw",
              aspectRatio: "839 / 420",
              position: "relative",
            }}
          >
            <Image src={christmasCard} objectFit="cover" />
          </div>
        </button>
      </div>
    )
  );
}
