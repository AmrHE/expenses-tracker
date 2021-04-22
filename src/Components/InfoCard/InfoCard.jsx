import React from 'react'

// returns 50% => 1 and 50% => 0 which means (true or false)
const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div style={{ textAlign: 'center', padding: '0 10%' }}>
      Try saying: <br></br>
      Add {isIncome ? 'Income ' : 'Expense '} 
      for ${isIncome ? '100 ' : '50 '}  
      in category {isIncome ? 'Salary ' : 'House '}  
      for {isIncome ? 'Next Monday' : 'Last Tuesday'}
    </div>
  )
}

export default InfoCard
