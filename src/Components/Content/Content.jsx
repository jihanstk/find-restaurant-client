import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleTabPanel from "./SingleTabPanel";
const Content = () => {
  const [locations, setLocations] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      "https://find-restaurant-server.vercel.app/restaurant"
    );
    const data = await response.json();

    const uniqueLocations = [];

    data.forEach((place) => {
      if (!uniqueLocations.includes(place.state)) {
        uniqueLocations.push(place.state);
      }
    });
    setLocations(uniqueLocations);
    setRestaurants(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="my-28 text-center w-11/12 mx-auto">
      <div className="my-10">
        <h1 className="text-3xl font-bold uppercase">
          Here is your state restaurant
        </h1>
        <p className="md:w-1/2 mx-auto  my-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
          impedit eaque reiciendis, sit temporibus dolores laborum rem cum
          dolore libero.
        </p>
      </div>
      <Tabs>
        <TabList>
          {locations?.map((location, index) => {
            return <Tab key={index}>{location}</Tab>;
          })}
        </TabList>
        {locations?.map((location, index) => {
          return (
            <TabPanel key={index}>
              <div className="tab-list mt-8">
                {restaurants
                  ?.filter((restaurant) => restaurant.state === location)
                  .map((restaurant, i) => (
                    <SingleTabPanel
                      key={i}
                      restaurant={restaurant}
                    ></SingleTabPanel>
                  ))}
              </div>
            </TabPanel>
          );
        })}
      </Tabs>
    </div>
  );
};

export default Content;
