import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=vivekkumarvodnala@gmail.com&su=Let's Connect&body=Hi Vivek, I saw your portfolio and wanted to reach out."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactBtn}
        >
          Gmail Me
        </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/vivekvodnala" target="_blank">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/VivekKumar5697" target="_blank">Git Hub</a>
        </li>
      </ul>
    </footer>
  );
};
