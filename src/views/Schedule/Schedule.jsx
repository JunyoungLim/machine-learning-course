import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray, thArrayPrev } from "variables/Variables.jsx";

class TableList extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <h2>Schedule</h2>
          <hr />
          <Row>
            <Col md={12}>
             <h5>This schedule should be considered tentative, at least until it actually takes place! Consult the course staffs in advance if needed.</h5>
              <Card
                plain
                title="Spring 2018 Schedule"
                category=""
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table responsive>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>02/07/18</td>
                        <td>-</td>
                        <td>-</td>
                        <td><a href="http://nbviewer.jupyter.org/github/JunyoungLim/JunyoungLim.github.io/blob/master/notes/LECTURE%200%20-%20INTRO.ipynb">LECTURE 0: SETUP</a></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>02/14/18</td>
                        <td><b>Lecture 1: Introduction and Data Manipulation</b></td>
                        <td><a href="slides/LECTURE 1.pdf"><img src="slides/images/LECTURE 1.png" class="image1" alt="LECTURE 1" /></a></td>
                        <td><a href="http://nbviewer.jupyter.org/github/JunyoungLim/JunyoungLim.github.io/blob/master/notes/LECTURE%201%20-%20NUMPY.ipynb">LECTURE 1: NUMPY</a><br/>
                            <a href="http://nbviewer.jupyter.org/github/JunyoungLim/JunyoungLim.github.io/blob/master/notes/LECTURE%201%20-%20PANDAS.ipynb">LECTURE 1: PANDAS</a><br/></td>
                        <td><a href="https://goo.gl/forms/9QzxjSNYqRtj41rm1">Take Home Quiz</a></td>
                      </tr>
                      <tr>
                        <td>02/21/18</td>
                        <td><b>Lecture 2: Manipulation Techniques and Visualization</b></td>
                        <td><a href="slides/LECTURE 2.pdf"><img src="slides/images/LECTURE 2.png" class="image1" alt="LECTURE 2" /></a></td>
                        <td><a href="http://nbviewer.jupyter.org/github/JunyoungLim/JunyoungLim.github.io/blob/master/notes/LECTURE%202%20-%20DEMO.ipynb">LECTURE 2: DEMO</a><br/>
                            <a href="http://nbviewer.jupyter.org/github/JunyoungLim/JunyoungLim.github.io/blob/master/notes/LECTURE%202%20-%20VISUAL.ipynb">LECTURE 2: VISUAL</a><br/>
                            <a href="https://drive.google.com/file/d/1eCJO3K5gg09SR75jbHvIwUKDXQ4L3my9/view?usp=sharing">LECTURE 2: DATASET</a></td>
                        <td><a href="assignments/Project A.pdf">Project A</a></td>
                      </tr>
                      <tr>
                        <td>02/28/18</td>
                        <td><b>Lecture 3: Introduction to Machine Learning</b></td>
                        <td><a href="slides/LECTURE 3.pdf"><img src="slides/images/LECTURE 3.png" class="image1" alt="LECTURE 3" /></a></td>
                        <td><a href="http://nbviewer.jupyter.org/github/JunyoungLim/JunyoungLim.github.io/blob/master/notes/LECTURE%203%20-%20SUPER.ipynb">LECTURE 3: SUPER</a></td>
                        <td><a href="assignments/Project A.pdf">Project A</a></td>
                      </tr>
                      <tr>
                        <td>03/07/18</td>
                        <td><b>Lecture 4: Introduction to Classification</b></td>
                        <td><a href="slides/LECTURE 4.pdf"><img src="slides/images/LECTURE 4.png" class="image1" alt="LECTURE 4" /></a></td>
                        <td><a href="http://nbviewer.jupyter.org/github/JunyoungLim/JunyoungLim.github.io/blob/master/notes/LECTURE%204%20-%20CLASS.ipynb">LECTURE 4: CLASS</a><br/>
                            <a href="http://nbviewer.jupyter.org/github/JunyoungLim/JunyoungLim.github.io/blob/master/notes/LECTURE%204%20-%20DEMO.ipynb">LECTURE 4: DEMO</a><br/>
                            <a href="https://drive.google.com/file/d/1TOeFfJya4tMEcjXNe2ECAvRsuhse9vBL/view?usp=sharing">LECTURE 4: DATASET</a></td>
                        <td><a href="assignments/Project B.pdf">Project B</a></td>
                      </tr>
                      <tr>
                        <td>03/14/18</td>
                        <td><b>Lecture 5: SVM</b></td>
                        <td><a href="slides/LECTURE 5.pdf"><img src="slides/images/LECTURE 5.png" class="image1" alt="LECTURE 5" /></a></td>
                        <td><a href="http://nbviewer.jupyter.org/github/JunyoungLim/JunyoungLim.github.io/blob/master/notes/LECTURE%205%20-%20SVM.ipynb">LECTURE 5: SVM</a><br/>
                            <a href="http://nbviewer.jupyter.org/github/JunyoungLim/JunyoungLim.github.io/blob/master/notes/LECTURE%205%20-%20DEMO.ipynb">LECTURE 5: DEMO</a></td>
                        <td><a href="assignments/Project B.pdf">Project B</a></td>
                      </tr>
                      <tr>
                        <td>03/21/18</td>
                        <td><b>Lecture 6: Logistic Regression and Decision Trees</b></td>
                        <td><a href="slides/LECTURE 6.pdf"><img src="slides/images/LECTURE 6.png" class="image1" alt="LECTURE 6" /></a></td>
                        <td><a href="http://nbviewer.jupyter.org/github/JunyoungLim/JunyoungLim.github.io/blob/master/notes/LECTURE%206%20-%20LOGIT.ipynb">LECTURE 6: LOGIT</a><br/>
                            <a href="http://nbviewer.jupyter.org/github/JunyoungLim/JunyoungLim.github.io/blob/master/notes/LECTURE%206%20-%20DEMO.ipynb">LECTURE 6: DEMO</a></td>
                        <td><a href="assignments/Project C.pdf">Project C</a></td>
                      </tr>
                      <tr>
                        <td>03/28/18</td>
                        <td><b>Lecture 7: Unsupervised Learning</b></td>
                        <td><a href="slides/LECTURE 7.pdf"><img src="slides/images/LECTURE 7.png" class="image1" alt="LECTURE 7" /></a></td>
                        <td><a href="http://nbviewer.jupyter.org/github/JunyoungLim/JunyoungLim.github.io/blob/master/notes/LECTURE%207%20-%20UNSUP.ipynb">LECTURE 7: UNSUP</a><br/>
                            <a href="http://nbviewer.jupyter.org/github/JunyoungLim/JunyoungLim.github.io/blob/master/notes/LECTURE%207%20-%20DEMO.ipynb">LECTURE 7: DEMO</a></td>
                        <td><a href="assignments/Project C.pdf">Project C</a></td>
                      </tr>
                      <tr>
                        <td>04/11/18</td>
                        <td><b>Lecture 8: Model Optimization</b></td>
                        <td><a href="slides/LECTURE 8.pdf"><img src="slides/images/LECTURE 8.png" class="image1" alt="LECTURE 8" /></a></td>
                        <td><a href="http://nbviewer.jupyter.org/github/JunyoungLim/JunyoungLim.github.io/blob/master/notes/LECTURE%208%20-%20MODEL.ipynb">LECTURE 8: MODEL</a></td>
                        <td><a href="assignments/Final Project.pdf">Final Project</a></td>
                      </tr>
                      <tr>
                        <td>04/18/18</td>
                        <td><b>Lecture 9: Cross Validation & Ensemble Learning</b></td>
                        <td><a href="slides/LECTURE 9.pdf"><img src="slides/images/LECTURE 9.png" class="image1" alt="LECTURE 9" /></a></td>
                        <td><a href="http://nbviewer.jupyter.org/github/JunyoungLim/JunyoungLim.github.io/blob/master/notes/LECTURE%209%20-%20ENSEM.ipynb">LECTURE 9: ENSEM</a><br/>
                            <a href="http://nbviewer.jupyter.org/github/JunyoungLim/JunyoungLim.github.io/blob/master/notes/LECTURE%209%20-%20BAG.ipynb">LECTURE 9: BAG</a></td>
                        <td><a href="assignments/Final Project.pdf">Final Project</a></td>
                      </tr>
                    </tbody>
                  </Table>
                }
              />
              <Card
                plain
                title="R for Data Science Archive"
                category=""
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table responsive>
                    <thead>
                      <tr>
                        {thArrayPrev.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>02/15/17</td>
                      <td><a href="slides/SP17/Lecture 1 - Introduction to R.pdf">Lecture 1: Introduction to R</a></td>
                      <td><a href="https://drive.google.com/file/d/0B1O0cH8Ce3vfeUpvRGlCZG1Yb2M/view?usp=sharing">Lecture 1: Introduction to R</a></td>
                      <td><a href="http://nbviewer.jupyter.org/urls/gitcdn.link/repo/cdstrainingprogram/cdstrainingprogram.github.io/master/notes/Lecture1.ipynb">Lecture 1: Introduction to R</a></td>
                      <td><a href="assignments/Assignment 1.ipynb">Assignment 1</a></td>
                    </tr>
                    <tr>
                      <td>02/22/17</td>
                      <td><a href="slides/SP17/Lecture 2 - Data Transformation.pdf">Lecture 2: Data Manipulation</a></td>
                      <td><a href="https://drive.google.com/drive/folders/0B1O0cH8Ce3vfaTVmc1VhYnVUUEE?usp=sharing">Lecture 2: Data Manipulation</a></td>
                      <td><a href="http://nbviewer.jupyter.org/github/cdstrainingprogram/cdstrainingprogram.github.io/blob/master/notes/Lecture2.ipynb">Lecture 2: Data Manipulation</a></td>
                      <td><a href="assignments/Assignment 2.ipynb">Assignment 2</a></td>
                    </tr>
                    <tr>
                      <td>03/01/17</td>
                      <td><a href="slides/SP17/Lecture 3 - Data Visualization.pdf">Lecture 3: Data Visualization</a></td>
                      <td><a href="https://drive.google.com/file/d/0B1O0cH8Ce3vfN29kRUFZdl9ZbGM/view?usp=sharing">Lecture 3: Data Visualization</a></td>
                      <td><a href="http://nbviewer.jupyter.org/github/cdstrainingprogram/cdstrainingprogram.github.io/blob/master/notes/Lecture3.ipynb">Lecture 3: Data Visualization</a></td>
                      <td><a href="assignments/Assignment 3.ipynb">Assignment 3</a></td>
                    </tr>
                    <tr>
                      <td>03/08/17</td>
                      <td><a href="slides/SP17/Lecture 4 - Linear Regression.pdf">Lecture 4: Linear Regression</a></td>
                      <td><a href="https://drive.google.com/file/d/0B1O0cH8Ce3vfZHg4V3FNeUc4N2c/view?usp=sharing">Lecture 4: Linear Regression</a></td>
                      <td><a href="http://nbviewer.jupyter.org/urls/gitcdn.xyz/repo/cdstrainingprogram/cdstrainingprogram.github.io/master/notes/Lecture4.ipynb">Lecture 4: Linear Regression</a></td>
                      <td><a href="assignments/Project1.pdf">Project 1</a></td>
                    </tr>
                    <tr>
                      <td>03/22/17</td>
                      <td><a href="slides/SP17/Lecture 5 - Logistic Regression and Decision Trees.pdf">Lecture 5: Logistic Regression</a></td>
                      <td><a href="https://drive.google.com/file/d/0B1O0cH8Ce3vfN0NCMHJZZXFBRDQ/view?usp=sharing">Lecture 5: Logistic Regression</a></td>
                      <td><a href="http://nbviewer.jupyter.org/github/cdstrainingprogram/cdstrainingprogram.github.io/blob/master/notes/Lecture5.ipynb">Lecture 5: Logistic Regression</a></td>
                      <td><a href="assignments/Project1.pdf">Project 1</a></td>
                    </tr>
                    <tr>
                      <td>03/29/17</td>
                      <td><a href="slides/SP17/Lecture 6 - Classification.pdf">Lecture 6: Classification</a></td>
                      <td><a href="https://drive.google.com/file/d/0B1O0cH8Ce3vfYWdfRDZTOU00NXc/view?usp=sharing">Lecture 6: Classification</a></td>
                      <td><a href="http://nbviewer.jupyter.org/github/cdstrainingprogram/cdstrainingprogram.github.io/blob/master/notes/Lecture6.ipynb">Lecture 6: Classification</a></td>
                      <td><a href="assignments/Project1.pdf">Project 1</a></td>
                    </tr>
                    <tr>
                      <td>04/12/17</td>
                      <td><a href="slides/SP17/Lecture 7 - Unsupervised Learning.pdf">Lecture 7: Unsupervised Learning</a></td>
                      <td><a href="https://drive.google.com/file/d/0B1O0cH8Ce3vfUWFQTmhlLTZ0Qnc/view?usp=sharing">Lecture 7: Unsupervised Learning</a></td>
                      <td><a href="http://nbviewer.jupyter.org/github/cdstrainingprogram/cdstrainingprogram.github.io/blob/master/notes/Lecture7.ipynb">Lecture 7: Unsupervised Learning</a></td>
                      <td><a href="assignments/Project1.pdf">Project 1</a></td>
                    </tr>
                    <tr>
                      <td>04/19/17</td>
                      <td><a href="slides/SP17/Lecture 8 - Model Selection and Optimization.pdf">Lecture 8: Model Selection and Optimization</a></td>
                      <td><a href="https://drive.google.com/file/d/0B1O0cH8Ce3vfVTJFVmp2Z0NKZXM/view?usp=sharing">Lecture 8: Model Selection and Optimization</a></td>
                      <td><a href="http://nbviewer.jupyter.org/github/cdstrainingprogram/cdstrainingprogram.github.io/blob/master/notes/Lecture8.ipynb">Lecture 8: Model Selection and Optimization</a></td>
                      <td><a href="assignments/Assignment 4.ipynb">Assignment 4</a></td>
                    </tr> <tr>
                      <td>04/26/17</td>
                      <td><a href="slides/SP17/Lecture 9 - Meta-Learning.pdf">Lecture 9: Meta-Learning</a></td>
                      <td><a href="https://drive.google.com/file/d/0B1O0cH8Ce3vfVEVYOW10QndKR28/view?usp=sharing">Lecture 9: Meta-Learning</a></td>
                      <td><a href="http://nbviewer.jupyter.org/github/cdstrainingprogram/cdstrainingprogram.github.io/blob/master/notes/Lecture9.ipynb">Lecture 9: Meta-Learning</a></td>
                      <td><a href="assignments/Project2.pdf">Project 2</a></td>
                    </tr>
                    <tr>
                      <td>05/03/17</td>
                      <td><a href="slides/SP17/Lecture 10 - Text Mining and Graphs.pdf">Lecture 10: Text Analysis</a></td>
                      <td><a href="https://drive.google.com/file/d/0B1O0cH8Ce3vfUUxjT2pRdkZmUFE/view?usp=sharing">Lecture 10: Text Analysis</a></td>
                      <td><a href="notes/lec10.r">Lecture 10: Text Analysis</a></td>
                      <td><a href="assignments/Project2.pdf">Project 2</a></td>
                    </tr>
                    <tr>
                      <td>05/10/17</td>
                      <td><a href="slides/SP17/Lecture 11_ Big Data Tools.pdf">Lecture 11: Big Data Tools</a></td>
                      <td><a href="https://drive.google.com/file/d/0B1O0cH8Ce3vfT1BqTVRORGlxUFU/view?usp=sharing">Lecture 11: Big Data Tools</a></td>
                      <td><a href="#">No notes!</a></td>
                      <td><a href="assignments/Project2.pdf">Project 2</a></td>
                    </tr>
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default TableList;