import React, { Component } from "react";
import { Grid } from "react-bootstrap";

class TableList extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <h2>Syllabus</h2>
          <hr />
          <h4 className="cds-paragraph-header">Lecture and section information</h4>
          <hr />
          <p>
            Here.
          </p>
          <h4 className="cds-paragraph-header">Staff and office hours</h4>
          <hr />
          <p>
            Here.
          </p>
          <h4 className="cds-paragraph-header">Catelog description</h4>
          <hr />
          <p>
            Here.
          </p>
          <h4 className="cds-paragraph-header">Course technologies</h4>
          <hr />
          <p>
            Here.
          </p>
          <h4 className="cds-paragraph-header">Class material</h4>
          <hr />
          <p>
            Here.
          </p>
          <h4 className="cds-paragraph-header">Course work</h4>
          <hr />
          <p>
            Here.
          </p>
          <h4 className="cds-paragraph-header">Course policies</h4>
          <hr />
          <p>
            Here.
          </p>
          
        </Grid>
      </div>
    );
  }
}

export default TableList;
