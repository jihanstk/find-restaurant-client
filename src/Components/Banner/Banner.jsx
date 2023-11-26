import { useEffect } from "react";
import bannerSmallVideo from "../../assets/banner-small.mp4";
import bannerVideo from "../../assets/banner.mp4";
const Banner = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".intersection");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("intersection-show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );
    elements.forEach((element) => {
      observer.observe(element);
    });
  }, []);
  return (
    <div className="w-full  bg-gradient-to-r from-black/20 via-black/5 to-black/20 banner mx-auto ">
      <div className=" w-full ">
        <div className="w-full relative ">
          <video
            src={bannerVideo}
            autoPlay
            loop
            muted
            className=" w-full h-full md:block hidden"
          ></video>
          <video
            src={bannerSmallVideo}
            autoPlay
            loop
            muted
            className=" w-full h-full md:hidden block"
          ></video>
          {/* <img
            src={bannerImage}
            alt="Restaurant"
            className="w-full intersection -translate-x-96 opacity-0 duration-1000"
          /> */}
          <div className="w-full h-full text-center  absolute top-0 bg-[black]/60 flex justify-center items-center ">
            <div className="intersection translate-x-96 opacity-0 duration-1000">
              <h1 className="md:text-5xl text-2xl font-bold text-[#C5FFF8]">
                Find Your Desired Restaurant
              </h1>
              <p className="text-sm text-[#b8b8b8] md:w-2/3 w-11/12 mx-auto my-4">
                🍽️ Discover & Share with Find Restaurant 🍲 Your Ultimate Dining
                Companion! Explore, Share, and Enjoy - Bringing Friends
                Together, One Bite at a Time. Download Now for a Seamless Dining
                Experience! 📲 #FindRestaurant #DineTogether #FoodieAdventure
              </p>
              <button className="btn bg-[#0174BE] hover:bg-[#69a9fc] text-black">
                Find Restaurant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
