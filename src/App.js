import { useEffect, useState } from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Container from "react-bootstrap/Container";
import { Loading } from "./components/Loading";
import { TableData } from "./components/TableData";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Data from "./resources/Data.json";
export const App = () => {
  const [loadingPage, setLoadingPage] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      fetch(Data.API+Data.FILES+"?frontend=true", {
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      })
        .then((response) => response.json())
        .then((data) => {
          var arrays=[];
          data.map((item)=>(
            item.lines.map((it)=>(
              arrays.push(it)
            ))
          ))
          setData(arrays);
          setLoadingPage(false)

        })
        .catch((error) => console.log(error));
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <ThemeProvider breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]} minBreakpoint="xxs">
      <Container fluid>
        {loadingPage ? (
          <Loading />
        ) : (
          <>
            <Row className="justify-content-md-center">
              <Col>
                <h1> Api Service</h1>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col>
                <TableData data={data} />
              </Col>
            </Row>
          </>
        )}
      </Container>
    </ThemeProvider>
  );
};
