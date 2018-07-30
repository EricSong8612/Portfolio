import React, { Component } from "react";
import { Link } from "react-router-dom";

import projects from "./projects.json";
import "../css/project.css";

class Project extends Component {
  state = { projects };

  componentDidMount() {
    window.scrollTo(0, 0);
    let { id } = this.props.match.params;
    let activeProject = this.state.projects[id];
    this.setState({ activeProject });
  }

  componentDidUpdate(preProps) {
    window.scrollTo(0, 0);
    if (preProps.match.params !== this.props.match.params) {
      let { id } = this.props.match.params;
      let activeProject = this.state.projects[id];
      this.setState({ activeProject });
    }
  }

  renderScreenShots() {
    let screenShots = this.state.activeProject.screenShots;
    return screenShots.map(screenShot => (
      <div className="screenShot" key={screenShot}>
        <img src={screenShot} alt="screenShot" />
      </div>
    ));
  }

  show(resource) {
    if (resource === "") {
      return "none";
    } else {
      return "inline-block";
    }
  }

  render() {
    if (!this.state.activeProject) return null;

    return (
      <div id="projectMain">
        <Link to="/">
          <span className="brand" title="Jian Song's Portfolio">
            JS
          </span>
        </Link>

        <div className="coverImg">
          <img
            src={this.state.activeProject.coverImg}
            alt={this.state.activeProject.name}
          />
        </div>

        <div className="projectIntro">
          <div className="introName">
            <h1>{this.state.activeProject.name}</h1>
            <div className="bar" />
          </div>
          <div className="introContent">
            <p>
              <span>{this.state.activeProject.name} </span>
              {this.state.activeProject.introPart1}
            </p>
            <p>{this.state.activeProject.introPart2}</p>

            {this.state.activeProject.link ? (
              <a href={this.state.activeProject.link.url} target="_blank">
                {this.state.activeProject.link.name}
              </a>
            ) : (
              <div className="bar" />
            )}

            <p className="role">
              My role: <span>{this.state.activeProject.role}</span>
            </p>
          </div>
          <div className="clear" />
        </div>

        {this.renderScreenShots()}

        <div className="projectNavi">
          <div
            className="projectPointer"
            style={{
              display: `${this.show(this.state.activeProject.previous)}`
            }}
          >
            <Link to={`/projects/${this.state.activeProject.previous}`}>
              <p>Previous</p>
            </Link>
          </div>
          <div
            className="projectPointer"
            style={{ display: `${this.show(this.state.activeProject.next)}` }}
          >
            <Link to={`/projects/${this.state.activeProject.next}`}>
              <p>Next</p>
            </Link>
          </div>
          <div className="clear" />
        </div>
        <div className="clear" />
      </div>
    );
  }
}

export default Project;
