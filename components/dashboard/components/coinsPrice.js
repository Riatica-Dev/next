// just dummy data until finish
import react, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/dashboard/layout.module.css";
import axios from "axios";
const CoinsPrice = () => {
  const [coinsPrice, setCoinsPrice] = useState(0);
  useEffect(() => {
    axios
      .post(
        "https://api.livecoinwatch.com/coins/single",
        {
          currency: "USD",
          code: "SGB",
          meta: true,
        },
        {
          headers: {
            "content-type": "application/json",
            "x-api-key": "7091d835-07fb-417e-ba43-1ce0b13ebe12",
          },
        }
      )
      .then((response) => {
        // console.log(response.data);
      })
      .catch((error) => console.log(error));
  });

  return (
    <div className={`${styles.priceCoin} rounded-20`}>
      <div className="d-flex justify-content-between align-items-center">
        <Image
          src="/images/songbir_logo.png"
          alt="songbird icons"
          width="29"
          height="41"
        />
        <span> SongBird</span>
        <span className="text-muted">SGB</span>
      </div>
      <div></div>
      <div className="mt-2">
        <span className={`${styles.balanceText} text-muted`}>BALANCE</span>
        <div className="d-flex align-items-center">
          <Image
            src="/images/upicons.png"
            alt="up icons"
            width="32"
            height="32"
          />
          {/* <Image
            src="/images/downicons.png"
            alt="down icons"
            width="27"
            height="27"
          /> */}
          <span className={`${styles.price} ms-3`}>$21.533.10</span>
        </div>
      </div>
    </div>
  );
};

export default CoinsPrice;
