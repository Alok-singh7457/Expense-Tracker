import React, { useState } from 'react'

const Expense = () => {


  const [expenseTxt, setExpenseTxt] = useState('');
  const [expenseAmt, setExpenseAmt] = useState('')
  const [expenses, setExpenses] = useState([])

  const [income, setIncome] = useState('')
  const [displayIncome, setDisplayIncome] = useState('')
  const [isSummited, setIsSummited] = useState(false)

  const handleADD = () => {
    if (expenseAmt > 0 && expenseTxt.trim() !== '') {

      setExpenses([...expenses, { text: expenseTxt, amt: expenseAmt }]);
      setDisplayIncome((prevIncome) => prevIncome - Number(expenseAmt));
    }
    setExpenseTxt("")
    setExpenseAmt('')

  }

  const handleAddIncome = () => {


    setDisplayIncome(income)
    setIncome('')
    setIsSummited(true)


  }




  return (
    <>
      <div className='flex '>
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
                className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 '
              >Add</button>

            </div>

            <div className="income bg-gray-800 h-16 w-[20vw] rounded-lg flex items-center justify-around">


              <input type="number" name="" id=""
                onChange={(e) => setIncome(e.target.value)}
                value={income}
                disabled={isSummited}
                placeholder='Write your Income'
                className='Income h-11 pl-4 rounded-lg text-gray-800 outline-none'
              />


              <button onClick={handleAddIncome}
                disabled={isSummited}
                className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 '>Add</button>
            </div>
          </div>

          <div className="output">
            {expenses.map((expense, index) => (
              <div className="outputItem flex gap-4 pl-3">

                <div key={index} className='flex gap-3' >
                  <li>{expense.text}</li>
                  <p>{expense.amt}</p>
                </div>


              </div>
            ))}

          </div>
        </div>


        <div className="container2 w-1/3  h-[90vh] ">
          <div className='total'>
            <p className='text-4xl text-gray-900 font-extrabold '>Money Left ={displayIncome} </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Expense
