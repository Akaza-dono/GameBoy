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
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
            } 
             
            .axis{
                --large: 85px;          
                --short: 25px;

                background: #060206;
                border-radius: 2px;
                box-shadow: 0 0 1px 4px #000;
            }
            
            .axis.x{
                width: var(--large);
                height: var(--short);
                position: absolute;
                border: 2px solid #363439;
                border-top: 1px solid #b7bec8;
            }

            .axis.y{
                width: var(--short);
                height: var(--large);
                position: absolute;
                border: 2px solid #363439;
                border-top: 3px solid #b7bec8;
            }
        `
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
            <style>${GameboyCross.styles}</style></div>
            <div class="container">
                <div class="x axis"></div>
                <div class="y axis"></div>
            </div>
        `
    }
}

customElements.define("gameboy-cross", GameboyCross)