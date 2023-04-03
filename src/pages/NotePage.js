import React, {useState, useEffect} from 'react'

const urlLink = "http://127.0.0.1:8000/"
// const urlLink = "https://cotech-note-app-backend.onrender.com"
const NotePage = ({ match, history }) => {

    let noteId = match.params.id
    let [note, setNote] = useState(null)

    useEffect(() => {
        getNote()// eslint-disable-next-line
    }, [noteId, ])

    let getNote = async() => {

      if(noteId === 'new') return

      let response = await fetch(`${urlLink}/api/notes/${noteId}`)
      let data = await response.json()
      setNote(data)
    }

    let createNote = async () => {
      fetch(`${urlLink}/api/note/create`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(note)
      })
    }

    let updateNote = async () => {
      fetch(`${urlLink}/api/notes/`+noteId+"/update", {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(note)
      })
    }

    let deleteNote = async() => {
      fetch(`${urlLink}/api/notes/${noteId}/delete`, {
        method: 'DELETE',
        headers:{
          'Content-Type': 'application/json'
        }
      })
      history.push('/')
    }

    let handleSubmit = () => {
      if (noteId !== 'new' || !note.body) {
        deleteNote()
      } else if (noteId !== 'new') {
        updateNote()
      } else if(noteId === 'new' && note !== null) {
        createNote()
      }
      history.push('/')
    }


  return (
    <div className='note'>
      <div className='note-header'>
        
        <h1 className='back' onClick={handleSubmit} >&#8592;</h1>
        {/* <img src={ArrowLeft} onClick={handleSubmit} alt="arrowleft" /> */}
       
        {noteId !== 'new' ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
            <button onClick={handleSubmit} >Done</button>
        )}
      </div>
        <textarea onChange={ (e) => {setNote ({...note, 'body': e.target.value})} }  defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage