import CardContainer from "../../components/cardContainer/CardContainer";
import SearchBar from "../../components/searchBar/SearchBar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDrivers, getTeams } from "../../redux/actions/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDrivers());
    dispatch(getTeams());
  }, []);


  return (
    <>
      <div>
        <SearchBar />
      </div>

      <div>
        <CardContainer />
      </div>
    </>
  );
};

export default Home;
