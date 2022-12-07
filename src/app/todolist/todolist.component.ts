import { Component, OnInit } from '@angular/core';


// Metadata del componente
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})

export class TodolistComponent implements OnInit {
  loading = false
  setLoading = (load:boolean)=> this.loading = load
  todo: [SingleTodo] = [{} as SingleTodo]
  async ngOnInit(): Promise<void> {
    this.setLoading(true)
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    let todos = await res.json()
    for (const single of todos) {
      let res = await fetch("https://jsonplaceholder.typicode.com/users/" + single.userId)
      let { name } = await res.json()
      single.user = name
    }
    console.log(todos)
    this.todo = todos.sort(() => Math.random() - 0.5)
    } catch (error) {
      console.log(error)
    } finally {
      this.setLoading(false)
    }
    
    //equivalente di componentDidMount
  }

  handleChange(id: number, event: Event) {
    let target = event.target as HTMLInputElement
    let found = this.todo.find((single) => single.id === id)!
    found.completed = target!.checked
    console.log(found.completed)
  }

}
interface SingleTodo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user: string
}