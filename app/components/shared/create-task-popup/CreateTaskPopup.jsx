import s from './CreateTaskPopup.module.scss'
import CrossIcon from '../../ui/icons/CrossIcon'
import CreateTaskForm from './create-task-form/CreateTaskForm'

const CreateTaskPopup = ({isShowPopup, setShowPopup}) => {
    return (
        <div className={[s.popup, isShowPopup ? s.active : s.inactive].join(' ')}>
            <div className={s.wrapper}>
                <div className={s.header}>
                    <h4>Задача</h4>
                    <CrossIcon onClick={() => setShowPopup(false)} className={s.icon} />
                </div>

                <CreateTaskForm setShowPopup={setShowPopup} />
            </div>
        </div>
    )
}

export default CreateTaskPopup