import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Alert } from "react-bootstrap";

class TableList extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <h2>Syllabus</h2>
          <hr />
          <h4 className="cds-paragraph-header">Lecture and section information</h4>
          <p>
            INFO 1998, Fall 2018<br/>
            Lecture time: Wed 5:00pm - 6:00pm<br/>
            Location location: Gates G01<br/>
          </p>
          <hr />
          <h4 className="cds-paragraph-header">Staff and office hours</h4>
          <p>
          <span style={{fontSize:"18px"}}>Lecturer: Abby Beeler</span>
          <li>Thursday: 6:00pm - 7:00pm, Gates G11</li>
          <br/>
          <span style={{fontSize:"18px"}}>Lecturer: Ethan Cohen</span>
          <li>Thursday: 6:00pm - 7:00pm, Gates G11</li>
          <br/>
          <Alert bsStyle="warning">
          <strong>Notice!</strong> Please don't e-mail any of the TAs directly, unless necessary.
          All questions / queries for help should be done in person during office hours, or on the course Piazza.
          If there is something urgent going on, we recommend emailing the course manager.
          </Alert>
          <span style={{fontSize:"18px"}}>TA: Ann Zhang</span>
          <li>Thursday: 6:00pm - 7:00pm, Gates G11</li>
          <br/>
          <span style={{fontSize:"18px"}}>TA: Dylan Tsai</span>
          <li>Thursday: 6:00pm - 7:00pm, Gates G11</li>
          <br/>
          <span style={{fontSize:"18px"}}>TA: Shubhom Bhattacharya</span>
          <li>Thursday: 6:00pm - 7:00pm, Gates G11</li>
          <br/>
          <span style={{fontSize:"18px"}}>TA: Tanmay Bansal</span>
          <li>Thursday: 6:00pm - 7:00pm, Gates G11</li>
          <br/>
          </p>
          <hr />
          <h4 className="cds-paragraph-header">Catelog description</h4>
          <p>
            When you finish this program, you will have the foundation and basic skills to contribute to any
            subteam in Cornell Data Science. This program introduces various machine learning algorithms,
            model optimization, visualization techniques, and data manipulation strategies, with applications
            in the Python programming language. The program is open to all Cornell students across all departments.
          </p>
          <hr />
          <h4 className="cds-paragraph-header">Prerequisites</h4>
          <p>
            One programming course or equivalent programming experience. Preferrably <b>CS 1110</b> as a pre/co-requisite.
            No previous knowledge of Machine Learning or expertise in any particular language is assumed.
          </p>
          <hr />
          <h4 className="cds-paragraph-header">Course technologies</h4>
          <p>
          <ul>
            <li>
            We will be working together on in-class assignments/exercises during lectures, so please bring a laptop (or tablet) to fully participate.
            </li>
            <li>
            You will need a conda environment and/or virtualenv setup with necessary Python libraries.
            </li>
            <li>
            Please refer to the <Link to="/started" activeClassName="active">Getting Started</Link> page for more information.
            </li>
          </ul>
          </p>
          <hr />
          <h4 className="cds-paragraph-header">Class material</h4>
          <p>
            Class material will be posted on our course website, including the assignments, lecture slides, notes, and demos.<br/>
            We will use CMS for assignment / project submissions and feedbacks.
          </p>
          <hr />
          <h4 className="cds-paragraph-header">Course work</h4>
          <h5><b>In-class assignments</b></h5>
          <p>
            There will be one in-class assignment per lecture, <b>10 total</b> throughout the semester. All assignments will be done individually.
            The assignment will be released at the beginning of the lecture (5pm EST on Wednesday), and will be due <b>5pm EST on Friday</b> through CMS.
            Each assignment is of reasonable length that you will be able to finish it by end of each lecture, but never force yourself to finish it quickly,
            and don't let it to disturb you from lecture!
          </p>
          <h5><b>Feedback and Grade Postings</b></h5>
          <p>
            We will be providing you with feedback on the Cornell University Course Management System (<a href="https://cmsx.cs.cornell.edu/">CMS</a>).
            We will grade your work as soon as reasonably possible, latest by Sunday midnight.
          </p>
          <h5><b>Grading</b></h5>
          <p>
            There are three components to grading:
            <ul>
              <li>
                <b>Attendance</b>: Out of 10 lectures, you should attend at least 7 to pass. Attendance will be accounted through in-class assignment submissions.
              </li>
              <li>
                <b>Assignments</b>: Out of 10 in-class assignments, you should submit and get a passing grade on at least 7. Each assignment will be graded based on completion with sufficient amount of effort.
              </li>
              <li>
                <b>Project</b>: There will be an open-ended final project near the end of the semester as part of CDS Hackathon. You will need to choose your own competition / research topic and form a group to work together.
                Project will be graded based on completion with sufficient amount of effort, and the top teams will receive prize.
              </li>
            </ul>
          </p>
          <hr />
          <h4 className="cds-paragraph-header">Course policies</h4>
          <h5><b>Academic Integrity</b></h5>
          <p>
          All Cornell students are expected to follow the Cornell University Code of Academic Integrity (<a href="http://cuinfo.cornell.edu/aic.cfm">http://cuinfo.cornell.edu/aic.cfm</a>).
          Students can consult with the course staffs and other students if they struggle, but all the submissions should be original.
          </p>
        </Grid>
      </div>
    );
  }
}

export default TableList;
