class GameBoyScreen extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({ mode : "open"});
    }

    static get styles(){
        return `
            :host{
              --width: 210px;
              --height: 185px;
            }

            .container{
                background-color: #9ca04c;
                height: var(--height);
                width: var(--width);

                box-shadow: 
                    5px 5px 10px #0005 inset,
                    -2px -1px 10px #0005 inset,
                    0 0 4px 3px #aaa4;

                display: flex;
                justify-content: center;
                align-items: flex-start;
                overflow: hidden;

            }
        `
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <style>${GameBoyScreen.styles}</style>
        <div class="container"></div>
        `
    }
}

customElements.define("gameboy-screen", GameBoyScreen)