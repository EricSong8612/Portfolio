import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Menu from './menu';
import '../css/portfolio.css';

class Portfolio extends Component {
  render() {
    return(
      <div>
        <Menu />

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
            <div className='project' id='flaunt'>
              <Link to='/projects/flaunt'>
                <div className='caseIntro'>
                  <h2>Flaunt</h2>
                  <div className='bar'></div>
                  <p>Create beautiful customized product mockups with just a few clicks</p>
                </div>
                <div className='caseCover'>
                  <img src='https://s3.amazonaws.com/portfolio-materials/flaunt.png' alt='flaunt'></img>
                  {/* <img src='https://s3.amazonaws.com/flauntbucket/Screenshot-2018-1-12+http+flauntapp+herokuapp+com(1).png' alt='cointelligent'></img> */}
                </div>
              </Link>
            </div>
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
            <div className='project' id='mtc'>
              <div className='caseIntro'>
                <h1>More to come ...</h1>
              </div>
            </div>
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
                 <a href='mailto:jiansong.pro@gmail.com'>Email </a>
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
