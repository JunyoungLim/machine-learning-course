import React, { Component } from "react";
import { Grid } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="https://cornelldata.science">CDS Home</a>
              </li>
              <li>
                <a href="https://github.com/CornellDataScience">CDS GitHub</a>
              </li>
              <li>
                <a href="https://junyounglim.github.io/machine-learning-course/">CDS Education</a>
              </li>
              <li>
                <a href="https://cis.cornell.edu/cornell-computing-information-science">Cornell CIS</a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <a href="https://JunyoungLim.github.io/"  target="_blank" rel="noopener noreferrer">Jared Junyoung Lim</a>, Cornell Data Science
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
