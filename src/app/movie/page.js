import React from "react";
import Link from "next/link";
import styles from "@/app/styles/common.module.css";
import MovieCard from "@/app/components/MovieCard";
const Movie = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const url = process.env.RAPID_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "80e97b1c00msh0aab5918fe5ed68p1c0a0fjsnef23ad78230a",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  console.log(data);
  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movies</h1>
          <div className={styles.card_section}>
            {main_data.map((currElem) => {
              return <MovieCard key={currElem.id} {...currElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
