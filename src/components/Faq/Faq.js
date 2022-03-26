import React from 'react';
import { Accordion, Table } from 'react-bootstrap';
import './Faq.css';

const Faq = () => {
  return (
    <div>
      <div className="container faq-container">
        <h4 className='pb-4'>FAQ</h4>
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
                   A Hook is a special function that allows to “hook into” React features. Such as, useState is a Hook that allows you to add React state to function components. useState has to variables. One is use to set or update the value. Another one is used to get the value. 
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