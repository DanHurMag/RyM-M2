import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import Cards from "../cards/Card";

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "order") {
      setAux(!aux);
      dispatch(orderCards(value));
    } else if (name === "filter") {
      dispatch(filterCards(value));
    }
  };

  return (
    <div>
      <select name="order" id="order" onChange={handleChange}>
        <option value="Asc">Ascendente</option>
        <Cards characters={favorites} />
      </select>
    </div>
  );
}
