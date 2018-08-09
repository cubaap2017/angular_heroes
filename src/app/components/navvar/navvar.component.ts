import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navvar',
  templateUrl: './navvar.component.html',
})
export class NavvarComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() { }

  buscarHeroe(termino:string){
    // console.log(termino);
    this.router.navigate(['/buscar', termino]);
  }

}
