import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import projects from './projects.json';
import '../css/project.css';

class Project extends Component {
  state = { projects }

  componentWillMount() {
    window.scrollTo(0,0);
    let { id } = this.props.match.params;
    let activeProject = this.state.projects[id];
    this.setState({ activeProject })
  }

  componentWillReceiveProps(nextProps) {
    window.scrollTo(0,0);
    let { id } = nextProps.match.params;
    let activeProject = this.state.projects[id];
    this.setState({ activeProject })
  }

  renderScreenShots() {
    let screenShots = this.state.activeProject.screenShots;
    return(
      screenShots.map(screenShot =>
        <div className='screenShot' key={screenShot}>
          <img src={screenShot} alt='screenShot'></img>
        </div>
      )
    )
  }

  show(resource) {
    if (resource === '') {
      return 'hidden'
    } else {
      return 'visible'
    }
  }

  render() {
    return(
      <div id='projectMain'>
        <Link to='/'><span className='brand' title="Jian Song's Portfolio">JS</span></Link>

        <div className='coverImg'>
          <img src={this.state.activeProject.coverImg} alt={this.state.activeProject.name}></img>
        </div>

        <div className='projectIntro'>
          <div className='introName'>
            <h1>{this.state.activeProject.name}</h1>
            <div className='bar'></div>
          </div>
          <div className='introContent'>
            <p><span>{this.state.activeProject.name} </span>{this.state.activeProject.introPart1}</p>
            <p>{this.state.activeProject.introPart2}</p>
            <a href={this.state.activeProject.link.url}>{this.state.activeProject.link.name}</a>
            <a href={this.state.activeProject.other.url}>{this.state.activeProject.other.name}</a>
            <p className='role'>My role: <span>{this.state.activeProject.role}</span></p>
          </div>
          <div className='clear'></div>
        </div>

        {this.renderScreenShots()}

        <div className='projectNavi'>
          <div className='projectPointer'>
            <Link to={`/projects/${this.state.activeProject.previous}`} style={{visibility:`${this.show(this.state.activeProject.previous)}`}}>
              <p>Previous</p>
            </Link>
          </div>
          <div className='projectPointer'>
            <Link to={`/projects/${this.state.activeProject.next}`} style={{visibility:`${this.show(this.state.activeProject.next)}`}}>
              <p>Next</p>
            </Link>
          </div>
          <div className='clear'></div>
        </div>
        <div className='clear'></div>
      </div>
    )
  }
}

export default Project;
