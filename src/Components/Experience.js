import React, { Component } from 'react';

export default class Experience extends Component {
  constructor(props) {
    super(props);

    this.experience = props.experience;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
        <div className="w-100">
          <h2 className="mb-5">Experience and Projects</h2>
          { 
            this.experience.map((exp, index) => (
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">{exp.project}</h3>
                  <div className="subheading mb-3">{exp.technology}</div>
                  <p>{exp.description}</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">{exp.fromDate} - {exp.toDate}</span>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}
