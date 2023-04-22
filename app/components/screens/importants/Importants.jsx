import Heading from "../../ui/heading/Heading";
import CardTask from "../../shared/card-task/CardTask";
import NoTasks from "../../shared/no-tasks/NoTasks";
import { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";

const Importants = ({ tasks }) => {
  const [resTasks, setResTasks] = useState([]);

  useEffect(() => {
    const resTasks = tasks.filter((i) => i.isImportant);
    setResTasks(resTasks);
  }, []);

  return (
    <div>
      <Heading tag="h2" title="Важные задачи" />
      <div>
        {!resTasks.length ? (
          <NoTasks title={"Важных задач нету"} emotion={'smile'} />
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

export default Importants;
