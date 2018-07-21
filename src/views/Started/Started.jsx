import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";

class TableList extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <h2>Getting Started</h2>
          <hr />
          <p>
          To work on the assignments and project, you will need to have a proper setup for development environment.
          If you do not already have Python3 and Jupyter Notebook installed, you will need to configure conda environment.
          Think of Jupyter Notebook as a playground where we can write codes, instantly print out outputs,
          embed images and markdowns, and easily share across. The following guide will help you install and setup your
          environment properly.
          </p>
        </Grid>
      </div>
    );
  }
}

export default TableList;
