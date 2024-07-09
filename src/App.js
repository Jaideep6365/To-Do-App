import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState({ name: '', work: '', startTime: '', finishTime: '' });
  const [submitData, setSubmitData] = useState([]);

  function changeHandler(event) {
    setData(prevData => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  }

  function submitHandler() {
    setSubmitData(prevSubmitData => [...prevSubmitData, data]);
    setData({name:"", work:"", startTime:"", finishTime:""});
  }

  return (
    <div className="App background">
      <header className='bg-cyan-950 h-16 text-center py-3 text-white font-bold'>
        <h1 className='text-3xl'>To-Do List</h1>
      </header>
      <div className='flex justify-center -my-3'>
          <div className='bg-slate-700 p-8 flex flex-col justify-center items-center m-5 w-96 h-96 border rounded-3xl gap-4 '>
              <div>
                <p className='text-white'>Name:</p>
                <input
                  className='rounded-xl w-80 bg-slate-400 p-2'
                  type="text"
                  onChange={changeHandler}
                  name="name"
                  value={data.name}
                />
              </div>
              <div>
                <p className='text-white'>Work:</p>
                <input
                  className='rounded-xl w-80 bg-slate-400 p-2'
                  type="text"
                  onChange={changeHandler}
                  name="work"
                  value={data.work}
                />
              </div>
              <div>
                <p className='text-white'>Enter Starting Time:</p>
                <input
                  className='rounded-xl w-80 bg-slate-400 p-1'
                  type="time"
                  placeholder="Enter The Time"
                  onChange={changeHandler}
                  name="startTime"
                  value={data.startTime}
                />
              </div>
              <div className='text-white'>
                <p>Finish By Time:</p>
                <input
                  className='rounded-xl w-80 bg-slate-400 p-1'
                  type="time"
                  onChange={changeHandler}
                  name="finishTime"
                  value={data.finishTime}
                />
              </div>
              <button onClick={submitHandler} className='w-32 p-1 rounded-xl bg-cyan-400 font-semibold text-lg transition-transform transform hover:bg-blue-600 hover:scale-105'>Submit</button>
          </div>
      </div>

      {submitData.length>0 && (
        <div>
          <h2 className='font-bold text-3xl text-center'>Entries:-</h2>
          <div className='flex'>
            
            {
              submitData.map((entry, index)=>(
                <div className='bg-blue-500 w-52 p-3 m-3 gap-4 rounded-xl mx-20 shadow-sm' key={index}>
                  <p className='text-white text-center text-xl underline'>Work no:-{index+1}</p>
                  <p><span className='text-white font-bold'>Name:-</span> {entry.name}</p>
                  <p><span className='text-white font-bold'>Work:-</span> {entry.work}</p>
                  <p><span className='text-white font-bold'>Start By:-</span> {entry.startTime}</p>
                  <p><span className='text-white font-bold'>Finish By:-</span> {entry.finishTime}</p>
                  <div className='text-center text-xl my-0'>
                    <input type='checkbox' id='done' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 my-2'></input>
                    <label htmlFor='done' className='mx-1'>Done</label>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

