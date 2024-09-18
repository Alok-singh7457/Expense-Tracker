import React, { useState } from 'react'

const Expense = () => {


  const [expenseTxt, setExpenseTxt] = useState('');
  const [expenseAmt, setExpenseAmt] = useState(Number)
  const [expenses , setExpenses] = useState([])
 

  const handleADD = () =>{
    if(expenseAmt > 0 && expenseTxt.trim() !== ''){

          setExpenses([...expenses, { text: expenseTxt, amt: expenseAmt }]);
        }
              setExpenseTxt("")
              setExpenseAmt(0)

  }




  return (
    <>
      <div className='flex'>
        <div className="container w-2/3 bg-slate-500 h-[90vh] ">

          <div className="internal h-20 bg-slate-300 flex items-center  gap-2">

            <div className="expense  text-black bg-slate-300 w-[45vw] h-16 rounded-lg flex gap-2 items-center justify-evenly">
              <input type="text"
                onChange={(e) => setExpenseTxt(e.target.value)}
                value={expenseTxt}
                className='expensetxt h-11 w-[28vw] pl-4 rounded-lg outline-none'
                placeholder='Write your Expense' />


              <input type="number"
                onChange={(e) => setExpenseAmt(e.target.value)}
                value={expenseAmt}
                className='expenseNum h-11 w-[8vw] pl-2 rounded-lg text-center outline-none'
                placeholder='Exp Amt'
              />
              <button onClick={handleADD}
                className='bg-gray-800 h-7 w-12 text-white rounded-lg'
              >Add</button>

            </div>

            <div className="income bg-gray-800 h-16 w-[20vw] rounded-lg flex items-center justify-around">


              <input type="number" name="" id=""
                placeholder='Write your Income'
                className='Income h-11 pl-4 rounded-lg text-gray-800'
              />


              <button className='bg-white h-7 w-12 text-gray-800 rounded-lg font-semibold'>Add</button>
            </div>
          </div>

          <div className="output">
            <div className="outputItem flex gap-4 pl-3">
              {expenses.map((expense , index) =>(
                <div key={index} >
                  <p>{expense.text} </p>
                  <p>{expense.amt} </p>
                </div>
              ))}

            </div>


          </div>





        </div>


        <div className="container2 w-1/3  h-[90vh] ">
          <div className='total'>
            <p className='text-8xl'>Left = </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Expense
