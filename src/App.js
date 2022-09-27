import { useEffect, useState } from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Container from "react-bootstrap/Container";
import { Loading } from "./components/Loading";
import { TableData } from "./components/TableData";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export const App = () => {
  const [loadingPage, setLoadingPage] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 2000);
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
                <TableData />
              </Col>
            </Row>
          </>
        )}
      </Container>
    </ThemeProvider>
  );
};
