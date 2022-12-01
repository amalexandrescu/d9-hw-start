import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { useDispatch } from "react-redux";

const Job = ({ data, show }) => {
  const dispatch = useDispatch();

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name} </Link>
        {show && (
          <span
            onClick={() => {
              dispatch({
                type: "ADD_TO_FAVORITES",
                payload: data,
              });
            }}
          >
            <Icon.HeartFill className="ml-2 addToFavorites text-danger" />
          </span>
        )}
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
