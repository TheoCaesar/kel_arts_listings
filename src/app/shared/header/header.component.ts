import { Component } from "@angular/core";

@Component({
    selector:"app-header",
    standalone:true,
    template:`
        <header>
            <div class="logo">
                artisty
            </div>
            <div class="nav">
                <ul>
                <li>home</li>
                <li>gallery</li>
                <li>artists</li>
                <li>login</li>
                <li>sign up</li>
                </ul>
            </div>
        </header>
    `,
    styles:`                
        header {
            padding:  20px 50px;
            display: flex;
            justify-content: space-between;
            text-transform: capitalize;
            background-color: var(--golden_brown);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .logo {
            font-size: 30px
        }

        .logo, .nav {
            align-self: center;
            color: var(--white);
        }

        .nav ul {
            display: inline-flex;
            list-style-type: none;
        }

        .nav ul li {
            margin-inline: 30px;
        }
    `,
})
export class HeaderComponent {}