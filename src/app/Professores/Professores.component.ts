import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Professores',
  templateUrl: './Professores.component.html',
  styleUrls: ['./Professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    professores = [
      {Nome : "Roberto de assis"},
      {Nome : "João"},
      {Nome : "Maria"},
      {Nome : "Lucas"},
      {Nome : "Fernando"},
      {Nome : "Jonata"},
    ]
}
