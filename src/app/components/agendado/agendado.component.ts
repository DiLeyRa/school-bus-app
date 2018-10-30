import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendado',
  templateUrl: './agendado.component.html',
  styleUrls: ['./agendado.component.css']
})
export class AgendadoComponent implements OnInit {

  constructor(
    public router: Router

  ) { }

  ngOnInit() {
  }

  onRutas() {
    this.router.navigate(['/mapeo']);
  }

}
