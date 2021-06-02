import React, { useState } from 'react';

function TodoList() { 

  const [todoList, setTodoList] = useState([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  function handleOnSubmit(event) {
    event.preventDefault()
    setTodoList([...todoList, {title, description}])
  }

  function handleRemove(todoId) {
    setTodoList(todoList.filter((_, i) => i !== todoId))
  }

  return (
    <>
      <iframe src={"https://ghostbin.co/paste/nuehu32"} title="code"></iframe>
      <div className="container" style={{ marginTop: "15px" }}>
        <h1>CADASTRAR TAREFA</h1>
        <form onSubmit={handleOnSubmit}>
          <div class="form-group">
            <input type="text" name="name" className="form-control" placeholder="Tarefa:" value={title} onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div class="form-group">
            <input type="text" name="job" className="form-control" placeholder="Descrição:" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary">cadastrar</button>
        </form>
        {
          todoList.length > 0 &&
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Tarefa</th>
                <th>Descrição</th>
                <th>Remover</th>
              </tr>
            </thead>
            <tbody>
              {
                todoList.map((todo, i) => (
                    <tr key={i}>
                      <td>{todo.title}</td>
                      <td>{todo.description}</td>
                      <td>
                        <button type="button" className="btn btn-danger" onClick={() => handleRemove(i)}>deletar</button>
                      </td>
                    </tr>
                  )
                ) 
              }
            </tbody>
          </table>
        }
      </div>
    </>
  )

}

export default TodoList;
