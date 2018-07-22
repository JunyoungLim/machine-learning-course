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
          If you do not already have Python and Jupyter Notebook installed, you will need to configure conda environment.
          Think of Jupyter Notebook as a playground where we can write codes, instantly print out outputs,
          embed images and markdowns, and easily share across. The following guide will help you install and setup your
          environment properly.
          </p>
          <h3>Which version of Python do I need?</h3>
          <hr />
          <p>
          Both Python2 and Python3 work well with Jupyter Notebook and Machine Learning libraries, but it this course,
          we will use <b>Python3</b>.
          <ul>
          <li>
            If you are running Windows on your computer / tablet, [].
          </li>
          <li>
            If you are running Mac OSX, you should run 
          </li>
          <li>
          - **No**, "Bash for Windows" is not sufficient (yet).
          - **No**, Cygwin and MinGW are not sufficient (and never will be).
          - If you are running Mac OSX, the answer is **not necessarily**.  Mac OSX _is_ a
            Unix-based operating system.  Though I encourage you to configure one so you can
            play with Linux.
          - If you are running some form of Linux already, then the answer is **no**.
          - If you have a VM from another course and want to use that, go for it.  But my VMs have
            been tailored to try and give you a more full Linux experience ;)
          </li>
          </ul>
          </p>
        </Grid>
      </div>
    );
  }
}

export default TableList;
