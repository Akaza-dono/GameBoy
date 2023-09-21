class GameBoyButton extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({ mode : "open"});
    }

    static get styles(){
        return `
            :host{
              --size: 46px;
            }

            .container{
                width: var(--size);
                height: var(--size);
                background-color: #E66E94;
                border-radius: 50%;
                background-image: 
                    radial-gradient(circle 50px at 50% 50%, transparent 30%, #fffa),
                    radial-gradient(ellipse 40px 50px at 45% 95%, #71011B 80%, transparent 92%);
                box-shadow: -2px 3px 2px #000e,
                            0 2px 1px #732F3A inset;
            }

            .label{
                font-family: "Pretendo";
                font-size: 12px;
                letter-spacing: 0.5px;
                color: #302058;
                transform: translate(35%, 450%)
            }
        `
    }

    connectedCallback(){
        this.name = this.getAttribute('name')
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <style>${GameBoyButton.styles}</style>
        <div class="container">
            <div class="label">${this.name}</div>
        </div>
        `
    }
}

customElements.define("gameboy-button", GameBoyButton)