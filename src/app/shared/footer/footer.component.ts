import { Component } from "@angular/core";

@Component({
    selector:"app-footer",
    standalone:true,
    template:`
        <footer>
    <div class="block">
        <p>Artisty</p>
        <p>Dive into a world where imagination knows no bounds. Discover art that speaks, inspires, and transforms.</p> 
    </div>
    <div class="block tabs">
        <p>home</p>
        <p>gallery</p>
        <p>artists</p>
        <p>blog</p>
    </div>
    <div class="block">
        <p>Reach out to us</p>
        <ul class="contacts">
        <li>+233(0) 249 698 305</li>
        <li>artisty&#64;yopmail.com</li>
        <li class="social-links">
            <span><img class="socials" src="../assets/socials/facebook.svg" alt="facebook"></span>
            <span><img class="socials" src="../assets/socials/instagram.svg" alt="instagram"></span>
            <span><img class="socials" src="../assets/socials/twitter.svg" alt="twitter"></span>
            <span><img class="socials" src="../assets/socials/linkedin-in.svg" alt="linkedin"></span>
        </li>
        </ul>
    </div>
    <div class="block">
        <p>Support</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Copyright  &copy; 2022 All Rights Reserved.</p>
    </div>

        </footer>`,
    styles:`
    footer {
        padding:  30px 50px;
        display: flex;
        justify-content: space-between;
        color: var(--white);
        background-color: var(--golden_brown);
        /* font-size: 12px; */
    }

    footer .block:first-child {
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
        line-height: 20px;
        max-width: 30%;
    }

    footer .block:first-child p:first-child {
        font-size: 30px;
    }

    footer .block:first-child p:last-child {
        line-height: 25px;
    }

    footer .block *{
        margin-block: 10px;
    }

    .block.tabs {
        text-transform: capitalize;
    }
    
    .contacts {
        list-style-type: none;
        margin-left: 15px;
    }

    .contacts span {
        background-color: var(--golden_brown);
        width: 30px;
        height: 30px;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }

    .social-links {
        display: flex;
    }

    .socials {
        /* color: blue */
        margin: 0 auto;
        width: 15px;
        filter: invert(78%) sepia(19%) saturate(276%) hue-rotate(86deg)brightness(1000%) contrast(1000%);
    }
    `,
    imports:[]
})
export class FooterComponent {}