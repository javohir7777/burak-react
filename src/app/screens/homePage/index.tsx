import ActiveUsers from "./ActiveUsers copy";
import Advertisement from "./Advertisement";
import Events from "./Events";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";

export default function HomePage() {
  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events /> 
    </div>
  );
}
