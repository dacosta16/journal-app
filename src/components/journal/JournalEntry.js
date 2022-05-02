import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>

        <div className='journal__entry-picture' style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)'
        }}>
        </div>

        <div className='journal__entry-body'>
            <p className='journal__entry-title'>Un Nuevo Dia</p>
            <p className='journal__entry-content'>lorem ipsum solaris pretus gratius</p>
        </div>

        <div className='journal__entry-date-box'>
            <span>Monday</span>
            <h4>28</h4>
        </div>

    </div>
  )
}
