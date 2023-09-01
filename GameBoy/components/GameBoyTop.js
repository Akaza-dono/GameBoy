class GameBoytop extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({ mode : "open"});
    }

    static get styles(){
        return `
            :host{
                --height: 25px;
            }

            .container{
                display: flex;
                padding-bottom: 5px;
                margin-bottom: 1px;
                /*border-bottom: 2px solid #fffc;*/
                height: var(--height);
                overflow: hidden;
                border-radius: 12px 12px 0 0;
                box-shadow: 0px 14px 5px -10px #fff inset;
            }

            .container > div{
                border-radius: 0 0 2px 2px;
                border: 1px solid #0001;
                box-shadow: 1px 2px 2px #2f2725aa;
            }

            .corner{
                width: 25px;
            }

            .corner.left{
                margin-right: 5px;
            }

            .corner.right{
                margin-left: 5px;
            }

            .top{
                width: 100%
            }

            .top span{
                display: inline-block;
                font-family: Arial, sans-serif;
                font-size: 10px;
                color: #eee;
                text-shadow: 1px 2px 2px #0006;
                border-radius: 15px;
                border: 1px solid;
                padding: 1px 4px;
                transform: translate(5px,1px);
                box-shadow: 0px 1px 2px #0005 inset,
                            0px -1px 2px #fff5 inset;
                opacity: 0.9;
            }

          
        `
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
            <style>${GameBoytop.styles}</style>
            <div class="container">
                <div class="corner left"></div>
                <div class="top">
                    <span>◀ ON - OFF ▶</span>
                </div>
                <div class="corner right"></div>
            </div>
        `
    }
}

customElements.define("gameboy-top", GameBoytop)