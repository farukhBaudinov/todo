import { useState } from 'react';
import MyButton from '../../shared/button/MyButton';
import CreateTaskPopup from '../../shared/create-task-popup/CreateTaskPopup';
import s from './Menu.module.scss'
import Nav from './nav/Nav';
import Tags from './tags/Tags';

const Menu = () => {
  const [isShowPopup, setShowPopup] = useState(false)

    return (
      <div className={s.menu}>
        <div className={s.wrapper}>
          <MyButton theme={"filled"} onClick={() => setShowPopup(true)}>
            Новая задача
          </MyButton>
          <Nav />
          <Tags />
        </div>

          <CreateTaskPopup
            isShowPopup={isShowPopup}
            setShowPopup={setShowPopup}
          />
      </div>
    );
}

export default Menu