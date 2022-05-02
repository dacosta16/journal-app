import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>

        <NotesAppBar />

        <div className='notes__content'>
            
            <input 
                type='text'
                placeholder='Some awesome title'
                className='notes__title-input'    
            />

            <textarea
                placeholder='What happened today?'
                className='notes__text-area'
            ></textarea>

            <div className='notes__image'>
                <img src='https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='imagen'/>
            </div>
        
        </div>
        
    </div>
  )
}
