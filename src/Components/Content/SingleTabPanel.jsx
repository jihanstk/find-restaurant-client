import "react-tabs/style/react-tabs.css";

const SingleTabPanel = ({ restaurant }) => {
  return (
    <div className="card w-auto bg-transparent hover:bg-[#000]/10 border border-[#19A7CE] hover:border-[#91e5fd] duration-500 text-[#C5FFF8] content-shadow">
      <div className="card-body">
        <h2 className="card-title">{restaurant.restaurant_name}</h2>
        <p className="text-left">{restaurant.state}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default SingleTabPanel;
