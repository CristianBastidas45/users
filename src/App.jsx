import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import DeleteCard from './components/DeleteCard'

function App() {

  const [infoUpdate, setInfoUpdate] = useState()
  const [isDisable, setIsDisable] = useState(true)
  const [infoDelete, setInfoDelete] = useState()
  const [deleteState, setDeleteState] = useState(true)

  // const url = 'https://users-crud.academlo.tech'
  // const url = 'http://localhost:8080'
  const url = 'https://users-backend-dev-xhtx.3.us-1.fl0.io'
  
  const [users, getUsers, createUser, deleteUser,updateUser] = useCrud(url)

  useEffect(()=>{
    getUsers('/users')
  },[])

  const handleNewUser = () =>{
    setIsDisable(false)
  }

  return (
    <div className='principal-container'>
      <header className='header'>
        <h1>Users</h1>
        <button onClick={handleNewUser} className='header__btn' >+ Create new User</button>
      </header>
      <DeleteCard
        deleteState ={deleteState}
        setDeleteState={setDeleteState}
        infoDelete={infoDelete}
      />
      <FormUser 
        createUser = {createUser}
        infoUpdate = {infoUpdate}
        setInfoUpdate ={setInfoUpdate}
        updateUser={updateUser}
        isDisable={isDisable}
        setIsDisable={setIsDisable}
      />
      <div className='cards-container'>
        {
          users?.map(user=>(
            <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setInfoUpdate={setInfoUpdate}
            setIsDisable={setIsDisable}
            setDeleteState={setDeleteState}
            setInfoDelete={setInfoDelete}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
