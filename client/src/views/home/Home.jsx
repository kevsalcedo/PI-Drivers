import CardContainer from "../../components/cardContainer/CardContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDrivers } from "../../redux/actions/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDrivers());
  }, []);

  /*   const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  }; */

  return (
    <>
      <div>
        <select /* onChange={handleOrder} */>
          <option value="A">Ascendente</option>
          <option value="D">Decendente</option>
        </select>

        <select /* onChange={handleFilter} */>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Sports">Sports</option>
          <option value="Shooter">Shooter</option>
        </select>
      </div>

      <div>
        <CardContainer />
      </div>
    </>
  );
};

export default Home;
