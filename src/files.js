import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { fileList } from "./service";

const File = () => {
  const [data, setData] = useState([]);
  const titleStyle = {
    color: "white",
    backgroundColor: "#fb6464",
    padding: "10px",
    textAlign: "center",
  };

  useEffect(() => {
    fileList()
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          setData(resp.data);
        } else {
          alert("Hubo un error");
        }
      })
      .catch((err) => {
        //alert(`Ha ocurrido un error: ${err}`);
      });
  }, []);

  console.log(data);

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 style={titleStyle}>React Test App </h1>
        </Col>
        <Col xs={12}>
          {" "}
          <div>
            <Table striped bordered hover className="table table-bordered">
              <thead>
                <tr>
                  <th>file</th>
                  <th>text</th>
                  <th>number</th>
                  <th>hex</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.file}</td>
                    <td>{item.text}</td>
                    <td>{item.number}</td>
                    <td>{item.hex}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default File;
