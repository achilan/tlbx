import Spinner from "react-bootstrap/Spinner";
export const Loading = () => (
  <div
    className="text-center"
    style={{ display: "flex", width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center" }}
  >
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
);
