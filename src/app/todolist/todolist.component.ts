import { Component, OnInit } from '@angular/core';


// Metadata del componente
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.min.css']
})

export class TodolistComponent implements OnInit {
  loading = false
  setLoading = (load: boolean) => this.loading = load
  todo: [SingleTodo] = [{} as SingleTodo]
  async ngOnInit(): Promise<void> {
    try {
      this.setLoading(true)
      let res = await fetch("https://dummyjson.com/todos?limit=10")
      let { todos } = await res.json()
      for (const single of todos) {
        let res = await fetch("https://dummyjson.com/users/" + single.userId)
        let { firstName, lastName } = await res.json()
        single.user = `${firstName} ${lastName}`
      }
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

  }

}
interface SingleTodo {
  userId: number,
  id: number,
  todo: string,
  completed: boolean,
  user: string
}
