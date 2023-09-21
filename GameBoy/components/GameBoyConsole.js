import './GameBoyTop.js'
import './GameBoyCrystal.js'
import './GameBoyCross.js'
import './GameBoyButton.js'


class GameboyConsole extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({ mode : "open"});
    }

    static get styles(){
        return `
            :host{
                --width: 360px;
                --height: 625px;
            }
            .container{
                height: var(--height);
                width: var(--width);
                background-color: #d7d2d8;
                background-image: linear-gradient(transparent 97.75%, #0004 98.5%, #0005 99%);
                border-radius: 12px 12px 75px 12px;
                box-shadow:
                    0 0 10px #0007,
                    2px 0 10px 3px #0008 inset;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                position: relative;
            }

            .screen-container{
                height: 325px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                padding: 0 25px;
                border-top: 1px solid #fff8;    
                border-radius: 2% 2% 0% 0% / 0.5% 0.5% 0% 0%;
            }

            .controls-container{
                height: 275px;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .brand{
                color: #302050;
                padding-top: 4px;
                text-shadow: 0 0 1px #30205055;
            }

            .brand .company{
                font-family: "Pretendo";
                font-size: 10px;
                letter-spacing: 0.8px;
            }

            .brand sub{
                font-family: "Lato";
                font-size: 15px;
                display: inline-block;
                transform: translateY(2px)
            }

            .brand .product{
                font-family": "Lato";
                font-size: 22px;
                font-style: italic;
            }

            .controls-container{
                height: 275px;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .controls{
                height: 140px;
                width: 100%;
                display: flex;
                justify-content: space-between;
                padding: 0 20px 0 18px;
                box-sizing: border-box;
            }

            .controls gameboy-cross{
                width: 130px;
                height: 130px;
            }

            .controls .buttons{
                width: 130px;
                height: 60px;
                background: linear-gradient(28DEG, #EFF2F0, #AE9FA6);
                box-shadow: 0 0 4PX 2PX #CCC;
                border-radius: 40px;
                transform: translateY(30px) rotate(-25deg);
                display: flex;
                justify-content: space-between;
                padding: 6px;
                box-sizing: border-box;
            }

            gameboy-speaker{
                height: 90px;
                position: absolute;
                bottom: 0;
                background: blue;
                width:130px;
                right: 0;
                display: none;
            }

            .option-buttons{
                height: 70px;
                width: 130px;
            }

            .bottom{
                position:absolute;
                bottom: 0;
            }
        `
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
            <style>${GameboyConsole.styles}</style>
            <div class="container">
                <gameboy-top></gameboy-top>
                <div class="screen-container">
                    <gameboy-crystal></gameboy-crystal>
                    <div class="brand">
                        <span class="company">Nintendo</span>
                        <span class="product">GAME BOY</span>
                        <sub>™</sub>
                    </div>
                </div>
                <div class="controls-container">
                    <div class="controls">
                        <gameboy-cross></gameboy-cross>
                        <div class="buttons">
                            <gameboy-button name="B"></gameboy-button>
                            <gameboy-button name="A"></gameboy-button>
                        </div>
                    </div>
                    <gameboy-speaker></gameboy-speaker>
                    <div class="option-buttons">
                        <gameboy-option-button name="SELECT"></gameboy-option-button>
                        <gameboy-option-button name="START"></gameboy-option-button>
                    </div>
                    <div class="bottom">
                        <div class="phones">PHONES</div>
                        <div class="slot"></div>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define("gameboy-console", GameboyConsole)