import './App.css';
import Textbox from './Components/Textbox';
import Switchbox from './Components/Switchbox';
import TableInputs from './Components/TableInputs';
import Button from './Components/Button';

function App() {
  return (
    <div className='w-full h-full grid grid-cols-custom-1 grid-rows-custom-1'>

      <div className='col-span-full row-start-1 row-end-2
                      flex justify-center items-center
                      w-full h-full'>
        <h1 className='text-4xl font-bold'>Tittle</h1>
      </div>

      <div className='col-start-1 col-end-2 row-start-2 row-end-3
                      w-full h-full px-60 py-16
                      flex justify-center items-center flex-col gap-4'>
        <Textbox iconName={'home-outline'} placeHolder={'Price'} id={'price-textbox'} inputType={'money'}/>
        <Textbox iconName={'wallet-outline'} placeHolder={'Down Payment'} id={'downPayment-textbox'} inputType={'money'}/>
        <Textbox iconName={'calculator-outline'} placeHolder={'Interest'} id={'interest-textbox'} inputType={'percentage'}/>
        <Textbox iconName={'calendar-outline'} placeHolder={'Years'} id={'years-textbox'} inputType={'text'}/>
        <Switchbox id={'rolling-checkbox'} text={'Rolling Cost'}/>
      </div>

      <div className='col-start-2 col-end-3 row-start-2 row-end-3 
                      w-full h-full px-60 pt-10
                      flex flex-col'>
        <TableInputs/>
        <Textbox iconName={'cash-outline'} placeHolder={'Rent'} id={'rent-textbox'} inputType={'money'}/>
      </div>

      <div className='col-start-1 col-end-2 row-start-3 row-end-4 
                      w-full h-full flex flex-col px-60 pb-8'>
        <Textbox iconName={'briefcase-outline'} placeHolder={'Min Cashflow'} id={'min-cashflow-textbox'} inputType={'money'}/>
        <Textbox iconName={'cash-outline'} placeHolder={'Min Rent'} id={'min-rent-textbox'} inputType={'money'}/>
      </div>

      <div className='col-start-2 col-end-3 row-start-3 row-end-4 
                      w-full h-full flex justify-center items-center'>
        <Button />
      </div>
    </div>
  );
}

export default App;
