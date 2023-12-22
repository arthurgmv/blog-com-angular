import { Component } from '@angular/core';
import {MenuBarComponent} from "../../components/menu-bar/menu-bar.component";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {dataFake} from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    MenuBarComponent,
    RouterLink
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  photoCover:string = "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/04/Edge-Logo-Blue-Background.jpg"
  contentTitle:string = "Meu Artigo"
  contentDescription:string = "Blabla"
  private Id:string | null = "0"

  constructor(private route:ActivatedRoute) {  }

  ngOnInit(){
    this.route.paramMap.subscribe( value =>
      this.Id = value.get("Id")
    )
    this.setValuesToComponent(this.Id)
  }

  setValuesToComponent(Id: string | null){
    const result = dataFake.filter(article => article.Id.toString() == Id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }


}
