import React from 'react';
import Typed from "typed.js";
import heroBanner from '../assets/heroBanner.svg';
import { motion } from 'framer-motion';
import classes from './Home.module.css';
const Home = () => {
    const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Online Store"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={classes.container}>
    <section className={classes.textContainer}>
      <motion.div className={classes.textArea} initial={{y:-600}} animate={{y: 0}} transition={{ type:'spring', stiffness:120}}>
        <h4 style={{ color: "white", fontSize: 30 }}>Hello !</h4>
        <h1 style={{ color: "white" }}>
          <span style={{ fontSize: 100 }}>W</span>{"elcome to  "}
          <span
            style={{ color: "#FFE7A0" }}
            
          >
          <br />
            All in One 
          </span>{" "}
          
        </h1>
        <span ref={el} className={classes.text} />
      </motion.div>
    </section>
    <section className={classes.imageSection}>
      <img src={heroBanner} alt="" className={classes.mainImage} />
    </section>
  </div>
  )
}

export default Home
