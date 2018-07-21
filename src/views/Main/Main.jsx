import React, { Component } from "react";
import { Grid, Row, Col, Jumbotron } from "react-bootstrap";

class Main extends Component {
  render() {
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
                                Location: Gates G01<br/>
                                Lecture: Wed 5:00pm - 6:00pm<br/>
                                Course material: GitHub<br/>
                                Discussion: <a href="https://piazza.com/" target="_blank" rel="noopener noreferrer">Piazza</a><br/>
                                Grades: <a href="https://piazza.com/" target="_blank" rel="noopener noreferrer">CMS</a>
                            </p>
                        </Col>
                        <Col sm={6} lg={6}>
                            <p>
                            Course Manager: <a href="mailto:jl3248@cornell.edu">Jared Junyoung Lim</a><br/>
                            Lecturers: <a href="mailto:arb379@cornell.edu">Abby Beeler</a>, <a href="mailto:ebc63@cornell.edu">Ethan Cohen</a><br/>
                            Office Hours:<br/>
                            <ul>
                                <li>
                                Thursday: 6:00pm - 7:00pm, Gates G11
                                </li>
                                <li>
                                Friday: 2:00pm - 3:00pm, Gates G19
                                </li>
                            </ul>
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </Jumbotron>
            <div>
                <h2>Overview</h2>
                <p>
                INFO 1998 is a ten week, one credit, S/U only course. It runs from [placeholder] through [placeholder], 2018.
                <br/><br/>
                There are two important dates where the registrar is concerned:
                <br/>
                <ul>
                    <li>
                    Last day to add: [placeholder], 2018
                    </li>
                    <li>
                    Last day to drop: [placeholder], 2018
                    </li>
                </ul>
                <br/>
                The goal of this course is to provide you with a high-level exposure to a wide range of Data Science techniques and Machine Learning models. From the basics of getting your Jupyter environment setup, to using your terminal, to building complex programs in a Unix environment, this class aims to give you the base toolset to continue developing in a Unix environment. That is, you should not expect to exit the course with a mastery of “everything there is to know about Unix.” Instead, you should expect to exit the course with an understanding of how to navigate and configure a Unix environment, as well as have the confidence and tools to solve future problems (e.g. ones you did not encounter in this course) on your own.
                <br/><br/>
                As with any course, regardless of the subject, you do not really learn something until you sit down and try it out yourself. The lecture and assignments are designed with this in mind — you should expect to learn the material by interacting with it directly. The course material is designed assuming you have no prior experience developing in a Unix environment, but does assume that you have been exposed to solving Computer Science problems at an introductory level (in any flavor / language). You are expected to put in an appropriate amount of effort to complete the assignments. Ultimately, what you put into the course is what you will get out of it.
                <br/><br/>
                </p>
            </div>
            </Grid>
        </div>
    );
  }
}

export default Main;
