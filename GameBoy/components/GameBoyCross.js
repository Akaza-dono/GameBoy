class GameboyCross extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({ mode : "open"});
    }

    static get styles(){
        return `
            :host{
                --size: 120px;
                --large: 85px;          
                --short: 24px;
                --dark-color: #060206;
            }

            .container{
                margin: 5px;
                width: var(--size);
                height: var(--size);
                background: #cbc5cd;
                background-image: 
                    radial-gradient(#0003 1%, transparent),
                    linear-gradient(50deg, #E1DEEA 10%, #D9D2D5 90%);
                border-radius: 50%;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
            } 
             
            .axis{
                background: var(--dark-color);
                border-radius: 2px;
                box-shadow: 0 0 1px 4px #000;
                display: flex;
                justify-content: space-between; 
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
                flex-direction: column;
            }

            .axis.y .group{
                transform:rotate(90deg);
                padding: 2px 1px;
            }

            .axis.x .group{
                padding: 2px 1px;
            }

            .axis::before,
            .axis::after{
                content: "";
                display: block;
                background: #eee;
                filter: drop-shadow(2px 5px 1px red)
                        drop-shadow(-2px -5px 4px blue);
                width: 6px; 
                height: 6px;
                clip-path: polygon(0 0, 50% 100%, 100% 0);
            }

            .axis.x::before,
            .axis.x::after {
                --x: 0;
                transform: translate(var(--x), 8px) rotate(var(--rotate));
            }

            .axis.x::before{ --x: -14px; --rotate: 90deg; }
            .axis.x::after{ --x: 14px; --rotate: -90deg }
            
            .axis.y::before,
            .axis.y::after {
                --y: 0;
                transform: translate(8px,var(--y)) rotate(var(--rotate));
            }

            .axis.y::before{ --y: -14px; --rotate: 180deg; }
            .axis.y::after{ --y: 14px; --rotate: 0deg }

            .axis .group{
                width: calc(var(--short) + 0px);
                height: calc(var(--short) - 4px);
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 0 3px;
            }

            .axis .group .band{
                width: 10px;
                height: 100%;
                background: #181818;
                border-radius: 5px;
                margin: 0 2px;
            }


            .center{
                width: calc(var(--short) + 5px);
                height: calc(var(--short) + 5px);
                background: var(--dark-color);
                position:absolute;
            }

            .center .gap{
                width:80%;
                height: 80%;
                margin: auto;
                margin-top: 10%;
                background: conic-gradient(
                    #DDE8F7 0 2%, 
                    transparent 10% 35%, 
                    #DDE8F7 50%, 
                    transparent 65% 90%,
                    #DDE8F777 99%);
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
            <div class="container">
                <div class="x axis">
                    <div class="group">
                        <div class="band"></div>
                        <div class="band"></div>
                        <div class="band"></div>
                    </div>
                    <div class="group">
                        <div class="band"></div>
                        <div class="band"></div>
                        <div class="band"></div>
                    </div>
                </div>
                <div class="y axis">
                    <div class="group">
                        <div class="band"></div>
                        <div class="band"></div>
                        <div class="band"></div>
                    </div>
                    <div class="group">
                        <div class="band"></div>
                        <div class="band"></div>
                        <div class="band"></div>
                    </div>
                </div>
                <div class="center">
                    <div class="gap"></div>
                </div>
            </div>
        `
    }
}

customElements.define("gameboy-cross", GameboyCross)