import './styles/UserCard.css'

const UserCard = ({ user, deleteUser, setInfoUpdate, setIsDisable, setDeleteState, setInfoDelete }) => {

    const handleDelete = () => {
        deleteUser('/users', user.id)
        setDeleteState(false)
        setInfoDelete(user)
    }

    const handleEdit = () => {
        setInfoUpdate(user)
        setIsDisable(false)
    }

    return (
        <article className='user-container'>
            <h2 className='user__title'>{user.first_name} {user.last_name}</h2>
            <ul className='user__list'>
                <li className='user__item'>
                    <span className='user__span'>Email</span>
                    <span className='user__value'>{user.email}</span>
                </li>
                <li className='user__item'>
                    <span className='user__span'>Birthday</span>
                    <span className='user__value'><i className='bx bx-gift'></i> {user.birthday}</span>
                </li>
            </ul>
            <section className='user__btns'>
                <button className='user__btn btn__delete' onClick={handleDelete}><i className='bx bx-trash'></i></button>
                <button className='user__btn btn__edit' onClick={handleEdit} ><i className='bx bx-edit-alt' ></i></button>
            </section>
        </article>
    )
}

export default UserCard