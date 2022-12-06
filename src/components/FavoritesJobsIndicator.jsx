import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import * as Icon from "react-bootstrap-icons";

// useSelector is a Redux Hook coming from the bindings library
// that can grant to this component "read access" to the Redux Store

const FavoritesJobsIndicator = () => {
  const navigate = useNavigate();

  const favoritesLength = useSelector(
    (store) => store.favorites.favorites.length
  );
  console.log(favoritesLength);
  // now cartLength is always going to be a digit: the length of the
  // content array sitting in the cart slice of the Store

  return (
    <div className="ml-auto mt-3 mb-4">
      <Button color="primary" onClick={() => navigate("/favorites")}>
        <Icon.HeartFill className="text-danger mr-1" />
        <span className="ml-2">{favoritesLength}</span>
      </Button>
    </div>
  );
};

export default FavoritesJobsIndicator;
