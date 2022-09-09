import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nombreUsuario: string = "";

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  onLogOut(): void {
  }

}
