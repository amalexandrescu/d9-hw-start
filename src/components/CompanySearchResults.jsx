import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { propTypes } from "react-bootstrap/esm/Image";

const CompanySearchResults = () => {
  const dispatch = useDispatch();

  const [jobs, setJobs] = useState([]);
  const params = useParams();

  const baseEndpoint = "https://strive-jobs-api.herokuapp.com/jobs?company=";

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.companyName);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} show={true} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
