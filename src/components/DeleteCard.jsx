import './styles/DeleteCard.css'

const DeleteCard = ({deleteState, setDeleteState, infoDelete}) => {

  const handleExitDelete = () =>{
    setDeleteState(true)
  }

  return (
    <div className={`delete-container ${deleteState && 'delete__disable'}`}>
      <article className='delete'>
        <h2 className="delete__title">Delete User</h2>
        <div onClick={handleExitDelete} className="delete__x"><i className='bx bx-x-circle'></i></div>
        <p className="delete__p">The user <span className="delete__span">{infoDelete?.first_name} {infoDelete?.last_name}</span> has been delete</p>
        <button onClick={handleExitDelete} className="delete__btn">Accept</button>
      </article>
    </div>
  )
}

export default DeleteCard