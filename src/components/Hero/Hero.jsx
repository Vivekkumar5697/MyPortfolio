import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vivek Vodnala</h1>
        <p className={styles.description}>
          I'm a Computer Science undergraduate passionate about full-stack web development, data structures & algorithms, and AI. I enjoy building real-world projects and solving complex problems through code!
        </p>
        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=vivekkumarvodnala@gmail.com&su=Let's Connect&body=Hi Vivek, I saw your portfolio and wanted to reach out."
  target="_blank"
  rel="noopener noreferrer"
  className={styles.contactBtn}
>
  Contact Me
</a>

      </div>
      <img
        src={getImageUrl("hero/hero.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
