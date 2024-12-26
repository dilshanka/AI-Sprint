import Calender from '@/section/Home/Calender'
import CustomerCalls from '@/section/Home/CustomerCalls';
import ProspectingCustomers from '@/section/Home/ProspectingCustomers';
import ToDoList from '@/section/Home/ToDo';

const Home = () => {
  return (
    <div className='max-w-[1920px] mx-auto px-2 sm:px-4 py-10 sm:py-16'>
      <Calender /> 
      <ToDoList />
      <CustomerCalls />
      <ProspectingCustomers />
    </div>
  )
}

export default Home;
