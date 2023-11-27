import ExtraImage from "../../assets/alexander-naglestad-Fy8o0YA-e2Q-unsplash_11zon.jpg";

const ExtraSection = () => {
  return (
    <div className="my-40">
      <div className="md:flex justify-between items-center">
        <div className="w-full px-8 ">
          <img
            src={ExtraImage}
            alt="Extra Image"
            loading="lazy"
            className="image-design border-4 border-slate-400 intersection translate-y-32 opacity-0 duration-1000"
          />
        </div>
        <div className="w-full px-7 mt-12  intersection translate-y-32 opacity-0 duration-1000">
          <h1 className="md:text-3xl text-2xl font-semibold uppercase">
            Find Your State Restaurant By Us
          </h1>
          <p className="text-slate-500 my-5">
            Discover and Dine Together with Find Restaurant! Our user-friendly
            mobile app is your go-to companion for exploring exciting dining
            options and, uniquely, sharing your current restaurant location with
            friends. Easily coordinate meet-ups, enhance your dining experience,
            and stay connected effortlessly. Whether youre navigating a new city
            or planning a night out, Find Restaurant puts the power of social
            dining in your hands. Download now and enjoy the convenience of
            sharing and discovering great food experiences with your favorite
            people!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
