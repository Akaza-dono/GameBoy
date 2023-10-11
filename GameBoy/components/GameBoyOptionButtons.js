class GameBoyOptionButtons extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({ mode : "open"});
    }

    static get styles(){
        return `
            :host{
              --width: 50px;
              --height: 10px;
            }

            .container{
                background-image: linear-gradient(to top, #eff2f0, #ae9fa6);
                box-shadow: 
                    -2px 4px 1px -1px #0005 inset,
                    1px -2px 1px -1px inset;
                transform: rotate(-28deg);
                border-radius: 15px;
                padding: 1px 0;
            }

            .button{
                background: #9e9baf;
                background-image: linear-gradient(#C0BECA, #7F7584);
                border-radius: 10px;
                box-shadow: 
                    -2px -2px 5px #0004 inset,
                    2px 2px 5px #fff6 inset,
                    2px 2px 6px,
                    -1px 2px 3px #000d;
                width: var(--width);
                height: var(--height);
                margin: 6px 8px;
            }

            .label{
                font-family: "Pretendo";
                font-size: 11px;
                letter-spacing: 0.5px;
                color: #302058;
                transform: translate(8px) rotate(-28deg);
                text-align: center;
                margin-top: 2px;
            }
        `
    }

    connectedCallback(){
        this.namee = this.getAttribute('name');
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <style>${GameBoyOptionButtons.styles}</style>
        <div class="container">
            <div class="button"></div>
        </div>
        <div class="label">${this.namee}</div>
        `
        console.log(this.name)
    }
}

customElements.define("gameboy-option-button", GameBoyOptionButtons)