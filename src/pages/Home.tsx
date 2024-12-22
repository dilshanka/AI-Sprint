import Calender from '@/section/Home/Calender'
import Customers from '@/section/Home/Customers';
import ToDoList from '@/section/Home/ToDo';

const Home = () => {
  return (
    <div className='max-w-[1920px] mx-auto px-2 sm:px-4 py-10 sm:py-16'>
      <Calender /> 
      <ToDoList />
      <Customers />
    </div>
  )
}

export default Home;
