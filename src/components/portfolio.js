import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/portfolio.css';

class Portfolio extends Component {
  state = {}

  openNavi () {
    this.setState({animation:'open 0.8s linear 1 forwards'})
  }

  closeNavi () {
    this.setState({animation:'close 0.8s linear 1 forwards'})
  }

  render() {
    return(
      <div>
        <div id='navigation' style={{animation:`${this.state.animation}`}}>
          <i id='closeIcon' className='fa fa-close' onClick={this.closeNavi.bind(this)}></i>
          <ul>
            <li onClick={this.closeNavi.bind(this)}><a href='#about'>W.W.W. About JS</a></li>
            <li onClick={this.closeNavi.bind(this)}><a href='#projects'>Featured Projects</a></li>
            <li onClick={this.closeNavi.bind(this)}><a href='#contact'>Contact</a></li>
          </ul>
        </div>

        <span className='brand' title="Jian Song's Portfolio" onClick={this.openNavi.bind(this)}>JS</span>

        <div className='content about' id='about'>
          <div className='www'>
            <h1>Who<span>.</span></h1>
            <h2>Jian(Eric) Song. A Front-end Engineer and a Dreamer</h2>
          </div>
          <div className='www'>
            <h1>What<span>.</span></h1>
            <h2>Deliver Helpful and Joyful Digital Experience</h2>
            <div className='clear'></div>
          </div>
          <div className='www'>
            <h1>Where<span>.</span></h1>
            <h2>From China, based in NYC, and plan to travel the world</h2>
          </div>
          <h1>About</h1>
        </div>

        <div className='content projects' id='projects'>
          <h1>Featured Projects</h1>
          <div className='projects-container'>
            <div className='project' id='cointelligent'>
              <Link to='/projects/cointelligent'>
                <div className='caseIntro'>
                  <h2>Cointelligent</h2>
                  <div className='bar'></div>
                  <p>The most beautiful way to keep track of the crypto world</p>
                </div>
                <div className='caseCover'>
                  <img src='https://s3.amazonaws.com/portfolio-materials/cointelligent.png' alt='cointelligent'></img>
                </div>
              </Link>
            </div>
            <div className='project' id='memes'>
              <Link to='/projects/memes'>
                <div className='caseIntro'>
                  <h2>Memes Against Friends</h2>
                  <div className='bar'></div>
                  <p>The new and hilarious memes party game you play against your friends through iMessage</p>
                </div>
                <div className='caseCover'>
                  <img src='https://s3.amazonaws.com/portfolio-materials/memes.png' alt='memes'></img>
                </div>
              </Link>
            </div>
            <div className='project' id='nyc'>
              <Link to='/projects/nyc'>
                <div className='caseIntro'>
                  <h2>Welcome to NYC</h2>
                  <div className='bar'></div>
                  <p>A clear and useful introduction for Chinese student to adapt into NYC better and faster</p>
                </div>
                <div className='caseCover'>
                  <img src='https://s3.amazonaws.com/portfolio-materials/nyc.png' alt='nyc'></img>
                </div>
              </Link>
            </div>
            <div className='project' id='tbc'></div>
          </div>
          <div className='clear'></div>
        </div>

        <div className='content contact' id='contact'>
          <h1>More<span>.</span> <i className='fa fa-hand-o-right' aria-hidden='true'></i></h1>
          <div className='emailMe'>
            <h2>I'm Listening <span className='dots'>...</span></h2>
            <div className='bar'></div>
            <p>If you have any advice or proposal,
               or just wanna say hi, you can always reach me through&nbsp;
               <span>
                 <a href='mailto:js8612@nyu.edu'>Email </a>
                 <i className='fa fa-hand-o-left' aria-hidden='true'></i>
               </span>
            </p>
          </div>
          <div className='socialMedias'>
            <span>
              <a href='https://github.com/EricSong8612' target='_blank'><i className='fa fa-github' aria-hidden='true'></i></a>
              <br/>
              <a href='https://www.linkedin.com/in/jian-song-683376b7/' target='_blank'><i className='fa fa-linkedin-square' aria-hidden='true'></i></a>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;
