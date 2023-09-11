class GameboyCross extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({ mode : "open"});
    }

    static get styles(){
        return `
            :host{
                --size: 130px;
            }

            .container{
                width: var(--size);
                height: var(--size);
                background: #cbc5cd;
                background-image: conic-gradient(transparent 20%,#bdbac2 40%, transparent 60%, #dbd4de 80%, #ccc3cf 100%);
                border-radius: 50%;
            } 
             
        `
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
            <style>${GameboyCross.styles}</style></div>
            <div class="container"></div>
        `
    }
}

customElements.define("gameboy-cross", GameboyCross)