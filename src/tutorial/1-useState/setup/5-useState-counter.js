import React, { useState } from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  const resetCounter = () => {
    setValue(0)
  }

  const complexIncrease = () => {
    setTimeout(() => {
      // the below line won't work if we press the button 2 times within the interval.
      // setValue(value + 1)
      // to do so we can,
      setValue((prevState) => {
        return prevState + 1
      })
    }, 2000)
  }

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button
          className='btn'
          onClick={() => {
            if (value !== 0) {
              setValue(value - 1)
            }
          }}
        >
          decrease
        </button>
        <button className='btn' onClick={resetCounter}>
          reset
        </button>
        <button className='btn' onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>

      <section style={{ margin: '4rem 0' }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
