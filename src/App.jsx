import { useRef, useState } from 'react'
import './App.css'
import Form from './components/Form'
import ToDoList from './components/ToDoList'
function App() {
  const newTask = useRef('');
  const [tasks, setTasks] = useState([])

  function setId(){
    const jumlahTasks = tasks.length;
    return jumlahTasks + 1;
  }
  function addTask(event) {
    event.preventDefault()
    if(newTask.current.value == '') {
      alert('tidak boleh kosong');
      return false
    }
    const data = {
      id: setId(),
      task: newTask.current.value,
      completed: false
    }

    newTask.current.value = ''

    setTasks([...tasks, data])
  }

  function setCompleted(id){
    let taskItem = []
    tasks.map((item,index) => {
      if(item.id == id){ 
        taskItem[index]={ ...item, completed: !item.completed }
      }else{
        taskItem[index] = item 
      }
    })
    setTasks(taskItem)
    
  }

  return (
    <>
      <Form addTask={addTask} newTask={newTask} />
      <ToDoList tasks={tasks} setCompleted={setCompleted} />
    </>
  )
}

export default App