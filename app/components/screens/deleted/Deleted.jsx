import Heading from "../../ui/heading/Heading";
import CardTask from "../../shared/card-task/CardTask";
import { useEffect, useState } from "react";
import ConfirmDeletePopup from "../../shared/confirm-delete-popup/ConfirmDeletePopup";
import NoTasks from "../../shared/no-tasks/NoTasks";
import { ReactSortable } from "react-sortablejs";

const Deleted = ({ tasks }) => {
  const [isShowPopup, setShowPopup] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [activeStatus, setActiveStatus] = useState(null);
  const [resTasks, setResTasks] = useState([]);

  useEffect(() => {
    setResTasks(tasks);
  }, []);

  return (
    <div>
      <Heading tag="h2" title="Удаленные" />
      <div>
        {!resTasks.length ? (
          <NoTasks title={"Удаленных задач нетy"} emotion={"smile"} />
        ) : (
          <ReactSortable list={resTasks} setList={setResTasks}>
            {resTasks.map((i) => (
              <CardTask
                data={i}
                key={i._id}
                setShowPopup={setShowPopup}
                setActiveId={setActiveId}
                setResTasks={setResTasks}
                setActiveStatus={setActiveStatus}
              />
            ))}
          </ReactSortable>
        )}
      </div>

      {isShowPopup ? (
        <ConfirmDeletePopup
          setShow={setShowPopup}
          activeId={activeId}
          setResTasks={setResTasks}
          activeStatus={activeStatus}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Deleted;
