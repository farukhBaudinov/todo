import s from './ConfirmDeletePopup.module.scss'
import warning from '../../../assets/images/warning.svg'
import Image from 'next/image'
import MyButton from '../../shared/button/MyButton'
import axios from 'axios'

const ConfirmDeletePopup = ({setShow, activeId, activeStatus, setResTasks}) => {
    const deleteTask = async () => {
        await axios.delete(`http://localhost:5000/api/tasks/${activeId}`)
        await setShow(false)
        await updateData()
    }

    const updateData = async () => {
        const { data } = await axios.get(`http://localhost:5000/api/tasks/status/${activeStatus}`)
        await setResTasks(data)
    }

    return (
        <div className={s.popup}>
            <div className={s.wrapper}>
                <Image src={warning} width={80} height={80} alt='warning' />
                <h3>Вы уверены?</h3>
                <p>Вы не сможете восстановить это</p>
                <div className={s.btns}>
                    <MyButton theme={'filled'} onClick={deleteTask}>Да, удалить</MyButton>
                    <MyButton theme={'cancel'} onClick={() => setShow(false)}>Отмена</MyButton>
                </div>
            </div>
        </div>
    )
}

export default ConfirmDeletePopup