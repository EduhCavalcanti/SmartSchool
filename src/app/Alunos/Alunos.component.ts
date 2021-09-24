import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Alunos',
  templateUrl: './Alunos.component.html',
  styleUrls: ['./Alunos.component.css']
})
export class AlunosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  alunos:string[] = ["Marta", "Gabriela", "Joana", "Miranda" , "Eduardo"];

}
