import { Col, Row, Button } from "react-bootstrap";
// import { FaTrash } from 'react-icons/fa'
import { useSelector, useDispatch } from "react-redux";
import * as Icon from "react-bootstrap-icons";

// Cart now needs to read/"write" to the store, reading the value
// of cart.content and being able to dispatch an action for removing
// an element from the cart!

const Favorites = () => {
  const favorites = useSelector((state) => state.jobs.favorites);
  const dispatch = useDispatch();

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: "none" }}>
          {favorites.map((job, i) => (
            <li key={i} className="my-4">
              <span
                className="text-danger mr-2"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_FAVORITES",
                    payload: i,
                  });
                }}
              >
                <Icon.TrashFill />
              </span>
              {job.title} at {job.company_name} Company
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};

export default Favorites;
