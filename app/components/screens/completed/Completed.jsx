import Heading from "../../ui/heading/Heading";
import CardTask from "../../shared/card-task/CardTask";
import NoTasks from "../../shared/no-tasks/NoTasks";
import { ReactSortable } from "react-sortablejs";
import { useEffect, useState } from "react";

const Completed = ({ tasks }) => {
  const [resTasks, setResTasks] = useState([]);

  useEffect(() => {
    setResTasks(tasks);
  }, []);

  return (
    <div>
      <Heading tag="h2" title="Выполненные" />
      <div>
        {!resTasks.length ? (
          <NoTasks title={"Все задачи выполнены"} emotion={'smile'} />
        ) : (
          <ReactSortable list={resTasks} setList={setResTasks}>
            {resTasks.map((i) => (
              <CardTask data={i} key={i._id} setResTasks={setResTasks} />
            ))}
          </ReactSortable>
        )}
      </div>
    </div>
  );
};

export default Completed;
