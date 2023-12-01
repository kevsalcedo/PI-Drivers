import CardContainer from "../../components/cardContainer/CardContainer";
import SearchBar from "../../components/searchBar/SearchBar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDrivers, getTeams } from "../../redux/actions/actions";

const Home = () => {
  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams);

  useEffect(() => {
    dispatch(getDrivers());
    //dispatch(getTeams());
  }, []);

  const filterByTeam = (event) => {
    dispatch(filterTeam(event.target.value));
  };

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };

  return (
    <>
      <div>
        <SearchBar />
      </div>

      <div>
        <select name="filterByOrigin" onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Decendente</option>
        </select>

        {/* <select name="filterByTeam" onChange={filterByTeam}>
          {teams &&
            teams.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
        </select> */}
      </div>

      <div>
        <CardContainer />
      </div>
    </>
  );
};

export default Home;
