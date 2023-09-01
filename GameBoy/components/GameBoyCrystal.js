import './GameBoyScreen.js'

class GameBoyCrystal extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({ mode : "open"});
    }

    static get styles(){
        return `
            :host{
              --width: 310px;
              --height: 250px;
            }

            .container{
                background-color: #737480;
                height: var(--height);
                width: var(--width);
                border-radius: 10px 10px 35px 10px;
                border: 1px solid #666;
                border-width: 0 1px 0 1px;
                box-shadow: 
                    0 0 2px #514c65,
                    0 -1px 1px #151110,
                    0 -2px 1px #a0939f,
                    0 -4px 1px #514c65;

                display: flex;
                justify-content: center;
                align-items: center;
            }

            gameboy-screen{
                transform: translate(0, 2px)
            } 
        `
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <style>${GameBoyCrystal.styles}</style>
        <div class="container">
            <div class="top"></div>
            <div class="bottom">
                <div class="battery">
                    <div class="led on"></div>
                    <div class="text">Battery</div>
                </div>
                <gameboy-screen></gameboy-screen>
            </div>
        </div>
        `
    }
}

customElements.define("gameboy-crystal", GameBoyCrystal)