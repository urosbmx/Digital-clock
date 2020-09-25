class MyNavigation extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }


    connectedCallback(){
        this.render();
    }

    render(){
        // Ovde samo ubacis CSS koji je vezan za komponentu
        this.shadow.innerHTML=`
        <link rel="stylesheet" href="stil.css">
        <nav>
        <div class="navigation">
            <ul>
                <li class="one"><a href="index.html">Corect time</a></li>
                <li class="two"><a href="timer.html">Timer</a></li>
                <li class="three"><a href="world-clock.html">World clock</a></li>
                <i id="MyElement"class="far fa-moon"></i>
            </ul>
         </div>
        `;
    }
}

customElements.define('navigation-menu', MyNavigation);