import React from 'react';
import { Accordion, Table } from 'react-bootstrap';
import './Faq.css';

const Faq = () => {
  return (
    <div>
      <div className="container faq-container">
        <div className="row">
          <div className="col-12">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>#1. How react works?</Accordion.Header>
                <Accordion.Body>
                  React is used for building interactive user interface. As DOM is expensive that is why react creats virtual DOM. The virtual DOM keeps track what is changed. If anything changes in the webpage it compare with the previous version using diff algorithm. Then it will show the updated webpage without reloading the website. This is how react works. 
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>#2. Difference between props vs state.</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Props</th>
                        <th>State</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Props is read-only</td>
                        <td>State is both read and write</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>It is Immutable</td>
                        <td>It is Mutable</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>#3. How useState works?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;