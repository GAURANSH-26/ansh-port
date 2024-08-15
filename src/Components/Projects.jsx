import React from 'react';
import ProjectCard from './ProjectCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const cardData = [
    {
      image: "",
      price: "9",
      title: "lorem ipsem",
      description: `
        <p>Dig into the freshest veggies of the season! This salad-in-a-jar features a mixture of
        leafy greens and seasonal vegetables, fresh from the farmer's market.</p>
        <hr />
        <p>Served with your choice of dressing on the side: <strong>housemade ranch</strong>, <strong>cherry balsamic
        vinaigrette</strong>, <strong>creamy chipotle</strong>, <strong>avocado green goddess</strong>, or <strong>honey mustard</strong>. Add your choice
        of protein for $2 more.</p>
      `
    },
    {
      image: "",
      title: "lorem ipsem",
      description: `
        <p>Dig into the freshest veggies of the season! This salad-in-a-jar features a mixture of
        leafy greens and seasonal vegetables, fresh from the farmer's market.</p>
        <hr />
        <p>Served with your choice of dressing on the side: <strong>housemade ranch</strong>, <strong>cherry balsamic
        vinaigrette</strong>, <strong>creamy chipotle</strong>, <strong>avocado green goddess</strong>, or <strong>honey mustard</strong>. Add your choice
        of protein for $2 more.</p>
      `
    },
    {
      image: "",
      title: "lorem ipsem",
      description: `
        <p>All great meals take time, but this one takes it to the next level! More than 650 hours
        of fermenting, brining, aging, and curing goes into each and every one of our legendary
        Reuben sandwiches.</p>
        <p>Every element of this extraordinary sandwich is handcrafted in our kitchens, from the rye
        bread baked from our secret recipe to the cave-aged Swiss cheese, right down to the
        pickle. The only thing we didn't make on the premises is the toothpick ( but we're
        looking into how to do that).</p>
        <hr />
        <p>This unforgettable sandwich has all of the classic Reuben elements: <strong>corned beef</strong>, <strong>rye
        bread</strong>, <strong>creamy Russian dressing</strong>, <strong>sauerkraut</strong>, plus a <strong>sweet gherkin pickle</strong>.
        No substitions please!</p>
        <p>Add a side of <strong>french fries</strong> or <strong>sweet potato fries</strong> for $2 more, or our
        <strong>housemade pub chips</strong> for $1.</p>
      `
    },
    {
      image: "",
      title: "lorem ipsem",
      description: `
        <p>A succulent sextet of fresh figs join with a selection of bodacious seasonal berries in
        this refreshing, shareable dessert.</p>
        <hr />
        <p>Choose your drizzle: <strong>cherry-balsamic vinegar</strong>, <strong>local honey</strong>, or
        <strong>housemade chocolate sauce</strong>.</p>
      `,
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,  // Disable the navigation arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  

  return (
    <>
       <div className='project'>
      <h1>My Work <span>& Projects</span></h1>
      <hr />
      <div className="main">
        <Slider {...settings}>
          {cardData.map((data, index) => (
            <ProjectCard key={index} {...data} />
          ))}
        </Slider>
      </div>
    </div>
    </>
  );
};

export default Projects;
