import fightingGame from '../images/projectsicon/fighting-game.png';
import guessTheNumberGame from '../images/projectsicon/guess-the-number-game.png';
import pigGame from '../images/projectsicon/pig-game.png';
import pinvent from '../images/projectsicon/pinvent.png';

const portfolioData = [
  {
    image: pigGame,
    link: 'https://friendly-pig-game.netlify.app/',
    title: 'Pig Game',
    summary:
      "First player reach to 100 points WINS! But be wary of rolling a 1...it's all about chance",
    tech: 'JavaScript | HTML | CSS',
  },
  {
    image: guessTheNumberGame,
    link: 'https://guessing-the-numbers-game.netlify.app/',
    title: 'Guess My Number Game',
    summary: 'Can you guess the mystery number between 1 through 20',
    tech: 'JavaScript | HTML | CSS',
  },
  {
    image: fightingGame,
    link: 'https://streetsmackdown.netlify.app/',
    title: 'Street Smackdown',
    summary: 'A mini fighting game between two rivals',
    tech: 'JavaScript | HTML | CSS',
  },
  {
    image: pinvent,
    link: 'https://pinvent-technologies.vercel.app/',
    title: 'Pinvent Technologies',
    summary:
      'Developed an app to helped keep track products in real-time, reducing errors and improving efficiency.',
    tech: 'JavaScript | ReactJS | Redux | MongoDB | NodeJS | ExpressJS | SASS | CSS',
  },
];

export default portfolioData;
