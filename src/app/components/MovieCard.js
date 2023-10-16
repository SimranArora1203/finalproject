import React from "react";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";
const MovieCard = (currElem) => {
  const { id, type, title, synopsis } = currElem.jawSummary;
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image
            src={currElem.jawSummary.backgroundImage.url}
            alt="no img available"
            width={250}
            height={200}
          />
        </div>
        <div className={styles.card_data}>
          <h2>{title.substring(0, 18)}</h2>
          <p>{`{synopsis.substring(0, 66)} ...`}</p>
          <Link href={`/movie/${id}`}>
            <button className={styles.card_button}>Read More</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default MovieCard;
