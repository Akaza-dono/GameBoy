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
              --height: 240px;
              --gameboy-stripe-colors: linear-gradient(
                transparent 10px,
                #7d1a4a 11px 12px,
                transparent 12px 16px,
                #35224e 16px 16px,
                transparent 18px
            );
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
                    0 -4px 1px #514c65,
                    0 0 2px 2px #9c99ac88 inset
                    0 -1px 2px 1px #0007 inset;
            }

            .top{
                position: relative;
                background: var(--gameboy-stripe-colors);
                height: 25px;
                margin: 0 15px; 
                top: 0;
            }

            .top span{
                padding: 0 8px;
                background: #767189;
                position: absolute;
                right: 20px;
                top: 8px;
            }

            .bottom{
                display: flex;
            }

            .battery{
                padding: 0 10px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                transform: translateY(-20px)
            }

            .battery .text{
                font-size: 8px;
            }
            
            .battery .led {
                width: 10px;
                height: 10px;
                background: #4b4748;
                border-radius: 50%;
                margin: 6px;
            }

            .battery .led.on{
                background: #e11e0a;
                box-shadow: 0 0 2px 1.5px #d87473;
            }

            .text{
                font-family: Arial, sans-serif;
                font-size: 10px;
                color: #eee;
                text-shadow: 0 0 2px #eee9;
            }

            .top .text{
                font-size: 9.5px;
            }

            gameboy-screen{
                transform: translate(2px, 2px)
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
            <div class="top">
                <span class="text">DOT MATRIX WITH STEREO</span>
            </div>
            <div class="bottom">
                <div class="battery">
                    <div class="led on"></div>
                    <div class="text">BATTERY</div>
                </div>
                <gameboy-screen></gameboy-screen>
            </div>
        </div>
        `
    }
}

customElements.define("gameboy-crystal", GameBoyCrystal)