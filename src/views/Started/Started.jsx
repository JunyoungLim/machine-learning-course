import React, { Component } from "react";
import { Grid } from "react-bootstrap";

class TableList extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <h2>Getting Started</h2>
          <hr />
          <p>
          To work on the assignments and project, you will need to have a proper setup for development environment.
          If you do not already have Python and Jupyter Notebook installed, you will need to configure conda environment.
          Think of Jupyter Notebook as a playground where we can write codes, instantly print out outputs,
          embed images and markdowns, and easily share across. The following guide will help you install and setup your
          environment properly.
          </p>
          <hr />
          <h4 className="cds-paragraph-header">Which version of Python do I need?</h4>
          <p>
          Both Python2 and Python3 work well with Jupyter Notebook and Machine Learning libraries, but it this course,
          we will use <b>Python3</b>.
          more guide here.
          </p>
          <hr />
          <h4 className="cds-paragraph-header">More Installation Guide coming soon...</h4>
          <p>
          We are currently updating our course program, and we are updating setup guide accordingly. The field will be updated soon.
          </p>
        </Grid>
      </div>
    );
  }
}

export default TableList;
