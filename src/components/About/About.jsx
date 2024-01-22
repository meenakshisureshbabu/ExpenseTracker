import React from 'react'
import Header from '../Header/Header';
import '../About/about.css'

function About() {
  return (
    <>
    <Header/>
    <div className='main-about-div'>
        <div  className='about-div'>
        <div>
            <div className='img-div'>
            <img className='logo-img' src="https://media.freshbooks.com/wp-content/uploads/2022/02/expense-tracking.jpg" alt="Logo"></img>
            </div>
        </div>
        <div className='text-div'>
            <div>
              <p>Expense tracking helps your life by allowing you to identify and manage spending in an efficient time frame. It's essential to be aware of your cash flows so you can note any areas of excessive or inefficient spending.</p>
              <p><h2>Use our App today to feel better about your future.</h2></p>
            </div>
        </div>
        <div>

        </div>
        </div>
    </div>
    </>
  )
}

export default About