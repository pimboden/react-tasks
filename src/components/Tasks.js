
import { FaTimes } from 'react-icons/fa'
const tasks=[
  {
    id:1,
    text:"Doctor's Appointment",
    day: "Feb 5ht at 2:30pm",
    reminder:true,
  },
  {
    id:2,
    text:"Meeting at school",
    day: "Feb 6ht at 1:30pm",
    reminder:true,
  },
  {
    id:3,
    text:"Shopping",
    day: "Feb 5ht at 2:30pm",
    reminder:false,
  }
]
const Tasks = (props) =>{
  return(
   <>
   {tasks.map((task)=>(
    <div
    className={`task ${task.reminder && 'reminder'}`}
  >
    <h3>
      {task.text}{' '}
      <FaTimes
        style={{ color: 'red', cursor: 'pointer' }}n
      />
    </h3>
    <p>{task.day}</p>
  </div>


   ))}
   </>
  )
}
export default Tasks
