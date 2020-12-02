import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutDescripion}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sagittis velit vitae vehicula mattis. Cras dui quam, pretium id
            nulla sed, finibus sollicitudin enim. Integer erat nunc, aliquam
            quis convallis pellentesque, sodales ut tortor. Aliquam erat
            volutpat. Cras at faucibus urna. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas. In
            semper viverra lectus sed egestas.
          </p>
          <p>
            Aenean ornare, ex sed vehicula elementum, dui purus dignissim odio,
            eget malesuada lacus dui in nisl. Donec commodo mattis rhoncus.
            Praesent nisl elit, consectetur nec augue et, cursus elementum
            neque.
          </p>
        </div>

        <div className={styles.aboutContact}>
         <div>
         <h3>Kontakt:</h3>
          <p>werachodanionek@gmail.com</p>
          <p>666204224</p>
         </div>
        </div>
      </div>
    </div>
  );
};

export default About;
