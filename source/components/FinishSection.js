import { navigateTo } from '../js/navigation.js';
import { normalize, twinkle } from '../js/utils.js';

class FinishSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const style = new CSSStyleSheet();
    style.replaceSync(`
      :host {
        height: 100%;
        display: flex;
        flex-direction: column;
        place-items: center;
      }

      #banner {
        color: #fef08a;
        -webkit-text-stroke: 1px #1e293b;
        text-align: center;
        display: flex;
        flex-direction: column;
        place-content: center;
      }

      #banner h1 {
        font-size: 3rem;
        word-spacing: 10px;
      }

      #banner h2 {
        font-size: 2rem;
      }

      #banner {
        flex: 1;
      }

      #notice {
        flex: none;
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
      }

      @keyframes fade-in {
        0% {
          opacity: 0;
        }

        50% {
          opacity: 1;
        }

        100% {
          opacity: 0;
        }
      }

      .fade-in {
        animation: fade-in ease 3s;
        animation-iteration-count: infinite;
      }

      @media (min-width: 800px) {
        #banner h1 {
          font-size: 4.5rem;
        }

        #banner h2 {
          font-size: 3rem;
        }

        #notice {
          font-size: 2rem;
        }
      }
    `);
    this.shadowRoot.adoptedStyleSheets = [normalize, style];

    this.shadowRoot.innerHTML = ` 
        <div id="banner">
          <h2>May your Future Unfold in </h2>
          <h1>Extraordinary Ways.</h1>
          <h1>Farewell</h1>
        </div>
        <div id="notice" class="fade-in">Click Anywhere to Play Again...</div>
    `;

    const stars = document.createElement('div');
    stars.id = 'stars';

    twinkle(this.shadowRoot, stars);

    this.addEventListener('click', () => {
      const buttonSound = new Audio('./sounds/button-click.mp3');
      buttonSound.play();
      navigateTo('sort-or-choose');
    });
  }
}

export default FinishSection;
