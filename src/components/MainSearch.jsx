import { useState } from "react";
import { Container, Row, Col, Form, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getJobsAction } from "../redux/actions";
import Job from "./Job";
import { IS_LOADING_JOBS } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);

  const jobsFromRedux = useSelector((state) => state.searchedResults.results);

  const areJobsLoading = useSelector(
    (state) => state.searchedResults.isLoading
  );

  const areJobsError = useSelector((state) => state.searchedResults.isError);

  const dispatch = useDispatch();

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
    dispatch({
      type: IS_LOADING_JOBS,
      payload: true,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(getJobsAction(query));

    // try {
    //   const response = await fetch(baseEndpoint + query + "&limit=20");
    //   if (response.ok) {
    //     const { data } = await response.json();
    //     setJobs(data);
    //   } else {
    //     alert("Error fetching results");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
          {areJobsError ? (
            <Alert variant="danger" className="text-center">
              Sorry, something went wrong
            </Alert>
          ) : (
            <></>
          )}
          {areJobsLoading && query ? (
            <Spinner animation="border" role="status"></Spinner>
          ) : (
            ""
          )}
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobsFromRedux &&
            jobsFromRedux.map((jobData) => (
              <Job key={jobData._id} data={jobData} show={false} />
            ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
