import { useEffect, useState } from "react";
import CardTask from "../../shared/card-task/CardTask";
import NoTask from "../../shared/no-tasks/NoTasks";
import Heading from "../../ui/heading/Heading";
import { ReactSortable } from "react-sortablejs";

const MyTasks = ({ tasks }) => {
  const [resTasks, setResTasks] = useState([]);

  return (
    <div>
      <Heading tag="h2" title="Мои задачи" />
      <div>
        {!resTasks.length ? (
          <NoTask title={"Активных задач нету"} emotion={'smile'} />
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

export default MyTasks;
