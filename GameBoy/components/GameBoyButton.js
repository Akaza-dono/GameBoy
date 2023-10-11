class GameBoyButton extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({ mode : "open"});
    }

    static get styles(){
        return `
            :host{
              --size: 43px;
            }

            .container{
                width: var(--size);
                height: var(--size);
                background-color: #E66E94;
                border-radius: 50%;
                background: radial-gradient(26px 25px at 25px 27px, #6f0119 75%, #a20d37 90%, #ef94b2);
                box-shadow: 1px -4px 0 -3px #7c4b5b inset, -3px 7px 5px -2px #1e0000, 1px -1px 0 2px #53182b;
            }

            .label{
                font-family: "Pretendo";
                font-size: 12px;
                letter-spacing: 0.2px;
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