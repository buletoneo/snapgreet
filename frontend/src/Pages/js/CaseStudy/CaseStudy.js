import React, { useState } from "react";
import styles from "./CaseStudy.module.css";
import { Link } from "react-router-dom";

const CaseStudy = () => {
  const [setActive] = useState([true, false, false, false, false]);

  //   const filterData = (category) => {
  //     let temp = fakeData.filter((x) => x.category === category);
  //     setData([...temp]);
  //   };
  const activeNav = (i) => {
    let temp = [false, false, false, false, false];
    temp[i] = true;
    setActive([...temp]);
  };

  return (
    <div className="highlight">
      <div className={`container ${styles.contain} overflow-hidden`}>
        {/* <p className={styles.head} data-aos="slide-right">
        WHAT WE DO
      </p> */}
        {/* <div data-aos="slide-left">
        <p className={styles.our}>OUR CASE&nbsp;</p>
        <p className={styles.study}>STUDIES</p>
      </div> */}
        {/* <div className={`${styles.grp_btn}`} data-aos='fade'>
                <p onClick={()=>{ setData(fakeData); activeNav(0) }} className={`${styles.filter} ${active[0] ? styles.active : null}`}>ALL</p>
                <p onClick={()=>{ filterData('financial'); activeNav(1) }} className={`${styles.filter} ${active[1] ? styles.active : null}`}>FINANCIAL</p>
                <p onClick={()=>{ filterData('human resources'); activeNav(2) }} className={`${styles.filter} ${active[2] ? styles.active : null}`}>HUMAN RESOURCES</p>
                <p onClick={()=>{ filterData('start up'); activeNav(3) }} className={`${styles.filter} ${active[3] ? styles.active : null}`}>START UP</p>
                <p onClick={()=>{ filterData('strategy'); activeNav(4) }} className={`${styles.filter} ${active[4] ? styles.active : null}`}>STRATEGY</p>
            </div> */}

        <div className="row mb-2">
          {data.map((x) => (
            <div
              key={x.id}
              className={`col-md-6 col-sm-6 mt-4`}
              data-aos="fade"
            >
              <div
                className={styles.img}
                style={{
                  backgroundImage: `linear-gradient(rgba(99, 184, 111, 0), rgba(42, 222, 153, 0.55)), url(${x.img})`,
                }}
              >
                <p className={styles.imgText1}>{x.designation}</p>
                <p className={styles.imgText2}>{x.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
