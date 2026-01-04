import { useState } from "react";

export default function TodoList() {
  const [todo, setTodo] = useState("");
  const [todosList, setTodosList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [toEdit, setToEdit] = useState("");
  return (
    <>
      <div className="text-white bg-sky-700 py-2 mb-3">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="outline-none px-2 py-1 bg-transparent mx-4"
          placeholder="enter todo task"
        />
        <input
          type="button"
          value="add"
          onClick={() => {
            if (!todo) return;
            setTodosList([...todosList, { id: Date.now(), text: todo }]);
            setTodo("");
          }}
          className="border px-3 hover:scale-110 outline-none transition duration-300"
        />
      </div>
      {todosList.length > 0 && (
        <ul className="bg-sky-700 my-4 text-white py-1">
          {todosList.map((i) => (
            <li key={i.id} className="py-2 border-b">
              {i.text}
              <div className="space-y-1">
                {editId === i.id && 
                  <div className="text-white bg-sky-700 py-2">
                    <input
                      type="text"
                      value={toEdit}
                      onChange={(e) => setToEdit(e.target.value)}
                      className="outline-none px-2 py-1 bg-transparent mx-4"
                      placeholder="edit your task" autoFocus
                    />
                    <input
                      type="button"
                      value="save"
                      className="border px-3 hover:scale-110 outline-none transition duration-300"
                      onClick={()=>{
                        if(!toEdit) return;
                        setTodosList(prev=>
                            prev.map(elem=>elem.id===editId?
                                {...elem,text:toEdit}
                                :elem
                            )
                        );
                          setEditId(null);
                          setToEdit("");
                      }}
                    />
                  </div>
                }
                <input
                  type="button"
                  value="edit"
                  onClick={() => {
                    setEditId(i.id);
                    setToEdit(i.text);
                  }}
                  className="border mx-5 px-3 hover:scale-110 outline-none transition duration-300"
                />
                <input
                  type="button"
                  value="delete"
                  onClick={() =>
                    setTodosList(prev=>prev.filter((item) => item.id !== i.id))
                  }
                  className="border mx-5 px-3 hover:scale-110 outline-none transition duration-300"
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
