import React, { Component } from "react";
import { Grid } from "react-bootstrap";

class Tutorial extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <h2>Tutorial</h2>
          <hr />
          <h4 className="cds-paragraph-header">Coming soon...</h4>
          <p>
          Online tutorials will be provided with videos and notes.
          </p>
        </Grid>
      </div>
    );
  }
}

export default Tutorial;
