import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

taskList: Array<string> = []

//Criando elementeRef

@ViewChild('newTask') //ViewChild vai procurar no html por #newTask
Task!: ElementRef

ngOnInit() {
  this.recuperandoLocalStorage()
}

//Método para adicionar a task
addTask(valor:string): void {
   this.taskList.push(valor) //adicionando o valor input no array
   this.Task.nativeElement.value = " "
   localStorage.setItem("localarray", JSON.stringify(this.taskList)) //adicionando o input no localstorage
}

//Método remover task e adicionar no localStorage
removeTask(x:number): void {
  this.taskList.splice(x , 1)
  localStorage.setItem("localarray", JSON.stringify(this.taskList))
}

//Método apagar array e adicionar no localStorage
clearAll(): void {
  this.taskList.length = 0
  localStorage.setItem("localarray", JSON.stringify(this.taskList))
}

recuperandoLocalStorage(): void {
  this.taskList = JSON.parse(localStorage.getItem('localarray') || '[]') // Get item recebe string ou valor nulo, pra ele aceitar || '[]'
}
}
