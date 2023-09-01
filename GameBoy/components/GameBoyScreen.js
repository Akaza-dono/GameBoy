class GameBoyScreen extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({ mode : "open"});
    }

    static get styles(){
        return `
            :host{
              --width: 220px;
              --height: 200px;
            }

            .container{
                background-color: #9ca04c;
                height: var(--height);
                width: var(--width);
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