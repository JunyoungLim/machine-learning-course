import React, { Component } from "react";
import { Grid, Row, Col, Jumbotron, Button } from "react-bootstrap";

import { bootstrapUtils } from "react-bootstrap/lib/utils";

class Main extends Component {
  render() {
    bootstrapUtils.addStyle(Button, "main");

    return (
        <div className="content">
            <Grid fluid>
            <Jumbotron style={{backgroundColor: "#f2f7ff"}}>
                <h1>INFO 1998</h1>
                <h3>Introduction to Machine Learning for Python, Fall 2018</h3>
                <br/>
                <Grid>
                    <Row className="show-grid">
                        <Col sm={6} lg={6}>
                            <p>
                                Course Manager: <a href="mailto:jl3248@cornell.edu">Jared Junyoung Lim</a><br/>
                                Location: Gates G01<br/>
                                Lecture: Wed 5:30pm - 6:30pm<br/>
                                Discussion: <a href="https://piazza.com/cornell/fall2018/info1998" target="_blank" rel="noopener noreferrer">Piazza</a><br/>
                                Grades: <a href="https://cmsx.cs.cornell.edu/" target="_blank" rel="noopener noreferrer">CMS</a>
                            </p>
                        </Col>
                        <Col sm={6} lg={6}>
                            <p>
                            Lecturers: <a href="mailto:arb379@cornell.edu">Abby Beeler</a>, <a href="mailto:ebc63@cornell.edu">Ethan Cohen</a><br/>
                            Office Hours:<br/>
                            <ul>
                                <li>
                                Wednesday: 8:00pm - 9:00pm, Gates G11
                                </li>
                                <li>
                                Thursday: 7:00pm - 8:00pm, Rhodes 402
                                </li>
                                <li>
                                Friday: 2:00pm - 3:00pm, Gates G15
                                </li>
                            </ul>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                    </Row>
                </Grid>
                <a href="https://goo.gl/forms/v5HPdYxL8vN1BLCq1" target="_blank" rel="noopener noreferrer"><Button bsStyle="main">Enroll in the Course</Button></a>
                <a href="https://piazza.com/cornell/fall2018/info1998" target="_blank" rel="noopener noreferrer"><Button bsStyle="main">Self-Enroll in the Piazza</Button></a>
            </Jumbotron>
            <div>
                <h2>Overview</h2>
                <p>
                INFO 1998 is a ten week, one credit, S/U only course. It runs from <b>September 11th</b> through <b>November 28th</b>, 2018.
                <br/><br/>
                There are two important dates where the registrar is concerned:
                <br/>
                <ul>
                    <li>
                    Last day to add:<b>October 3rd</b>, 2018
                    </li>
                    <li>
                    Last day to drop: <b>October 17th</b>, 2018
                    </li>
                </ul>
                <br/>
                The goal of this course is to provide you with a high-level exposure to a wide range of Data Science techniques and Machine Learning models. From the basics of getting your Jupyter environment setup, to manipulating and visualizing data, to building supervised and unsupervised models, this class aims to give you the base intuition and skillset to continue developing and working on ML projects. We hope you to exit the course with an understanding of how models and optimization techniques work, as well as have the confidence and tools to solve future problems (e.g. ones you did not encounter in this course) on your own.
                <br/><br/>
                The key to succeed in the course is to try out everything yourself. The lecture and assignments are designed with this in mind — we did our best to convey an experience in which you get a chance to work on every technique and model. The course material is designed assuming you have no prior experience in machine learning, but does assume that you have been exposed to solving Computer Science problems at an introductory level (in any flavor / language). Accordingly, we will go over the basics of Python to make sure we are all on the same page. You are expected to put in an appropriate amount of effort to complete the assignments and the project.
                <br/><br/>
                </p>
            </div>
            </Grid>
        </div>
    );
  }
}

export default Main;
