import { useState } from "react";

export default function TrackerExp() {
  const [list, setList] = useState([]);
  const [data, setData] = useState({
    name: "",
    price: 0,
    type: null,
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list,{...data,price:Number(data.price)}]);
    setData({
      name: "",
      price: 0,
      type: null,
    });
  };
  const Income=list.filter(i=>i.type=="income").map(i=>i.price).reduce((ac,u)=>ac+u,0);
  const Expense=list.filter(i=>i.type=="expense").map(i=>i.price).reduce((ac,u)=>ac+u,0);
  const Balance=Income-Expense;
  return (
    <>
      <form onSubmit={handleSubmit} className="grid grid-col-1 bg-gray-900 text-white max-w-sm mx-auto py-3 pb-7 gap-4">
        <div>
          <label htmlFor="name" className="font-medium">name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={data.name}
            onChange={handleChange}
            className="outline-none px-2 py-1 mx-4 text-center border-b border-white rounded"
          />
        </div>
        <div>
          <label htmlFor="price" className="font-medium">price: </label>
          <input
            type="number"
            id="price"
            name="price"
            value={data.price}
            onChange={handleChange}
            className="outline-none px-2 py-1 mx-4 text-center border-b border-white rounded"
          />
        </div>
        <div>
          <label htmlFor="type" className="font-medium">type: </label>
          <select name="type" id="type" onChange={handleChange} className="outline-none px-2 py-1 bg-black rounded mx-4">
            <option value="">select a type</option>
            <option value="income">income</option>
            <option value="expense">expense</option>
          </select>
        </div>
        <div>
        <input type="submit" value="Add" className="outline-none px-2 py-1 bg-green-500 mx-auto px-6 transition duration-300 hover:bg-cyan-700"/>
        </div>
      </form>
      {list.length>0 && (
        <table className="border mt-2 bg-gray-800 text-white">
          <thead>
            <tr className="border">
              <th className="border py-1">name</th>
              <th className="border py-1">price</th>
              <th className="border py-1">type</th>
              <th className="border py-1">action</th>
            </tr>
          </thead>
          <tbody className="border">
            {list.map((item, index) => (
              <tr key={index}>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.price}</td>
                <td className="border p-2">{item.type}</td>
                <td className="border p-2">
                    <input type="button" value="Delete" className="outline-none px-2 py-1 bg-cyan-500 mx-auto px-6 transition duration-300 hover:bg-red-700"
                    onClick={()=>{setList(list.filter((_,id)=>id!==index))}}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="bg-gray-900 text-white mt-3">
        <label >Balance : {Balance} dhs</label>
        </div>
      
    </>
  );
}
