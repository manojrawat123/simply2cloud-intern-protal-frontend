import React, { useState, useEffect, useContext } from "react";
import "./PhotoSlider.css";
import { ArrowBack, ArrowBackIos, ArrowForward, ArrowForwardIos, ArrowLeft, ArrowRight, ForkRight } from "@mui/icons-material";
import API_BASE_URL from "../../../../../config";

const PhotoSlider = ({skills}) => {
  const [people, setPeople] = useState(skills);
  const [index, setIndex] = React.useState(0);

  const images = skills.map((element,index)=>{
    return `${API_BASE_URL}/${element.user_image}`
  })
  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

 

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <section className="section relative bg-white">
      <div className="title">
        <h2 className="text-xl font-semibold">
          <span>/</span>Portfolio Images
        </h2>
      </div>
      <div className="section-center">

        {images.map((person, personIndex) => {
          

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={`${position} flex justify-center items-center `} key={"id"} >
                {console.log(person)}
              <img src={`${person}`} alt={"name"} className="person-img md:h-[460px] h-[300px] mt-4" />
            </article>
          );
        })}
      </div>
      <button className="absolute top-[215px] md:left-[6rem]" onClick={() => setIndex(index - 1)}>
          
          <ArrowBackIos />
        </button>
        <button className="absolute right-0 md:right-[6rem] top-[215px]" onClick={() => setIndex(index + 1)}>
          <ArrowForwardIos />
        </button>
        
    </section>
  );
};


export default PhotoSlider