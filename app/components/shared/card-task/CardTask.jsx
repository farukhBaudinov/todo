import MyCheckbox from "../checkbox/MyCheckbox";
import s from "./CardTask.module.scss";
import BasketIcon from "../../ui/icons/BasketIcon";
import DotsIcon from "../../ui/icons/DotsIcon";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import RotateIcon from "../../ui/icons/RotateIcon";

const CardTask = ({ data, setShowPopup, setActiveId, setResTasks, setActiveStatus }) => {

  const {
    _id,
    name,
    description,
    endTime,
    endDate,
    status,
    tags,
    isImportant,
  } = data;

  const router = useRouter();
  const isImportantPage = router.route === "/" ? isImportant : false;

  const getElementByTag = (tag) => {
    switch (tag) {
      case "Образование": return (<div className={s.green} key={tag}>{tag}</div>);
      case "Продуктивность": return (<div className={s.purple} key={tag}>{tag}</div>);
      case "Здоровье":return (<div className={s.orange} key={tag}>{tag}</div>);
      case "Срочно":return (<div className={s.red} key={tag}>{tag}</div>);
      default: return "";
    }
  };

  const [curStatus, setCurStatus] = useState(status);
  const [isChecked, setChecked] = useState(status === 'active' ? false : true)

  const changeStatus = async () => {
    await axios.patch(`http://localhost:5000/api/tasks/${_id}`, {
      status: curStatus,
    });
  };

  useEffect(() => {
    if (!isChecked) {
      setCurStatus('active') 
    } else setCurStatus('completed')
    if (router.route !== '/deleted' && router.route !== '/resultSearch') {
      updateData()
    }
    setActiveStatus && setActiveStatus(status)
  }, [isChecked])

  useEffect(() => { 
    changeStatus();
    if (router.route !== '/deleted' && router.route !== '/resultSearch') {
      updateData()
    }
    setActiveStatus && setActiveStatus(status)
  }, [curStatus]);
  
  const deleteTask = async () => {
    if (status === "deleted") {
      if (router.route === "/deleted" || router.route === "/resultSearch") {
        setShowPopup(true);
        setActiveId(_id);
      } else setCurStatus("deleted");
    } else setCurStatus("deleted");
  }

  const updateData = async () => {
    const { data } = await axios.get(`http://localhost:5000/api/tasks/status/${status}`)
    await setResTasks(data)
  }

  return (
    <div className={s.cardTask}>
      <div className={s.wrapper}>
        <div className={s.left}>
          {status !== "deleted" ? (
            <MyCheckbox value={isChecked} setValue={setChecked} />
          ) : (
            ""
          )}
          <h4
            className={[s.title, isImportantPage ? s.important : ""].join(" ")}
          >
            {name}
          </h4>
        </div>

        <div className={s.right}>
          <div className={s.tags}>
            {tags.map((tag) => getElementByTag(tag))}
          </div>
          <span className={s.date}>{`${endTime} / ${endDate}`}</span>
          <BasketIcon
                className={s.basket}
                onClick={deleteTask}
              />
          {status === "deleted" ? (
            <RotateIcon
              className={s.rotate}
              onClick={() => setCurStatus("active")}
            />
          ) : (
            <>
              <DotsIcon className={s.dots} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardTask;
