import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
export const FilterComponent = (data) => {
  //console.log(data);
  return (
    <InputGroup className="mb-1">
      <Form.Control
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        value={data.filterText}
        onChange={(e) => {
           data.onFilter(e);
           console.log(data)
        }}
      />
      <Button onClick={data.onClear} variant="outline-secondary" id="button-addon2">
        X
      </Button>
    </InputGroup>
  );
};
