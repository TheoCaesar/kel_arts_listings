import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kel_arts_listings';
  imgs = [
    {
      id: 0,
      path:"./../assets/artworks/artwork1.png",
      artist: "Lilla Hazlett",
      metadata: "2 pieces frame"
    },
    {
      id: 1,
      path:"./../assets/artworks/artwork2.png",
      artist: "Manuella Rahimi",
      metadata: "2 pieces frame"
    },
    {
      id: 2,
      path:"./../assets/artworks/artwork3.png",
      artist: "Mariann Saner",
      metadata: "2 pieces frame"
    },
    {
      id: 3,
      path:"./../assets/artworks/artwork4.png",
      artist: "Evette Ciesielski",
      metadata: "2 pieces frame"
    },
    {
      id: 4,
      path:"./../assets/artworks/artwork5.png",
      artist: "Renee Thao",
      metadata: "2 pieces frame"
    },
  ]

  artists = [
    {
      id:1,
      name: "Wilma Munsch",
      imgUrl: "./../assets/artist/artist1.png"
    },
    {
      id:2,
      name: "Myung Philippe",
      imgUrl: "./../assets/artist/artist2.png"
    },
    {
      id:3,
      name: "Rachal Eure",
      imgUrl: "./../assets/artist/artist3.png"
    },
    {
      id:4,
      name: "Lili Sharp",
      imgUrl: "./../assets/artist/artist4.png"
    },
    {
      id:5,
      name: "Kwame Azar",
      imgUrl: "./../assets/artist/artist.png"
    },
    {
      id:1,
      name: "Wilma Munsch",
      imgUrl: "./../assets/artworks/artwork1.png"
    },
  ]
}
