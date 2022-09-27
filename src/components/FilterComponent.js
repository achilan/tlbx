import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
export const FilterComponent = (data) => {
  //console.log(data);
  return (
    <InputGroup className="mb-1">
      <Form.Control
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon2"
        value={data.filterText}
        onChange={(e) => {
           data.onFilter(e);
        }}
      />
      <Button onClick={data.onClear} variant="outline-secondary" id="button-addon2">
        X
      </Button>
    </InputGroup>
  );
};
